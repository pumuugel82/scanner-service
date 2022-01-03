#/bin/bash

sudo scanimage --batch=scan_raw%d.tiff --format=tiff -x 209 -y 297

gm convert ./scan_raw*.tiff -trim -density 150x150 -resample 96x96 -compress JPEG -colorspace Gray ./fullscan_gray.pdf
