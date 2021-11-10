<template>
  <div id="app">
    <header id="topnav" class="defaultscroll sticky bg-white">
      <div class="container">
        <!-- Logo container-->
        <div>
          <router-link class="logo mt-2" to="/"
            ><h3>
              <i class="mdi mdi-sprout text-primary" height="28" alt="" />Garden
              Gatherers
            </h3></router-link
          >
        </div>

        <!--end login button-->
        <!-- End Logo container-->
        <div class="menu-extras">
          <div class="menu-item">
            <!-- Mobile menu toggle-->
            <a class="navbar-toggle" id="isToggle" onclick="toggleMenu()">
              <div class="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
            <!-- End mobile menu toggle-->
          </div>
        </div>

        <div id="navigation">
          <!-- Navigation Menu-->
          <ul class="navigation-menu">
            <li class="has-submenu parent-parent-menu-item">
              <a href="javascript:void(0)">Categories</a
              ><span class="menu-arrow"></span>
              <ul class="submenu megamenu">
                <li>
                  <ul>
                    <li>
                      <router-link to="/categories/1" class="sub-menu-item"
                        >Plants</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/categories/2" class="sub-menu-item"
                        >Bees</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/categories/3" class="sub-menu-item"
                        >Flowers</router-link
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <router-link to="/meetups" class="sub-menu-item"
                >Meetups</router-link
              >
            </li>

            <li v-if="!isLoggedIn()">
              <router-link to="/login" class="sub-menu-item">Login</router-link>
            </li>
            <li v-if="!isLoggedIn()">
              <router-link to="/signup" class="sub-menu-item"
                >Signup</router-link
              >
            </li>
            <li v-if="isLoggedIn()">
              <router-link to="/logout" class="sub-menu-item"
                >Logout</router-link
              >
            </li>
            <div v-if="isLoggedIn()" class="buy-button ms-1">
              <router-link to="/posts/new" class="btn btn-primary"
                >Create a Post</router-link
              >
            </div>
            <div v-if="isLoggedIn()" class="buy-button ms-1">
              <router-link :to="`/users/${getUserId()}`" class="btn btn-primary"
                >My Profile</router-link
              >
            </div>
          </ul>
          <!--end navigation menu-->
        </div>
        <!--end navigation-->
      </div>
      <!--end container-->
    </header>
    <!-- <div id="nav">
      <router-link to="/">Garden Gatherers</router-link> |
      <router-link to="/categories/1">Plants</router-link> |
      <router-link to="/categories/2">Bees</router-link> |
      <router-link to="/categories/3">Flowers</router-link> |
      <router-link to="/meetups">Meetups</router-link>
      <span v-if="!isLoggedIn()">
        | <router-link to="/login">Login</router-link> |
        <router-link to="/signup">Signup</router-link>
      </span>
      <span v-if="isLoggedIn()">
        | <router-link to="/logout">Logout</router-link> |
        <router-link :to="`/users/${getUserId()}`">Me</router-link>
      </span>
    </div> -->
    <router-view :key="$route.fullPath" />

    <footer class="footer bg-footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
            <a class="logo-footer text-light" href="#"
              ><img src="images/logo-light.png" height="28" alt=""
            /></a>
            <p class="mt-4">
              Build responsive, mobile-first projects on the web with the
              world's most popular front-end component library.
            </p>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h4 class="text-light footer-head">Landing</h4>
            <ul class="list-unstyled footer-list mt-4">
              <li>
                <a href="javascript:void(0)" class="text-foot"
                  ><i class="mdi mdi-chevron-right me-1"></i> Agency</a
                >
              </li>
              <li>
                <a href="javascript:void(0)" class="text-foot"
                  ><i class="mdi mdi-chevron-right me-1"></i> Software</a
                >
              </li>
              <li>
                <a href="javascript:void(0)" class="text-foot"
                  ><i class="mdi mdi-chevron-right me-1"></i> Startup</a
                >
              </li>
              <li>
                <a href="javascript:void(0)" class="text-foot"
                  ><i class="mdi mdi-chevron-right me-1"></i> Business</a
                >
              </li>
              <li>
                <a href="javascript:void(0)" class="text-foot"
                  ><i class="mdi mdi-chevron-right me-1"></i> Hosting</a
                >
              </li>
              <li>
                <a href="javascript:void(0)" class="text-foot"
                  ><i class="mdi mdi-chevron-right me-1"></i> Studio</a
                >
              </li>
            </ul>
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h4 class="text-light footer-head">About</h4>
            <ul class="list-unstyled footer-list mt-4">
              <li>
                <a href="javascript:void(0)" class="text-foot"
                  ><i class="mdi mdi-chevron-right me-1"></i> About us</a
                >
              </li>
              <li>
                <a href="javascript:void(0)" class="text-foot"
                  ><i class="mdi mdi-chevron-right me-1"></i> Services</a
                >
              </li>
              <li>
                <a href="javascript:void(0)" class="text-foot"
                  ><i class="mdi mdi-chevron-right me-1"></i> Team</a
                >
              </li>
              <li>
                <a href="javascript:void(0)" class="text-foot"
                  ><i class="mdi mdi-chevron-right me-1"></i> Terms Policy</a
                >
              </li>
              <li>
                <a href="javascript:void(0)" class="text-foot"
                  ><i class="mdi mdi-chevron-right me-1"></i> Privacy Policy</a
                >
              </li>
              <li>
                <a href="javascript:void(0)" class="text-foot"
                  ><i class="mdi mdi-chevron-right me-1"></i> Login</a
                >
              </li>
            </ul>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h4 class="text-light footer-head">Locations</h4>
            <ul class="list-unstyled footer-list mt-4">
              <li>
                <a href="#" class="text-foot"
                  ><i class="mdi mdi-chevron-right me-1"></i> San Francisco</a
                >
              </li>
              <li>
                <a href="#" class="text-foot"
                  ><i class="mdi mdi-chevron-right me-1"></i> Tokio</a
                >
              </li>
              <li>
                <a href="#" class="text-foot"
                  ><i class="mdi mdi-chevron-right me-1"></i> South Korea</a
                >
              </li>
              <li>
                <a href="#" class="text-foot"
                  ><i class="mdi mdi-chevron-right me-1"></i> Myanmar</a
                >
              </li>
            </ul>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </footer>
  </div>
</template>

<style></style>

<script>
export default {
  data: function () {
    return {};
  },
  methods: {
    isLoggedIn: function () {
      return localStorage.jwt;
    },
    getUserId: function () {
      return localStorage.user_id;
    },
  },
};
</script>
