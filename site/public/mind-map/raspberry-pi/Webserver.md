# Raspberry Pi Web-Server (http and https)

## Description 
Information for setting up a secure (https) webserver using a raspberry pi, nginx, certbot and a DNS provider. Based on a tutoiral from Luke Smith; however, in this version, a Raspberry Pi was used to host the site instead of a cloud service provider such as Amazon. Other good resources include this video from Fireship, which talks about the deployment of a website on a Raspberry Pi.

## Proxy Server (nginx)
1. Reverse proxy server (TCP/UDP)
2. Documentation: [nginx](https://nginx.org/en/)
3. Tutorial: [PiMyLifeUp](https://pimylifeup.com/raspberry-pi-nginx/)

### Installation 

```bash
sudo apt-get remove apache2 # Ensure apache2 in not installed
sudo apt-get install nginx # Install
```

### Setup
Copy the default nginx configuration to a new configuration:

```bash
cp /etc/nginx/sites-available/default /etc/nginx/sites-available/your_site_name # Replace your_site_name
```

Edit the newly created file (/etc/nginx/sites-available/your_site_name) to display the following

```bash
server {
	listen 80;
	listen [::]:80 ;

	root /var/www/*website_file_dir*;

	index index.html index.htm index.nginx-debian.html;
	
	server_name *your_website_address*;

	location / {
		if ($request_uri ~ ^/(.*)\.html) {
			return 302 /$1;
		}
		try_files $uri $uri.html $uri/ =404;
	}
```

The code in the location scope allow html files to be indexed without a .html extension in the websites URL.

Put newley created configuration into enabled sites directory:

```bash
ln -s /etc/nginx/sites-available/your_site_name /etc/nginx/sites-enabled/
```

Make directory that holds website files (index.html etc.):

```bash
mkdir /var/www/your_site_name
cd /var/www/your_site_name
touch index.html # Create and edit mainpage as needed
```

### nginx Commands

```bash
sudo systemctl start nginx # Start server
sudo systemctl status nginx # Server status
sudo systemctl stop nginx # Stop server
sudo systemctl restart nginx # Reboot server
sudo killall nginx # Stop all processes
```

## HTTPS Certificate (certbot)
Gives your website a certificate of security that browsers can recognise and thus wont show that the site is insecure.

### Installation
```bash
sudo apt-get install certbo python-certbot-nginx
```

### Setup
```bash
sudo certbot --nginx
```

Follow the following commands:
1. Enter email
2. Agree to terms of service
3. Don't share email
4. Select https addresses
5. Redirect http to https

Note that certbot certificates expire every six months. To renew:

```bash
sudo certbot renew # Renew certificate
```

## Port Forwarding
You need to setup port forwarding on your router in order for users outside your local network to access your site.

```bash
ip route # Find router address
```

Type the router address into a browser, navigate to port forwarding and add:
1. Protocol: TCP
2. WAN port: 80
3. LAN port: 80
4. Destination IP address: local_ip_address

You may also need to set (port 80 for http and 443 for https):
1. Protocol: TCP
2. WAN port: 443
3. LAN port: 443
4. Destination IP address: local_ip_address

## Other Useful Commands
```bash
hostname -I # Get local IP address
curl icanhazip.com # Get public IPv6 address
curl ipv4.icanhazip.com # Get public IPv4 address
```
