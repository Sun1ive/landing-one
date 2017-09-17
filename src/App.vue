<template>
  <v-app light>
    <header>
      <v-navigation-drawer v-model="isVisible" temporary persistent hide-overlay dark>
      <v-list dense class="pt-0">
        <v-list-tile v-for="item in menuItems" :key="item.title" @click="">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      </v-navigation-drawer>
      <v-toolbar fixed dark class="navbar">
        <v-toolbar-title style="cursor: pointer;" >InDresser</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="isVisible = !isVisible"></v-toolbar-side-icon>
        <v-toolbar-items class="hidden-sm-and-down" v-for="(item,i) in menuItems" :key="i">
          <v-btn flat>{{ item.title }}</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </header>
    <main>
      <section>
        <v-parallax src="/static/slider4.png" height="1000">
          <v-layout></v-layout>
        </v-parallax>
      </section>
      <section class="collections text-xs-center">
        <h1 class="h1-collection">Новая коллекция</h1>
        <v-container fluid grid-list-xl>
          <v-layout row wrap>
            <v-flex xs12 md4 v-for="item in newCollection" :key="item.title">
              <v-card>
                <v-card-media :src="item.url" height="350" data-aos="zoom-in"></v-card-media>
                <v-card-title>
                  <div>
                    <h2 class="collection__title" data-aos="fade out">{{ item.title }}</h2>
                    <div data-aos="fade-right">{{ item.body }}</div>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section id="indresserShop">
        <v-container fluid>
          <v-layout justify-center>
            <v-flex xs12 class="text-xs-center bgc">
              <img src="/static/test2.png" id="indresserImg" alt="logo">
            </v-flex>
          </v-layout>
          <v-layout justify-center class="white py-3">
            <v-btn dark class="shopButton goShop">Магазин</v-btn>
          </v-layout>
        </v-container>
      </section>
      <!-- <section class="sliderFirst">
        <v-carousel hide-controls id="slider">
          <v-carousel-item v-for="item in sliderItems" :key="item.id" :src="item.url">
            <v-btn>Go to Shop</v-btn>
          </v-carousel-item>
        </v-carousel>
      </section> -->
      <!-- <section class="parallaxContainer">
        <v-parallax src="/static/para1.png" height="800" style="width:100%">
          <v-layout column wrap align-center justify-center>
            <v-btn dark class="light-blue darken-1 ml-5">Go to Shop</v-btn>
          </v-layout>
        </v-parallax>
      </section> -->
      <section class="bgOrange">
        <v-container class="py-5 reviews" grid-list-lg >
          <v-layout column wrap align-center>
            <h3 class="happyClients" data-aos="fade-right">Happy clients</h3>
            <div class="border"></div>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12 md6 class="text-xs-center" v-for="user in usersReview" :key="user.id">
              <v-card data-aos="fade-down">
                <v-card-media :src="user.url" height="200"></v-card-media>
                <v-card-title class="userName">
                  <div>
                    <h3 class="headline mb-0" data-aos="fade-left">{{ user.name }}</h3>
                    <p data-aos="fade-right">
                      <q>{{ user.body }}</q>
                    </p>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section class="secondPara">
        <v-parallax src="/static/para.png" height="500">
          <v-layout column wrap align-center justify-center>
            <h3 data-aos="fade-down">Check out our new collection</h3>
            <h5 data-aos="fade-left">Special Offer!</h5>
            <v-btn data-aos="fade-right" dark class="shopButton darken-1">Go to collection</v-btn>
          </v-layout>
        </v-parallax>
      </section>
      <section class="infoSection">
        <v-layout column wrap align-center class="py-5">
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="must">Must be InDresser!</h2>
              <span class="subheading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, eligendi!</span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap>
                <v-flex xs12 md4>
                  <v-card class="transparent elevation-0">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="red-icon text--lighten-2">call</v-icon>
                    </v-card-text>
                    <v-card-title class="layout justify-center">
                      <div class="headline text-xs-center">Call us today!</div>
                    </v-card-title>
                    <v-card-text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur repudiandae asperiores esse inventore libero beatae nobis, enim aut excepturi laudantium, voluptate atque! Error hic necessitatibus, earum voluptatibus amet sequi placeat, consequatur odit quidem voluptas eveniet excepturi magni nemo natus tenetur sapiente illo! Voluptate quis placeat officiis rerum, distinctio earum.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="transparent elevation-0">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="red-icon text--lighten-2">money_off</v-icon>
                    </v-card-text>
                    <v-card-title class="layout justify-center">
                      <div class="headline text-xs-center">Big discounts!</div>
                    </v-card-title>
                    <v-card-text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur repudiandae asperiores esse inventore libero beatae nobis, enim aut excepturi laudantium, voluptate atque! Error hic necessitatibus, earum voluptatibus amet sequi placeat, consequatur odit quidem voluptas eveniet excepturi magni nemo natus tenetur sapiente illo! Voluptate quis placeat officiis rerum, distinctio earum.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="transparent elevation-0">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="red-icon text--lighten-2">star</v-icon>
                    </v-card-text>
                    <v-card-title class="layout justify-center">
                      <div class="headline text-xs-center">Awesome design</div>
                    </v-card-title>
                    <v-card-text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur repudiandae asperiores esse inventore libero beatae nobis, enim aut excepturi laudantium, voluptate atque! Error hic necessitatibus, earum voluptatibus amet sequi placeat, consequatur odit quidem voluptas eveniet excepturi magni nemo natus tenetur sapiente illo! Voluptate quis placeat officiis rerum, distinctio earum.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>
      <app-time></app-time>
      <section id="map">
        <v-container fluid>
          <v-layout column wrap align-center>
            <v-btn dark class="red" @click="mapVisible = !mapVisible">Toggle map</v-btn>
            <iframe v-show="mapVisible" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d632.7755945804024!2d28.469406662551258!3d49.23338283828524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1505465723045" width="1920" height="470" frameborder="0" allowfullscreen></iframe>
          </v-layout>
        </v-container>
      </section>
      <section class="form">
        <v-parallax src="/static/bg1.png" height="700">
          <v-layout justify-center>
            <h2 class="contact">Contact us</h2>
          </v-layout>
          <v-layout row wrap align-center justify-center>
            <v-flex class="py-4" xs12 sm4>
            <v-form class="userForm" @submit.prevent="submitForm" data-aos="flip-right">
              <v-text-field label="Name" v-model="user.name" required></v-text-field>
              <v-text-field label="Phone" v-model="user.phone" required></v-text-field>
              <v-text-field label="E-mail" v-model="user.email" required></v-text-field>
              <v-text-field label="Your Message" v-model="user.message" multi-line></v-text-field>
              <v-btn success type="submit" class="ml-0">Submit the form</v-btn>
            </v-form>
            </v-flex>
          </v-layout>
        </v-parallax>
      </section>
    </main>
    <v-footer class="grey darken-4">
      <v-spacer></v-spacer>
      <div class="mr-3 white--text">&copy; Sunlive 2017</div>
    </v-footer>
    <div class="scrollTop"></div>
  </v-app>
