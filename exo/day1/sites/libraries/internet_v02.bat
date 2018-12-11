@echo off
rem Internet_v02.bat
rem Ce script permet de configurer l'accès Internet d'une machine

rem Ajout des serveurs DNS à l'interface réseau
netsh interface ip set dnsservers "Ethernet" static 8.8.8.8 primary

rem Décomposition de l'adresse IP 4 octets
ipconfig > c:\windows\temp\fic_ipconfig.txt

rem Lecture du fichier fic_ipconfig.txt
rem Extraction de la ligne contenant "Ethernet" et des 5 lignes qui suivent
rem Extraction de l'adresse IP puis redirection vers ipconfig_reseaulocal.txt
cat c:\windows\temp\fic_ipconfig.txt | grep -A 5 "Ethernet :" > c:\windows\temp\Ipconfig_reseaulocal.txt

Rem Recupération de l'adresse IPv4 et copie dans la variable IP
FOR /F "usebackq tokens=1,2 delims=:" %%i in (`type c:\windows\temp\Ipconfig_reseaulocal.txt ^| find "Adresse IPv4"`) do set IP=%%j
FOR /F "usebackq tokens=1,2 delims=:" %%k in (`type c:\windows\temp\Ipconfig_reseaulocal.txt ^| find "Masque"`) do set MASK=%%l

rem Separation des octets de l'adresse IPv4
rem Recuperation de l'octet 1
echo %IP% | cut -d "." -f1 > c:\windows\temp\temp.txt
FOR /F "usebackq tokens=1" %%f in (`type c:\windows\temp\temp.txt`) do set octet1=%%f

rem Recuperation de l'octet 2
echo %IP% | cut -d "." -f2 > c:\windows\temp\temp.txt
FOR /F "usebackq tokens=1" %%f in (`type c:\windows\temp\temp.txt`) do set octet2=%%f

rem Recuperation de l'octet 3
echo %IP% | cut -d "." -f3 > c:\windows\temp\temp.txt
FOR /F "usebackq tokens=1" %%f in (`type c:\windows\temp\temp.txt`) do set octet3=%%f

rem Recuperation de l'octet 4
echo %IP% | cut -d "." -f4 > c:\windows\temp\temp.txt
FOR /F "usebackq tokens=1" %%f in (`type c:\windows\temp\temp.txt`) do set octet4=%%f

rem Détermination du site (Paris ou Région)
if "%octet1%" == "192" goto reseau-paris
if "%octet1%" == "10" goto reseau-region

:reseau-paris
rem Test de la connexion
set iptest=192.168.%octet3%.254
ping  %iptest% -n 2 > nul
if %errorlevel% == 1 goto pas-reseau
if %errorlevel% == 0 goto reseau

:reseau-region
rem Test de la connexion
set iptest=10.0.0.1
ping  %iptest% -n 2 > nul
if %errorlevel% == 1 goto pas-reseau
if %errorlevel% == 0 goto reseau

rem Cas où la connexion ne fonctionne pas
:pas-reseau
echo Erreur de configuration, merci de contacter le servive informatique.
pause
exit

rem Cas où la connexion fonctionne
:reseau
echo La connexion internet est fonctionnelle.
echo L'interface de saisie des evaluations va s'ouvrir
sleep 2s

rem Ouverture du site des évaluations
"C:\Program Files\Internet Explorer\iexplore.exe" http://eval.orsys.fr
exit
