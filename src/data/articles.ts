import { article } from "@/article";

let articles = new Array<article>();

let a = new article();
a.authors = ["Tony Bellomo", "Kevin Sizemore"]
a.date = new Date()
a.headline = "Our first article"
a.body = `Adipisicing nostrud duis exercitation mollit consequat cillum ut officia ad excepteur Lorem eu. Amet aliquip minim sit Lorem. Duis elit voluptate non fugiat. Non labore enim laboris eiusmod pariatur tempor magna minim excepteur cillum consequat sit exercitation. Eiusmod pariatur ipsum culpa deserunt non ad officia ipsum cupidatat qui.

Ex culpa et voluptate dolor et. Exercitation ipsum occaecat est nostrud qui laborum irure quis fugiat fugiat cillum. Velit ipsum magna culpa magna laboris sit consequat ipsum aute ut irure minim. Eiusmod qui nulla duis ad officia amet sint. Id dolore duis fugiat quis deserunt id reprehenderit laborum nostrud elit aliquip. Lorem consequat pariatur est ipsum culpa dolore commodo aliqua anim proident.

Esse cillum cupidatat eu velit velit sint incididunt culpa qui ullamco. Cupidatat ad sint labore magna magna duis dolor irure commodo cillum aliqua consectetur officia. Sit anim adipisicing ipsum esse sint qui veniam sunt exercitation Lorem irure enim. Eu culpa ipsum qui labore.

Ex minim sint est sit ad nostrud nisi amet amet occaecat. Adipisicing eiusmod ullamco laborum ea sint in velit ipsum et nulla dolore est veniam. Duis irure ipsum culpa cillum labore incididunt consectetur exercitation ea consequat ea. Eu incididunt eiusmod ipsum duis et ea eiusmod ullamco dolor tempor enim non commodo.`

a.picture = "http://unsplash.it/550/250?random&gravity=center"

articles.push(a);

let b = {...a}
b.headline = "article 2"
b.picture = "http://unsplash.it/551/250?random&gravity=center"
articles.push(b);

let c = {...a}

c.headline = "article 3"
c.picture = "http://unsplash.it/553/250?random&gravity=center"
articles.push(c);

export default articles