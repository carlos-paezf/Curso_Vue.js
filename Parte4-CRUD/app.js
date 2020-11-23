const app = new Vue({
    el: '#app',
    data: {
        title: "GYM with Vue.js",
        activities: [],
        newActivity: ''
    },
    methods: {
        addActivity: function() {
            this.activities.push({
                name: this.newActivity,
                state: false
            });
            this.newActivity = '';
            this.saveActivity();
        },
        editActivity: function(index) {
            this.activities[index].state = true;
            this.saveActivity();
        },
        deleteActivity: function(index) {
            this.activities.splice(index, 1);
            this.saveActivity();
        },
        saveActivity: function() {
            localStorage.setItem('gym-vue', JSON.stringify(this.activities));
        }
    },
    created: function() {
        let dataDB = JSON.parse(localStorage.getItem('gym-vue'));
        if (dataDB === null) {
            this.activities = [];
        } else {
            this.activities = dataDB;
        }
    }
})