from PIL import Image
import sys
import os

print('Number of arguments:', len(sys.argv), 'arguments.')
print('Argument List:', str(sys.argv))

directory = sys.argv[1]

for filename in os.listdir(directory):
    if filename.endswith(".png"):
        print(filename)
        im = Image.open(directory + "/" + filename)
        print(im.size)
        resolution = (314, 640)
        scaler = Image.ANTIALIAS
        img2 = im.resize(resolution, scaler)
        img2.save(directory + '/' + filename)
        # im.save(directory + '/backup_' + filename)
    else :
        continue