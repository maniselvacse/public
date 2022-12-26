const defaultCounterProperties = [
    {
        name: "Projects Done",
        count: 0,
        icon: "fa fa-lightbulb-o"

    },
    {
        name: "Satisfied Clients",
        count: 0,
        icon: "fa fa-heart"

    },
    {
        name: "Awards",
        count: 0,
        icon: "fa fa-magic"

    },

    {
        name: "Happy Clients",
        count: 0,
        icon: "fa fa-smile-o"

    }
];

const counterProperties = defaultCounterProperties.map(function(profile, index) {
    const val = [645, 563, 1145, 1045];
    return {
        name: profile.name,
        count: val[index],
        icon: profile.icon
    }
})

export {defaultCounterProperties, counterProperties};