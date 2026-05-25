import { toplist } from "../../data/toplist";

const Toplist = () => {
  return (
    <section>
      <h2>Top Deals</h2>
      <ol>
        {toplist.map((user) => (
          <li key={user.id}>
            <article>
              <div>
                <img src={user.img} />

                <div>
                  <h3>{user.username}</h3>
                  <p>{user.email}</p>
                </div>
              </div>

              <p>{user.amount}</p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Toplist;
