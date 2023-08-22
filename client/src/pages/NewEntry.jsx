import React from "react";
import "../styles/NewEntry.css";
import formImage from "../assets/formImg.png";
const NewEntry = () => {
  return (
    <div className="page2">
      <div className="entryContainer">
        <div className="entryContainerLeft">
          <img src={formImage} width="70%" alt="Manage your finances"/>
          <div className="imageText">
            Track Every Penny with Ease: Unveil Financial Clarity ! Your Money's
            Journey, Simplified with Our Intuitive Tracking Solution.
          </div>
        </div>
        <div className="entryContainerRight">
          <form method="POST">
            <div className="transactionType">
              <label for="radio1">
                Money deducted
                <input
                  type="radio"
                  id="radio1"
                  name="radio-group"
                  value="deduction"
                />
              </label>
              <label for="radio2">Money Received
              <input
                type="radio"
                id="radio2"
                name="radio-group"
                value="Receival"
              /></label>
            </div>
            <input
              type="number"
              className="amount"
              name="amount"
              placeholder="Amount"
            />

            <input type="date" className="date" name="date" />
            <textarea
              id="textarea"
              name="textarea"
              rows="30"
              cols="44"
              placeholder="Note"
              maxLength="250"
            ></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewEntry;
