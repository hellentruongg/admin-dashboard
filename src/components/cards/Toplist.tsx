import { toplist } from "../../data/toplist";

const Toplist = () => {
  return (
    <section className="toplist">
      <h2 className="toplist__title">Top Deals</h2>
      <ol className="toplist__list">
        {toplist.map((user) => (
          <li key={user.id} className="toplist__item">
            <article className="toplist__user">
              <div className="toplist__info">
                <img src={user.img} className="toplist__image" />

                <div className="toplist__details">
                  <h3 className="toplist__username">{user.username}</h3>
                  <p className="toplist__email">{user.email}</p>
                </div>
              </div>

              <p className="toplist__amount">{user.amount}</p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Toplist;
