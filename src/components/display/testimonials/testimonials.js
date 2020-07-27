import React from "react"
import moment from "moment"
import "./testimonials.scss"

const getDate = date => moment(date, "YYYY-MM-DD").format("DD/MM/YYYY")

const Testimonials = props => {
  return (
    <section className="section-testimonials">
      <h2 className="title">Veja o que os usuários falam da gente</h2>
      <div className="testimonials">
        {props.testimonials
          .slice(0)
          .slice(-3)
          .map(item => (
            <div key={item.id} className="testimonial">
              <div className="stars">
                <span className="star">
                  <i className="fas fa-star"></i>
                </span>
                <span className="star">
                  <i className="fas fa-star"></i>
                </span>
                <span className="star">
                  <i className="fas fa-star"></i>
                </span>
                <span className="star">
                  <i className="fas fa-star"></i>
                </span>
                <span className="star">
                  <i className="fas fa-star"></i>
                </span>
              </div>
              <p className="text">{item.content}</p>
              <h5 className="name">{item.name}</h5>
              <h5 className="institution">{item.role}</h5>
              <h5 className="date">{getDate(item.date)}</h5>
            </div>
          ))}
      </div>
    </section>
  )
}

export default Testimonials
