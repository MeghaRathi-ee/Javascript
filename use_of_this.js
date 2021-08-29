let post = new post('a','b','c');

console.log(post);

function Post(title, body, author){
    this.title=title;
    this.body=body;
    this.author=author;
    this.views=0;
    this.comments=0;
    this.isLive=false;
}