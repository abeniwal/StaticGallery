import os, sys
from PIL import Image

size = (300,300)
med_size = (1000,1000)

for infile in os.listdir(os.getcwd()+"/images/high-res/"):
    outfile = os.getcwd()+"/images/thumbnails/"+infile
    try:
        im = Image.open(os.getcwd()+"/images/high-res/"+infile)
        im.thumbnail(size, Image.ANTIALIAS)
        im.save(outfile, "JPEG")
    except IOError:
        print "cannot create thumbnail for", infile

    outfile = os.getcwd()+"/images/med-res/"+infile
    try:
        im = Image.open(os.getcwd()+"/images/high-res/"+infile)
        im.thumbnail(med_size, Image.ANTIALIAS)
        im.save(outfile, "JPEG")
    except IOError:
        print "cannot create med-res for", infile