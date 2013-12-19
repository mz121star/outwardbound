var db = [];

db.push({ title: 'How to create a website?', link: 'how-to-create-a-website', date: new Date().add('m', -5), body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' });
db.push({ title: 'Search engine optimization', link: 'search-engine-optimalization', date: new Date().add('m', -4), body: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' });
db.push({ title: 'JavaScript Best Practices', link: 'javascript-best-practices', date: new Date().add('m', -3), body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' });
db.push({ title: 'Sass vs. LESS', link: 'sass-vs-less', date: new Date().add('m', -2), body: 'This book is a treatise on the theory of ethics, very popular during the Renaissance.' });
db.push({ title: 'Mobile and tablet development', link: 'mobile-and-tablet-development', date: new Date().add('m', -1), body: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.' });
db.push({ title: 'Web application framework for node.js', link: 'web-application-framework-for-node-js', date: new Date(), body: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.' });

var menus = [];
menus.push({
    title: "企业拓展",
    subMenu: [
        { title: "管理咨询", link: "management-consulting",img:"7-12010G03621334.jpg" } ,
        {title: "职业培训", link: "vocational-training",img:"31.jpg"},
        { title: "户外拓展", link: "outdoor-development",img:"567153_12946579291.jpg"}  ,
        { title: "军营集训", link: "barracks-life",img:"xin_2609051615579021811660.jpg"},
        { title: "野外生存", link: "wild-live",img:"m_14_634837685012968750_17584762.jpg"},
        {  title: "徒步穿越", link: "hiking",img:"2012031366326993.jpg"},
        { title: "CS野战", link: "cs-fighting",img:"20110820203636_39360.jpg"},
        { title: "趣味运动会", link: "fun-games",img:"080304091458943.bmp"},
        {  title: "企业年会", link: "enterprise-annual-meeting",img:"201016221071557.jpg"  }
    ]
});
menus.push({
    title: "青少年拓展",
    subMenu: [
        {title: "夏冬令营", link: "summer-and-winter-camp"},
        {title: "素质培训", link: "quality-training"},
        {title: "十八岁成人礼", link: "eighteen-adult-ceremony"},
        {title: "户外拓展", link: "outdoor-development"},
        {title: "军营集训", link: "barracks-life"},
        {title: "徒步穿越", link: "hiking"},
        {title: "CS野战", link: "cs-fighting"},
        {title: "趣味运动会", link: "fun-games"},
        {title: "校园活动", link: "campus-activities"}
    ]
});
menus.push({
    title: "家庭拓展",
    subMenu: [

        {title: "户外拓展", link: "outdoor-development"},
        {title: "军营集训", link: "barracks-life"},
        {title: "徒步穿越", link: "hiking"},
        {title: "CS野战", link: "cs-fighting"},
        {title: "亲子趣味竞技", link: "parent-child-interest-competitive"},
        {title: "户外垂钓", link: "outdoor-fishing"  }
    ]
});
menus.push({
    title: "VIP订制",
    subMenu: [
        {
            title: "VIP订制", link: "vip-custom"
        }
    ]
});
menus.push({
    title: "金牌团队",
    subMenu: [
        {
            title: "VIP订制", link: "vip-custom"
        }
    ]
});
//framework.global.db = db;
framework.global.db = {
    menus: menus
};