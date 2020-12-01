<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-container>
        
    <b-navbar-brand href="#">
      <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="Kitten">
      Bootstrap 4 + Vue.js
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{name: 'Home'}" exact>Home</b-nav-item>
        <b-nav-item :to="{name: 'About'}">About</b-nav-item>
        <b-nav-item :to="{name: 'Grid'}">Grid</b-nav-item>
        <b-nav-item :to="{name: 'Cards'}">Cards</b-nav-item>
        <b-nav-item :to="{name: 'Form'}">Form</b-nav-item>
        <b-nav-item :to="{name: 'Form2'}">Form 2</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
    </b-container>
  </b-navbar>

  <b-container>
    <router-view/>
  </b-container>

  </div>
</template>
