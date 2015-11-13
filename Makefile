# Author: Kelly Johnson
# Copyright 2015
# This work is licenced under Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License
# http://creativecommons.org/licenses/by-nc-sa/4.0/
#
# Make rules to make all the things

# Default settings, save contents (sans .zip) to unique name
seed?=manual
name?=${seed}$(shell date "+%Y-%m%d-%H.%M.%S").zip
dest?=${name}
files?=$(shell ls|\grep -v .zip)

# `make` will give you 1 zip file of what you want
default: clean zip

# Get rid of old zips
clean:
	-rm *.zip

# Make zip uploadable to elastic beanstalk
zip:
	zip -r ${dest} ${files}
