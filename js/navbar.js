new Vue ({
    el:'#navbar',
    data: {
    },
    created: function() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            //console.log(user.email);
        } else {
            window.location.replace("index.html");
        }
    });

    $(document).ready(function() {
        // Get all "navbar-burger" elements
        var $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
        );

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(function($el) {
            $el.addEventListener("click", function() {
            // Get the target from the "data-target" attribute
            var target = $el.dataset.target;
            var $target = document.getElementById(target);

            // Toggle the class on both the "navbar-burger" and the "navbar-menu"
            $el.classList.toggle("is-active");
            $target.classList.toggle("is-active");
            });
        });
        }
    });
    },
    methods: {
    LogOut: function() {
        firebase.auth().signOut().then(function() {
                window.location.replace("index.html");
            },
            function(error) {}
        );
    }
    }
})