import images from "./images";

const posts = [
    {
        title: "Making a design system from scratch",
        date: new Date(2020, 0, 20),
        link: "Making-a-design-system-from-scratch",
        tags: ["Design", "Pattern"],
        previewText: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
        mollit. Exercitation veniam consequat sunt nostrud amet.`,
        post: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
        mollit. Exercitation veniam consequat sunt nostrud amet.`,
    },
    {
        title: "UI-Interactions-of-the-week",
        date: new Date(2020, 1, 13),
        link: "UI-Interactions-of-the-week",
        tags: ["Express", "Handlebars"],
        previewText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestias temporibus commodi quia
        quaerat totam modi impedit! Quae sint dignissimos laborum perferendis, iure illum accusantium amet dolores
        debitis earum suscipit laudantium error, magnam, neque qui aspernatur eius minus adipisci. Aspernatur!`,
        post: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestias temporibus commodi quia
        quaerat totam modi impedit! Quae sint dignissimos laborum perferendis, iure illum accusantium amet dolores
        debitis earum suscipit laudantium error, magnam, neque qui aspernatur eius minus adipisci. Aspernatur!`,
    },
    {
        title: "Creating pixel perfect icons in Figma",
        date: new Date(2020, 2, 1),
        link: "Creating-pixel-perfect-icons-in-Figma",
        tags: ["Pattern", "Design"],
        previewText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestias temporibus commodi quia
        quaerat totam modi impedit! Quae sint dignissimos laborum perferendis, iure illum accusantium amet dolores
        debitis earum suscipit laudantium error, magnam, neque qui aspernatur eius minus adipisci. Aspernatur!`,
        post: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestias temporibus commodi quia
        quaerat totam modi impedit! Quae sint dignissimos laborum perferendis, iure illum accusantium amet dolores
        debitis earum suscipit laudantium error, magnam, neque qui aspernatur eius minus adipisci. Aspernatur!`,
    },
];

const { homeImages, articleImages } = images;
const works = [
    {
        title: "Designing Dashboards",
        date: new Date(2021, 1, 13),
        link: "Designing-Dashboards",
        type: ["Dashboard", "User Experience Design"],
        img: homeImages.works01,
        previewText: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
        duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
        post: `<p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
            enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <img src=${articleImages.article01} alt="1" />
            <h1 className="article__subtitle">Heading 1</h1>
            <h2 className="article__subtitle article__subtitle_sm">Heading 2</h2>
            <p className="article__text text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <img src=${articleImages.article02} alt="2" />
            <img src=${articleImages.article03} alt="3" />`,
    },
    {
        title: "Vibrant Portraits of 2020",
        date: new Date(2021, 1, 13),
        link: "Vibrant-Portraits-of-2020",
        type: ["Illustration"],
        img: homeImages.works02,
        previewText: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
        duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
        post: `<p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
        enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <img src=${articleImages.article01} alt="1" />
        <h1 className="article__subtitle">Heading 1</h1>
        <h2 className="article__subtitle article__subtitle_sm">Heading 2</h2>
        <p className="article__text text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
            enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <img src=${articleImages.article02} alt="2" />
        <img src=${articleImages.article03} alt="3" />`,
    },
    {
        title: "36 Days of Malayalam type",
        date: new Date(2020, 11, 15),
        link: "36-Days-of-Malayalam-type",
        type: ["Typography"],
        img: homeImages.works03,
        previewText: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
        duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
        post: `<p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
        enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <img src=${articleImages.article01} alt="1" />
        <h1 className="article__subtitle">Heading 1</h1>
        <h2 className="article__subtitle article__subtitle_sm">Heading 2</h2>
        <p className="article__text text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
            enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <img src=${articleImages.article02} alt="2" />
        <img src=${articleImages.article03} alt="3" />`,
    },
];

export default { posts, works };
