# gource --title "Reboot" --key --date-format "%D" --seconds-per-day 0.05 --auto-skip-seconds 0.05 --file-idle-time 15 -1280x720 -o - | ffmpeg -y -r 60 -f image2pipe -vcodec ppm -i - -vcodec libvpx -b 10000K demo.webm

# --user-image-dir .git/avatar/
# --background-image bitbucket_rgb_blue_small.png
# --logo atlassian_cmyk_white_stacked.png
# --start-date '2014-01-01' --stop-date '2015-01-01'
# --default-user-image charlie_cmyk_cyan.png
# --git-branch staging
# --user-scale 4    

gource -1280x720 -s 0.000001 --key --title "Reboot" \
--max-file-lag 0.1 --auto-skip-seconds 0.25 --user-image-dir . \
--hide progress,filenames,dirnames,usernames,mouse --date-format \
"%Y-%m-%d %H:%M:%S" --multi-sampling --bloom-multiplier 1.1 --bloom-intensity 0.4 --file-idle-time 0 \
--font-colour 3b73af \
--max-user-speed 150 --user-friction 1 -o - | ffmpeg -y -r 60 -f image2pipe \
-vcodec ppm -i - -vcodec libx264 -preset ultrafast -pix_fmt yuv420p -crf 1 -threads 8 \
-bf 0 gource.mp4