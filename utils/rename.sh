#! /bin/bash 

cd /Users/winson/Developer/Majong_train/datasets/mahjong1/labels/val;


# for f in *.*.txt; 
# do i="${f%.txt}"; 
# 	echo mv -i -- "$f" "${i//./_}.txt"; 
# done

var = 0 
for f in *.txt; 
do 
	let "var += 1" 
	mv -i -- "$f" "${f##*_}";  
done 


