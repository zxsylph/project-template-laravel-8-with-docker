#php ใช้ version 7.1 สามารถเปลี่ยนได้ตามที่เราต้องการแต่ต้องเป็นตัว fpm นะครับ เพื่อที่จะให้กับ nginx
FROM php:7.4-fpm 

RUN apt-get update -y && \
	apt-get upgrade -y && \
	apt-get dist-upgrade -y && \
	apt-get -y autoremove && \
	apt-get clean
#Install required package from laravel
RUN apt-get install -y \
	cron \
	libfreetype6-dev \
	libicu-dev \
	libjpeg62-turbo-dev \
	libmcrypt-dev \
	libpng-dev \
	libxslt1-dev \
	openssh-server \
	openssh-client \
	rsync \
	libonig-dev \
	libzip-dev

RUN docker-php-ext-configure \
	gd --with-freetype --with-jpeg

RUN pecl install mcrypt
#enable php extensions
RUN docker-php-ext-enable \
	mcrypt

#Install php package
RUN docker-php-ext-install \
	bcmath \
	gd \
	intl \
	mbstring \
	pdo_mysql \
	soap \
	xsl \
	zip

#Install composer php package manager
RUN curl -sS https://getcomposer.org/installer | \
	php -- --install-dir=/usr/local/bin --filename=composer
