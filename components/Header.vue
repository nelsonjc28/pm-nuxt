<template lang="pug">
    section.hero.is-success
        .hero.head
            header.nav
                .container
                    .nav-left
                        .nav-item
                         |   Platzi music
                    .nav-right.nav-menu
                        router-link.nav-item(to="search") Buscar
                        router-link.nav-item(to="about") Nosotros
        .hero-body
            .container.has-text-centered
                h1.title
                    font-awesome-icon(icon="play")
                    |  Platzi music

                h2.subtitle Canciones que estan vue-nisimas!


</template>
