exports.install = function (framework) {
    framework.route('/', view_homepage);
    framework.route('/course/{link}', view_detail);
};

// Blog list
function view_homepage() {
    var self = this;
    console.log(framework.module('blog').myFunction('Peter'));
    self.view('homepage', {portName: self.config['default-port'], content: "<h1>hello</h1>"});
}

// Blog detail
function view_detail(link) {
    var self = this;
    console.log("link==" + link);
    var blog="";
    self.global.db.menus.find(function (menu) {

        var b = menu.subMenu.find(function (sub) {

            if (sub.link == link) {
                console.log("match=>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>" + sub.title)
                return sub;
            }
        });
      return blog=b;

    });
    console.log(blog);
    if (blog === null) {
        self.view404();
        return;
    }

    self.view('detail', blog);
}