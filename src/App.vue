<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>

<template>
  <div id="app" class="container-fluid p-0">
    <div class="row m-0" style="height: 100vh;">
      <div class="col-md-3 p-0">
        <b-sidebar id="sidebar-1" title="Bienvenidos..." shadow visible no-header-close>
          <div class="px-3 py-2">
            <p>Hola, esta es la primer entrega del layout de la Unidad 1 - Desarrollo de layout</p>
            <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
          </div>
        </b-sidebar>
      </div>

      <div class="col-md-9 p-0 ">
        <b-navbar toggleable="lg" type="dark" variant="info" style="margin-left: -21px;">
          <b-navbar-brand href="#">NavBar</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#">Link</b-nav-item>
              <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav>
              <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown right>
                <template #button-content>
                  <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
        <div style="padding: 10px; margin-left: -20px;">
          <b-card title="1er Tarea" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top
            tag="article" style="max-width: 20rem;" class="mb-2">
            <b-card-text>
              Hola, esta es la primer entrega del layout de la Unidad 1 - Desarrollo de layout </b-card-text>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>
