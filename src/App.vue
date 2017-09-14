<template>
  <v-app light>
    <header>
      <v-navigation-drawer v-model="isVisible" temporary persistent hide-overlay light>
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
      <v-toolbar fixed class="navbar">
        <v-toolbar-title style="cursor: pointer;" @click="alert">InDresser</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="isVisible = !isVisible"></v-toolbar-side-icon>
        <v-toolbar-items class="hidden-sm-and-down" v-for="(item,i) in menuItems" :key="i">
          <v-btn flat>{{ item.title }}</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </header>
    <main>
      <section class="parallaxContainer">
        <v-parallax src="/static/para1.png" height="800" style="width:100%">
          <v-layout column wrap align-center justify-center>
            <h3 class="infoTitle ml-5">Online shop</h3>
            <v-btn dark class="light-blue darken-1 ml-5">Go to Shop</v-btn>
          </v-layout>
        </v-parallax>
      </section>
      <section class="infoSection">
        <v-layout column wrap align-center class="py-5">
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">The best way to buy clothes</h2>
              <span class="subheading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, eligendi!</span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap>
                <v-flex xs12 md4>
                  <v-card class="transparent elevation-0">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">call</v-icon>
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
                      <v-icon x-large class="blue--text text--lighten-2">money_off</v-icon>
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
                      <v-icon x-large class="blue--text text--lighten-2">star</v-icon>
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
      <section class="secondPara">
        <v-parallax src="/static/para.png" height="500">
          <v-layout column wrap align-center justify-center>
            <h3>Check out our new collection</h3>
            <h5>Special Offer!</h5>
            <v-btn dark class="light-blue darken-1">Go to collection</v-btn>
          </v-layout>
        </v-parallax>
      </section>
      <section class="bgOrange">
        <v-container class="py-5 reviews" grid-list-lg >
          <v-layout column wrap align-center>
            <h3 class="happyClients">Happy clients</h3>
            <div class="border"></div>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12 md6 class="text-xs-center" v-for="user in usersReview" :key="user.id">
              <v-card>
                <v-card-media :src="user.url" height="200"></v-card-media>
                <v-card-title class="userName">
                  <div>
                    <h3 class="headline mb-0">{{ user.name }}</h3>
                    <p>
                      <q>{{ user.body }}</q>
                    </p>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section class="form">
        <v-parallax src="/static/bg.png" height="500">
          <v-layout row wrap align-center justify-center>
            <v-flex xs12 sm4 offset-sm1>
            <v-form class="userForm" @submit.prevent="submitForm">
              <v-text-field label="Name" v-model="user.name" required></v-text-field>
              <v-text-field label="Phone" v-model="user.phone" required></v-text-field>
              <v-text-field label="E-mail" v-model="user.email" required></v-text-field>
              <v-text-field label="Your Message" v-model="user.message" multi-line></v-text-field>
              <v-btn success type="submit" class="ml-0">Submit the form</v-btn>
            </v-form>
            </v-flex>
            <v-flex id="info" xs12 sm4 offset-sm1>
              <h5 class="info-h5">Information</h5>
              <v-icon>star</v-icon><span class="information ml-3">InDresser</span><br>
              <v-icon>mail</v-icon><span class="information ml-3">Physical address</span><br>
              <v-icon>format_color_fill</v-icon><span class="information ml-3">Email</span><br>
              <v-icon>network_wifi</v-icon><span class="information ml-3">Website</span><br>
              <v-icon>phone</v-icon><span class="information ml-3">Phone</span><br>
            </v-flex>
          </v-layout>
        </v-parallax>
      </section>
    </main>
  </v-app>
</template>

<script>

export default {
  data() {
    return {
      user: {
        name: '',
        phone: '',
        email: '',
        message: '',
      },
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
    };
  },
  methods: {
    alert() {
      // some function
    },
    submitForm() {
      // some function
    },
  },
};
</script>

<style>
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
  border-radius: 10px;
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
  transform: scale(1.1);
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
}
</style>
