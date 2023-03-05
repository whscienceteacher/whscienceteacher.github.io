## Badges App How To

To use this app, you need to put the data into a .txt or .csv file on the internet that you control. For example, if your data were in https://example.com/achievementdata.txt, you would make the URL:  

    https://whscience.org/achievements/#https://example.com/achievementdata.txt

The first row of the file is: [The Title],[url to image file]

For example:

    1st Period Spreadsheet Badges,https://i.postimg.cc/PJ6MhH9C/Spreadsheet-Charm.png

The image file needs to be hosted on a server that allows cross linking. postimg.cc is one option that I know works. Make sure you include the https:// and the .png or .jpg. 

The rest of the file should be a basic CSV file with names in the first column and badge level in the second column.

For example:

    Alice,2
    Bob,1
    Carol,3
    David,2

If you don't have a way to host the file, you can use github gist. You need to make an account and link to the raw version of the file without the revision number.

For example, I made this gist:

    https://gist.github.com/whscienceteacher/b8a94288935ab975216d39df9989d297

to get the link I would click raw, which would give me:

    https://gist.githubusercontent.com/whscienceteacher/b8a94288935ab975216d39df9989d297/raw/d63e3d6aad68132847c79884b4fb88e882317e0c/ExampleAchievementData.csv

That would work, but that includes the revision number (the part after /raw/) so the link won't update if I update the file. So I should take out everything between /raw/ and /FileName. It would look like this:

    https://gist.githubusercontent.com/whscienceteacher/b8a94288935ab975216d39df9989d297/raw/ExampleAchievementData.csv

Or the whole thing would be:

    https://whscience.org/achievements/https://gist.githubusercontent.com/whscienceteacher/b8a94288935ab975216d39df9989d297/raw/ExampleAchievementData.csvtfrggggggtrffff