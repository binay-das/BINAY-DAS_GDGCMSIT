import books from "/utility-photos/Books.jpg";

export default function TravelBooks () {
    return (
        <div className="events-section flex flex-col justify-center items-center m-auto py-10">
            <h1 className="events-section-h">Travel Books</h1>
            <p className="events-section-p text-3xl mb-16">Your Travel Time Companion</p>


            <img src={books} alt="" className="mb-16"/>

            <button className="events-btn">View Now</button>
        </div>
    );
}