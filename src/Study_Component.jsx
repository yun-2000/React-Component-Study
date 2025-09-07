import { people } from "./data.jsx";
import { getImageUrl } from "./utils.jsx";

export default function Component() {
  return (
    <div className="font-mono">
      {/* <Profile /> */}
      <Gallery data={data} />
    </div>
  );
}
function Profile() {
  const display = people.map((person) => {
    return (
      <li key={person.id} className="grid grid-cols-2">
        <img
          src={getImageUrl(person)}
          alt={person.name + "'s image"}
          className="rounded-full"
        />
        <p className="flex flex-col">
          <b>{person.name}:</b>
          {person.accomplishment} for {person.profession}
        </p>
      </li>
    );
  });
  return (
    <article className="mx-10 mt-10">
      <h1 className="text-3xl">Scientists</h1>
      <ul>{display}</ul>
    </article>
  );
}

const data = [{ name: "Maria Skłodowska-Curie" }, {}];

function Gallery({ data }) {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>{data.name}</h2>
        <img
          className="avatar"
          src={getImageUrl("szV5sdG")}
          alt={data.name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b>
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,
            Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (chemical element)
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src={getImageUrl("YfeOqp2")}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b>
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}
