#!/bin/bash

packages=("axios" "react-dom" "react-redux" "react-router-dom" "react-toastify" "react-scripts" "react-toolkit" "web-vitals")

echo "Updating package list !!!"
sudo apt-get update
if [ $? -ne 0 ]
then
	echo "sudo apt-get update is failed"
	exit
fi

echo "Installing packages from list !!!"
for pkg in ${packages[*]}
do
	yarn add $pkg
	if [ $? -ne 0 ]
	then
		echo "$pkg is not installed"
	fi
done
