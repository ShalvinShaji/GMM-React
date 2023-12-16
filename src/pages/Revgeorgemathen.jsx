import React from "react";
import Bcrumbs from "../components/Bcrumbs";
import Sectionhead from "../components/Sectionhead";
import "../css/Revgeorgemathen.css";

export default function Revgeorgemathen() {
  function GeorgeMathanData() {
    var GeorgeMathanImg =
      "https://heeranew.netlify.app/assets/img/george-mathen/GeorgeMathan.jpg";

    var first_para =
      "The George Mathen Mission Hospital was founded by the Holy Immanuel CSI Church, Mallappally in 1971 to build on the inspirational life of Rev. George Mathen.";

    var second_para =
      "Mallappally’s emergence into modernity has a lot to do with the life leadership of Rev. George Mathen. He served Mallappally parish for 16 continuous years from 1847 to 1863. Rev. Mathen was the first native priest of the Anglican Church, in this area of Kerala. His involvement in and around Mallappally earned him the name ‘MallappallilAchen’. His entry to Church and Education marks the bottom to top revolutionary transformation unleashed at this point of history; by initiating modern education for the people of slave cast. Vibrations generated this period triggered multi-faceted reformation movement across a large geographical area. Great leaders of Kerala Renaissance; Sreenarayana Guru, ChattabiSwamikal and Ayyankali were at their childhood at this time.";

    var third_para =
      "Rev. George Mathen was well known and accepted by the people and the then rulers of Travancore as a linguist, educationist, liberator, reformer of great intellectual capacity.";

    var fourth_para = `Linguist: A scholarly grasp of Malayalam enabled Rev. George Mathen
                      to make a signal contribution to his mother tongue, Malayalam, with
                      the earliest definitive text on Malayalam grammar, ‘Malayazhmayude
                      Vyakaranam’ (മലയാഴ്മയുടെ വ്യാകരണം-1863) . It codified grammar rules
                      for the first time in Malayalam.For this, he was honored as the
                      ‘Father of Malayalam prose’ Rev. Mathen as the Editor of India’s
                      first College Magazine: VidyaSamgraham ; modelled it as academic
                      publication in tune with the journals then in circulation in Oxford
                      and Cambridge. This magazine carried reports on expanding knowledge
                      streams of the world of that time. Also it covered the struggles and
                      aspirations of the people of this land.He regularly contributed
                      essays for the first Malayalam periodical Jhananikshepam on topics
                      as diverse as astronomy, education and advaitha. One of the essays
                      that appeared in 'Jhananikshepam' discusses if the earth was indeed
                      round, thereby introducing science writing in Malayalam. He was also
                      a prolific essayist. His forays into non-fiction include
                      Satyavadakhedam and Vedasamyukthi . A highly reputed historian of
                      Malayalam literature Ulloor S. ParameswaraIyer stated "All in all,
                      George Mathan built a permanent framework for Malayalam literature
                      and thus made all Malayalis (people of Kerala) indebted to him, this
                      fact is beyond dispute."`;

    var fifth_para = `Educationist: Rev. George Mathen was invited to present his treatise
                      on education and its pedagogy at the instances of Sri. Madhava Rao,
                      the then Divan of the state of Travancore. This presentation is
                      supposed to be the first of its kind in Travancore.Later the talk
                      was published as a book entitled Balaabhyasam . In addition to
                      emphasizing the importance of learning in mother tongue, Rev. Mathen
                      defines the fundamentals of general education in Kerala context. He
                      convinces through his thesis 1: Learning occurs through 5 senses, 2:
                      Knowledge is power and 3: Importance of character formation.In this
                      work, he argues for Malayalam to be adopted as the medium of
                      instruction and language of administration besides cautioning
                      educators of corporeal punishment. Further he discussed the
                      techniques and best practices to be adopted to attain the
                      predetermined cognitive levels which are at par with today’s
                      approaches. He was avisionary educationist and a shining advocate of
                      universal education.`;

    var sixth_para = `Liberator:The abolition of slavery was declared in 1835, by Rani
                      LashmiBai, Queen of Travancore. He was one of the earliest advocates
                      of civil rights for the enslaved community in Kerala who lived in
                      subhuman conditions under caste slavery. It is a well known fact
                      that Rev. George Mathen was the pioneering champion carrying out the
                      liberation of slaves by ensuring basic education and their entry to
                      main stream. He started ‘Slave Schools’ for the untouchables in
                      Mallappally and many places around. His sympathies lay with the poor
                      and oppressed. Mathen was instrumental in converting KaipettaHabel
                      and his family to Christianity in 1854 - the first lower-caste
                      family to convert to Christianity. The conversion of Habel's family
                      into Anglican Christianity at Mallappally was historic and
                      encouraged the conversion of a large number of lower-caste people,
                      denied of a life of dignity under caste slavery and un-touchability,
                      into Christianity.`;

    var seventh_para = ` Reformer: Rev. Mathen spoke vehemently against the caste practices
                        in Kerala. His article titled ‘KozhuMuthalazhma’ prescribes the
                        healthy practices to be followed to keep the employer-employee
                        relation at a humane level. The book authored by Rev. Mathen
                        MarumakkathayathalullaDoshangal is a criticism of the matrilineal
                        social structure prevalent among one of the prominent communities in
                        Kerala, was instrumental for initiating their reformation there
                        also.`;

    var eighth_para = `In his later years, George Mathen actively raised funds to establish
                      the Cambridge Nicholson Institute (CNI) in Kottayam. He also oversaw
                      the construction of the institute and served as its Principal. CNI
                      was instrumental in spreading English-medium education in Kerala and
                      is today known as the CNI Teacher’s Training Institute.`;

    var nineth_para = `In short, the deeply spiritual efforts of Rev. George Mathen freed
                      people from slavery. In addition; he worked for liberating language,
                      literature, education, culture and awakened different layers of
                      people to march towards modernity and progress.`;

    var tenth_para = ` The Rev. George Mathen Mission Hospital, Mallappally is a tribute to
                        the stellar contributions of a great man who meant a great deal not
                        only to modern Kerala and Malayalam language but also to Mallappally
                        and its people.`;

    return (
      <div className="row">
        <div className="col-lg-4 profile-img mb-md-0 mb-3 d-md-block">
          <img
            src={GeorgeMathanImg}
            alt="Revgeorgemathen"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-lg-8 GeorgeMathan-history">
          <p>{first_para}</p>
          <p>{second_para}</p>
          <p>{third_para}</p>
          <p>{fourth_para}</p>
          <p>{fifth_para}</p>
          <p>{sixth_para}</p>
          <p>{seventh_para}</p>
          <p>{eighth_para}</p>
          <p>{nineth_para}</p>
          <p>{tenth_para}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Bcrumbs breadcrumbspage="Rev. George Mathen" />
      <section className="Revgeorgemathen" id="Revgeorgemathen">
        <Sectionhead
          sectionname="Rev. George Mathen"
          sectiondescription="Rev. George "
          sectiondescriptionbold="Mathen"
        />
        <div className="container">{GeorgeMathanData()}</div>
      </section>
    </>
  );
}
