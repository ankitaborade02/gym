import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
  <p>
    Discover our specially curated bootcamps designed to help you achieve your fitness goals, whether you're a beginner or a seasoned athlete!
  </p>
        <img src="/images/gym1.avif" alt="workout" />
      </div>
      <div className="wrapper">
      <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Discover our specially curated bootcamps designed to help you achieve your fitness goals, whether you're a beginner or a seasoned athlete!
        </p>
        <div className="bootcamps">
          <div>
            <h4>Strength & Conditioning Bootcamp.</h4>
            <p>
            Build muscle and enhance strength with our expert-guided strength training sessions.
            </p>
          </div>
          <div>
            <h4>Yoga & Mindfulness Retreat.</h4>
            <p>
            Improve flexibility and reduce stress through calming yoga flows and mindfulness practices.
            </p>
          </div>
          <div>
            <h4>Functional Fitness Bootcamp.</h4>
            <p>
            Train for everyday strength with movements that mimic real-life activities and improve overall balance.
            </p>
          </div>
          <div>
            <h4>Core & Flexibility Bootcamp.</h4>
            <p>
            Strengthen your core and improve your mobility with exercises designed to enhance posture and flexibility.
            </p>
          </div>
          <div>
            <h4>Boxing & Cardio Blast Bootcamp.</h4>
            <p>
            Learn boxing techniques while burning calories and enhancing your stamina in this action-packed session.
            </p>
          </div>
          <div>
            <h4>HIIT Transformation Bootcamp.</h4>
            <p>
            Burn calories and boost endurance with this high-intensity workout program. Perfect for all fitness levels!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;