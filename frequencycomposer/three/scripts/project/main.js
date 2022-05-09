
let audioContext = null;
let destinationNode = null;

runOnStartup(async runtime =>
{
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

function OnBeforeProjectStart(runtime)
{
	// On startup get the AudioContext and destination node from
	// Construct's Audio object. This lets Construct manage the creation
	// of the AudioContext and working around browser autoplay restrictions.
	const audioObjectType = runtime.objects.Audio;
	audioContext = audioObjectType.audioContext;
	destinationNode = audioObjectType.destinationNode;
}

// Helper function to create a mono AudioBuffer with a length in seconds
function CreateAudioBuffer(duration)
{
	return audioContext.createBuffer(
		1,							// 1 channel (mono)
		// convert duration from seconds to a whole number of samples
		Math.round(duration * audioContext.sampleRate),
		audioContext.sampleRate		// same sample rate as output
	);
}

// Helper function to play an AudioBuffer
function PlayAudioBuffer(audioBuffer)
{
	const source = audioContext.createBufferSource();
	source.buffer = audioBuffer;
	source.connect(destinationNode);
	source.start();
}

// Create an audio buffer filled with random samples, which
// sounds like noise.
function CreateNoiseBuffer()
{
	const audioBuffer = CreateAudioBuffer(1 /* one second long */);
	
	const sampleData = audioBuffer.getChannelData(0);
	for (let i = 0, len = sampleData.length; i < len; ++i)
	{
		// Generate a random sample. AudioBuffers represent each sample
		// as a value from -1 to 1.
		const randomSample = Math.random() * 2 - 1;
		
		// Using the full amplitude of the buffer will use the maximum
		// volume, which can be uncomfortable. So reduce the volume to
		// 25% linearly, which is about -12dB.
		sampleData[i] = randomSample * 0.25;
	}
	
	return audioBuffer;
}

// Playing noise first creates a noise buffer then plays it.
export function PlayNoise()
{
	const noiseBuffer = CreateNoiseBuffer();
	PlayAudioBuffer(noiseBuffer);
}

// Create an audio buffer with a tone at a given frequency in Hz.
// This uses a sine wave, like an oscillator.
function CreateToneBuffer(frequency)
{
	const audioBuffer = CreateAudioBuffer(0.6 /* one second long */);
	
	// Math.sin() normally works in radians, where a full cycle is
	// 2π radians. This needs to be converted so that a full cycle will
	// happen the given number of times per second. Also note that since
	// this works in samples, the number of samples that take one second
	// is the sample rate of the audio output.
	const phi = frequency * Math.PI * 2 / audioContext.sampleRate;
	
	const sampleData = audioBuffer.getChannelData(0);
	for (let i = 0, len = sampleData.length; i < len; ++i)
	{
		// Using the full amplitude of the buffer will use the maximum
		// volume, which can be uncomfortable. So reduce the volume to
		// 25% linearly, which is about -12dB.
		sampleData[i] = Math.sin(i * phi) * 0.25;
	}
	
	return audioBuffer;
}

function CreateTwoToneBuffer(f1,f2)
{
	const audioBuffer = CreateAudioBuffer(0.6 /* one second long */);
	
	// Math.sin() normally works in radians, where a full cycle is
	// 2π radians. This needs to be converted so that a full cycle will
	// happen the given number of times per second. Also note that since
	// this works in samples, the number of samples that take one second
	// is the sample rate of the audio output.
	const phi1 = f1 * Math.PI * 2 / audioContext.sampleRate;
	const phi2 = f2 * Math.PI * 2 / audioContext.sampleRate;
	
	const sampleData = audioBuffer.getChannelData(0);
	for (let i = 0, len = sampleData.length; i < len; ++i)
	{
		// Using the full amplitude of the buffer will use the maximum
		// volume, which can be uncomfortable. So reduce the volume to
		// 25% linearly, which is about -12dB.
		sampleData[i] = (Math.sin(i * phi1) * 0.25 + Math.sin(i * phi2) * 0.25)*Math.pow((sampleData.length - i)/sampleData.length,0.25);
	}
	
	return audioBuffer;
}

function CreateThreeToneBuffer(f1,f2,f3)
{
	const audioBuffer = CreateAudioBuffer(0.6 /* one second long */);
	
	// Math.sin() normally works in radians, where a full cycle is
	// 2π radians. This needs to be converted so that a full cycle will
	// happen the given number of times per second. Also note that since
	// this works in samples, the number of samples that take one second
	// is the sample rate of the audio output.
	const phi1 = f1 * Math.PI * 2 / audioContext.sampleRate;
	const phi2 = f2 * Math.PI * 2 / audioContext.sampleRate;
	const phi3 = f3 * Math.PI * 2 / audioContext.sampleRate;
	
	const sampleData = audioBuffer.getChannelData(0);
	for (let i = 0, len = sampleData.length; i < len; ++i)
	{
		// Using the full amplitude of the buffer will use the maximum
		// volume, which can be uncomfortable. So reduce the volume to
		// 25% linearly, which is about -12dB.
		sampleData[i] = (Math.sin(i * phi1) * 0.25 + Math.sin(i * phi2) * 0.25  + Math.sin(i * phi3) * 0.25)*Math.pow((sampleData.length - i)/sampleData.length,0.25);
	}
	
	return audioBuffer;
}

// Create tone buffers with the frequences of each note, and then play them.
// See: https://en.wikipedia.org/wiki/Piano_key_frequencies
export function PlayTwo(F1,F2)
{
	const toneBuffer = CreateTwoToneBuffer(F1,F2 /* frequency of note C5 in Hz */);
	PlayAudioBuffer(toneBuffer);
}

export function PlayThree(F1,F2,F3)
{
	const toneBuffer = CreateThreeToneBuffer(F1,F2,F3 /* frequency of note C5 in Hz */);
	PlayAudioBuffer(toneBuffer);
}

export function PlayTone(F1,F2)
{
	const toneBuffer = CreateToneBuffer(F1 /* frequency of note C5 in Hz */);
	PlayAudioBuffer(toneBuffer);
}

export function PlayToneC()
{
	const toneBuffer = CreateToneBuffer(523.25 /* frequency of note C5 in Hz */);
	PlayAudioBuffer(toneBuffer);
}

export function PlayToneE()
{
	const toneBuffer = CreateToneBuffer(659.26 /* frequency of note E5 in Hz */);
	PlayAudioBuffer(toneBuffer);
}

export function PlayToneG()
{
	const toneBuffer = CreateToneBuffer(783.99 /* frequency of note G5 in Hz */);
	PlayAudioBuffer(toneBuffer);
}