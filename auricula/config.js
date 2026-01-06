// Configuration for survey items
// Add as many items as you need here
const surveyConfig = {
    // Defines the rating scale used in the matrix
    scale: [
        { value: 1, label: "很不同意" },
        { value: 2, label: "不同意" },
        { value: 3, label: "一般" },
        { value: 4, label: "同意" },
        { value: 5, label: "很同意" }
    ],
    // Defines the questions/criteria to be rated for each item
    criteria: [
        { id: "quality", label: "生成的音频在清晰度、音色和自然度上好？" },
        { id: "match", label: "音频与图像所呈现场景匹配程度好？" },
        { id: "noise", label: "图像中的杂音和不自然声音是否较少" }
    ],
    // The actual content (stimuli) to display
    items: [
        // Battle
        {
            id: "battle_control",
            title: "Battle (Sample 1)",
            image: "assets/image/battle.png",
            audio: "assets/audio/battle_control.mp3"
        },
        {
            id: "battle_mix",
            title: "Battle (Sample 2)",
            image: "assets/image/battle.png",
            audio: "assets/audio/battle_mix.mp3"
        },
        // Beach
        {
            id: "beach_control",
            title: "Beach (Sample 1)",
            image: "assets/image/beach.png",
            audio: "assets/audio/beach_control.mp3"
        },
        {
            id: "beach_mix",
            title: "Beach (Sample 2)",
            image: "assets/image/beach.png",
            audio: "assets/audio/beach_mix.mp3"
        },
        // Chicken
        {
            id: "chicken_control",
            title: "Chicken (Sample 1)",
            image: "assets/image/chicken.png",
            audio: "assets/audio/chicken_control.mp3"
        },
        {
            id: "chicken_mix",
            title: "Chicken (Sample 2)",
            image: "assets/image/chicken.png",
            audio: "assets/audio/chicken_mix.mp3"
        },
        // Cooking
        {
            id: "cooking_control",
            title: "Cooking (Sample 1)",
            image: "assets/image/cooking.png",
            audio: "assets/audio/cooking_control.mp3"
        },
        {
            id: "cooking_mix",
            title: "Cooking (Sample 2)",
            image: "assets/image/cooking.png",
            audio: "assets/audio/cooking_mix.mp3"
        },
        // Cow
        {
            id: "cow_control",
            title: "Cow (Sample 1)",
            image: "assets/image/cow.png",
            audio: "assets/audio/cow_control.mp3"
        },
        {
            id: "cow_mix",
            title: "Cow (Sample 2)",
            image: "assets/image/cow.png",
            audio: "assets/audio/cow_mix.mp3"
        },
        // Dog
        {
            id: "dog_control",
            title: "Dog (Sample 1)",
            image: "assets/image/dog.jpg",
            audio: "assets/audio/dog_control.mp3"
        },
        {
            id: "dog_mix",
            title: "Dog (Sample 2)",
            image: "assets/image/dog.jpg",
            audio: "assets/audio/dog_mix.mp3"
        },
        // Food
        {
            id: "food_control",
            title: "Food (Sample 1)",
            image: "assets/image/food.png",
            audio: "assets/audio/food_control.mp3"
        },
        {
            id: "food_mix",
            title: "Food (Sample 2)",
            image: "assets/image/food.png",
            audio: "assets/audio/food_mix.mp3"
        },
        // Racing
        {
            id: "racing_control",
            title: "Racing (Sample 1)",
            image: "assets/image/racing.png",
            audio: "assets/audio/racing_control.mp3"
        },
        {
            id: "racing_mix",
            title: "Racing (Sample 2)",
            image: "assets/image/racing.png",
            audio: "assets/audio/racing_mix.mp3"
        },
        // Rocket
        {
            id: "rocket_control",
            title: "Rocket (Sample 1)",
            image: "assets/image/rocket.png",
            audio: "assets/audio/rocket_control.mp3"
        },
        {
            id: "rocket_mix",
            title: "Rocket (Sample 2)",
            image: "assets/image/rocket.png",
            audio: "assets/audio/rocket_mix.mp3"
        },
        // Train
        {
            id: "train_control",
            title: "Train (Sample 1)",
            image: "assets/image/train.png",
            audio: "assets/audio/train_control.mp3"
        },
        {
            id: "train_mix",
            title: "Train (Sample 2)",
            image: "assets/image/train.png",
            audio: "assets/audio/train_mix.mp3"
        }
    ]
};