</template>

<script>
import AOS from 'aos';
import $ from 'jquery';
import 'aos/dist/aos.css';
import TimeTo from './components/TimeTo';

export default {
  components: {
    'app-time': TimeTo,
  },
  data() {
    return {
      user: {
        name: '',
        phone: '',
        email: '',
        message: '',
      },
      newCollection: [
        { title: 'Some title', url: '/static/boxitem1.png', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non possimus voluptatum quis similique magnam! Ea omnis rerum blanditiis nam dolore?' },
        { title: 'Some title', url: '/static/boxitem1.png', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non possimus voluptatum quis similique magnam! Ea omnis rerum blanditiis nam dolore?' },
        { title: 'Some title', url: '/static/boxitem2.png', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non possimus voluptatum quis similique magnam! Ea omnis rerum blanditiis nam dolore?' },
        { title: 'Some title', url: '/static/boxitem3.png', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non possimus voluptatum quis similique magnam! Ea omnis rerum blanditiis nam dolore?' },
        { title: 'Some title', url: '/static/boxitem4.jpg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non possimus voluptatum quis similique magnam! Ea omnis rerum blanditiis nam dolore?' },
        { title: 'Some title', url: '/static/boxitem5.jpg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non possimus voluptatum quis similique magnam! Ea omnis rerum blanditiis nam dolore?' },
        { title: 'Some title', url: '/static/boxitem5.jpg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non possimus voluptatum quis similique magnam! Ea omnis rerum blanditiis nam dolore?' },
        { title: 'Some title', url: '/static/boxitem5.jpg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non possimus voluptatum quis similique magnam! Ea omnis rerum blanditiis nam dolore?' },
        { title: 'Some title', url: '/static/boxitem6.jpg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non possimus voluptatum quis similique magnam! Ea omnis rerum blanditiis nam dolore?' },
      ],
      sliderItems: [
        { url: '/static/slider1.jpg', id: '123' },
        { url: '/static/slider2.png', id: '1223' },
        { url: '/static/slider1.jpg', id: '12423' },
        { url: '/static/slider2.png', id: '1233' },
        { url: '/static/slider1.jpg', id: '12653' },
        { url: '/static/slider2.png', id: '1223' },
      ],
      menuItems: [
        { title: 'Home', icon: 'home', link: 'https://indresser.com' },
        { title: 'About us', icon: 'assignment_ind', link: 'https://indresser.com' },
        { title: 'New collection', icon: 'grade', link: 'https://indresser.com' },
        { title: 'Shop', icon: 'shopping_cart', link: 'https://indresser.com' },
        { title: 'Contacts', icon: 'import_contacts', link: 'https://indresser.com' },
      ],
      isVisible: false,
      usersReview: [
        { url: '/static/123.png', name: 'UserName', body: 'there will be some review text but idk what to write here yet', id: '419' },
        { url: '/static/123.png', name: 'AnotherName', body: 'there will be some review text but idk what to write here yet', id: '192' },
        { url: '/static/123.png', name: 'ThirdName', body: 'there will be some review text but idk what to write here yet', id: '119' },
        { url: '/static/123.png', name: 'Fourth', body: 'there will be some review text but idk what to write here yet', id: '112' },
      ],
      mapVisible: false,
    };
  },
  methods: {
    goToShop() {
      window.location.href = 'https://indresser.com/shop';
    },
    submitForm() {
      // some function
    },
    scrollTop() {
    },
  },
  mounted() {
    AOS.init({
      offset: 200,
      easing: 'ease-in-out',
      duration: 1000,
    });

    $('.toolbar__title, .scrollTop').click(() => {
      $('html,body').animate({ scrollTop: 0 }, 10);
    });
    function checkPos() {
      let pos = $(window).scrollTop();
      if (pos > '500') {
        $('.scrollTop').addClass('showButton');
      } else {
        $('.scrollTop').removeClass('showButton');
      }
    }
    $(document).scroll(() => {
      checkPos();
    });
  },
};
</script>

<style>
#map {
  max-height: 470px;
  overflow: hidden;
  background-color: #FFC056;
}
#indresserImg {
  max-width: 1920px;
  width: 100%;
  height: 100%;
}
.contact {
  text-transform: uppercase;
  margin-top: 45px;
  color: #333;
  text-shadow: 1px 1px 1px #c0c0c0;
}
.red-icon {
  color: red !important;
}
.must {
  text-transform: uppercase;
  font-size: 3.7rem;
  font-style: italic;
  font-weight: bold;
}
.shopButton {
  background-color: #FF2126 !important;
  border-radius: 8px;
  box-shadow: 1px 1px 1px #333;
  font-size: 1.2rem;
}
.bgc {
  position: relative;
  background-color: #fff;
  /* background-size: cover; */
}
.goShop {
  /* something */
}
.carousel__item {
  transition: 1s;
}
.scrollTop {
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 50px;
  right: 30px;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid #c0c0c0;
  display: none;
  transition: .3s;
}
.showButton {
  display: block !important;
}
.scrollTop:hover {
  background-color: #c0c0c0;
}
.scrollTop:after {
  content: '\2B06';
  position: relative;
  font-size: 25px;
  top: 1px;
  left: 12px;
}
#info {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #333;
}
.info-h5 {
  color: #333;
}
.information {
  font-size: 20px;
  color: #333;
}
.userForm {
  padding: 25px;
  border: 1px solid #f2e3d2;
  background-color: #fff;
  box-shadow: rgba(000,000,000,0.9) 0 1px 2px, inset rgba(255,255,255,0.4) 0 0px 0;
  font-family: 'Helvetica Neue',Helvetica,sans-serif;
}
.happyClients {
  text-transform: uppercase;
  color: #f9f9f9;
  text-shadow: 1px 1px 5px #333;
}
.border {
  width: 100px;
  height: 2px;
  background-color: red;
  margin-bottom: 20px;
  transition: .4s ease-out;
}
.happyClients:hover border {
  width: 200px;
  transition: .4s ease-out;
}
.card {
  transition: .3s ease-in-out;
  overflow: hidden;
  cursor: pointer;
}
.card:hover {
  transition: .3s;
  /* transform: scale(1.1); */
  z-index: 6;
}
.container {
  padding: 0;
}
.infoTitle {
  color: #333;
}
.infoSection {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(246, 246, 246, 1) 47%, rgba(237, 237, 237, 1) 100%);
  border-top: 1px solid rgba(000,000,000,0.1);
}
.userAvatar {
  width: 100%;
  max-width: 100px;
  border-radius: 50%;
  max-height: 100px;
  transition: 0.3s ease-in-out;
}
.userAvatar:hover {
  transform: scale(1.1);
}
.reviews {
  max-width: 1280px;
  margin: 0 auto;
}
.reviewBody {
  font-style: italic;
  font-size: 20px;
}
.userName {
  justify-content: center;
}
.bgOrange {
  background-color: #FFC056;
}
.navbar {
  z-index: 99;
  background: linear-gradient(to bottom, rgba(255,48,25,1) 0%,rgba(207,4,4,1) 100%);
}
#slider {
  min-height: 700px;
  transition: .8s;
}
.navigation-drawer--temporary {
  z-index: 123 !important;
}
.collection__title {
  text-align: center;
  font-size: 34px;
}
.collections {
  background-color: #272623;
}
.h1-collection {
  text-transform: uppercase;
  font-size: 5rem;
  color: #fff;
  font-weight: 100;
  letter-spacing: 2px;
  margin-bottom: 0;
  padding-top: 24px;
  /* font-family: PT Sans; */
}
</style>
