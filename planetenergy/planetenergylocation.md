## Using a Custom Location with the Planet Energy Sim

You can now use a custom location with the planet energy sim using latitude and longitude. When I first made the app it was just for my classroom in Chicago so that is where the marker on Earth was, but now it is for every one. Looking at an example is probably the easiest:

This will point to Stockholm, Sweden:

    https://whscience.org/planetenergy/?lat=59&lon=18&name=Stockholm
    
To point to the location there are three parts, each of them optional;

    lat=59
    
Sets the latitude to be 59° N

    lon=18
    
Sets the longitude to be 18° E

    name=Stockholm

Sets the name you want on the marker. 

For all, start with a ? and separate with & as seen in the example. 

### FAQ

**Can I use C instead of F?**

Yes, same process but with a slightly different url. (notice the little c after planetenergy)

    https://whscience.org/planetenergyc/?lat=59&lon=18&name=Stockholm
    
    https://whscience.org/planetenergywithlightc/?lat=59&lon=18&name=Stockholm


**How do I share this with students? I don't think they will type out the latidue and longitude.**

You set it up, check it, and then share a ready made link with them directly however you might share a link. tinyurl works if you need it. Just don't tell them to go to whscience.org and click through. 

**Can I use non whole number latitude/lognitude?**

Yes, you can use decimal degrees. 59.33 is good. Degree-Minute-Second doesn't work so 59°19′46″N is bad. 

    https://whscience.org/planetenergy/?lat=59.3&lon=18.1&name=Stockholm
    
In all honesty, the whole number degree is probably good enough. My little picture of Earth isn't super accurate anyway.

**How do I enter West Longitudes**

You can use either negative numbers or put W on the end. For example:

    https://whscience.org/planetenergy/?lat=37.78&lon=-122.4&name=San%20Francisco

    https://whscience.org/planetenergy/?lat=37.78&lon=122.4W&name=San%20Francisco
    
Just don't use both negative and W. Using both will confuse the app. 

**Can I use the Southern Hemisphere?**

Sadly No, not at this time. I feel bad but I don't have a similar image of the sourthern hemisphere handy so for now its only north latitudes. If there is need I'll work on it. 

**I tried to type a name with a space and it turned into %20.

That's fine. The link should still work. 

**I set a new location but nothing happened.**

Sometimes you need to click the url and hit enter a second time to get it to reload. 

**Do I have to use all the parts?**

No, you can leave out any of lat, lon, or name. It will default to lat=41.88 and lon=-87.6 (Chicago again). If you don't put a name it will just be a dot without a label. You cannot just use a new name without changing either latiude or longitude. 
