# Users

```bash
whoami
> huakun
id
> uid=1000(huakun) gid=1000(huakun) groups=1000(huakun),4(adm),24(cdrom),27(sudo),30(dip),46(plugdev),116(lpadmin),126(sambashare)
```

```bash
tail /etc/passwd

pulse:x:115:120:PulseAudio daemon,,,:/var/run/pulse:/usr/sbin/nologin
avahi:x:116:122:Avahi mDNS daemon,,,:/var/run/avahi-daemon:/usr/sbin/nologin
colord:x:117:123:colord colour management daemon,,,:/var/lib/colord:/usr/sbin/nologin
hplip:x:118:7:HPLIP system user,,,:/var/run/hplip:/bin/false
geoclue:x:119:124::/var/lib/geoclue:/usr/sbin/nologin
gnome-initial-setup:x:120:65534::/run/gnome-initial-setup/:/bin/false
gdm:x:121:125:Gnome Display Manager:/var/lib/gdm3:/bin/false
huakun:x:1000:1000:Huakun,,,:/home/huakun:/bin/bash
nvidia-persistenced:x:122:127:NVIDIA Persistence Daemon,,,:/nonexistent:/sbin/nologin
mysql:x:123:128:MySQL Server,,,:/nonexistent:/bin/false

# each of the leading word is a user, /bin/false or /usr/sbin/nologin means cannot login, provides more security
```

```bash
tail /etc/group

avahi:x:122:
colord:x:123:
geoclue:x:124:
gdm:x:125:
huakun:x:1000:
sambashare:x:126:huakun
nvidia-persistenced:x:127:
mysql:x:128:
docker:x:999:
vboxusers:x:129:
# shows which users is part of a group
```

```bash
tail /etc/shadow

pulse:*:18113:0:99999:7:::
avahi:*:18113:0:99999:7:::
colord:*:18113:0:99999:7:::
hplip:*:18113:0:99999:7:::
geoclue:*:18113:0:99999:7:::
gnome-initial-setup:*:18113:0:99999:7:::
gdm:*:18113:0:99999:7:::
huakun:$6$2afzrJ6m$Mx8ZlApw03risfsUVjNmhguGoIoRlA3DPnhThI.9aHTHtfwJyre5qINqHzyn93U5LuOQKVwbOwl4.Do5kkNLo.:18314:0:99999:7:::
nvidia-persistenced:*:18317:0:99999:7:::
mysql:!:18322:0:99999:7:::	# the '!' means cannot login, even if you have a password
```

## Add and Delete User

```bash
useradd -m -d /home/new-username -u 1501 -g 66 -s /bin/bash new-username# add a user
# -m create home, -d home directory, -u user id, -g group id, -s shell to use, username at the end

# verify with tail /etc/passwd, or ls -l /home to see if new user is in home dir

passwd new-username	# set user password
usermod -L username	# lock user, see a '!' in /etc/shadow on the line the user belongs to
usermod -U username # unlock user

userdel username
rm -rf /home/schnerg	# userdel doesn't clean up the home dir

man newusers	# create many users at once
```

