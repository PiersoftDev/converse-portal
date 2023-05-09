import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRFQByCategoryAndCode } from "../../features/MaterialIndent/MaterialSlice";

import styled from "styled-components";

const DetailsComponent = ({ detailsComponentValues }) => {
  const dispatch = useDispatch();
  const { projectDesc, activityDesc, createdDate, budgetedQty, inventory, procuredTillDate, variance, projectId, categoryId } = detailsComponentValues;
  const [nextStep, setNextStep] = useState("");
  useEffect(() => {
    if (nextStep) {
      console.log({ projectId, categoryId });
      dispatch(getRFQByCategoryAndCode({ projectId, categoryId }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextStep]);

  return (
    <Wrapper>
      <div className="detail-column column-1">
        <div className="detail-header">Project :</div>
        <div className="detail-value">{projectDesc}</div>

        <div className="detail-header">Activity :</div>
        <div className="detail-value">{activityDesc}</div>

        <div className="detail-header">Created Date :</div>
        <div className="detail-value">{createdDate || "23/04/2023"}</div>

        <select name="nextSteps" placeholder="Next steps" className="next-steps" value={nextStep} onChange={(e) => setNextStep(e.target.value)}>
          <option value="" disabled hidden>
            Next steps ...
          </option>
          <option value="addToRFQ">Add to RFQ</option>
          <option value="convertToPO">Convert to PO</option>
          <option value="Query">Raise a Query</option>
        </select>
      </div>

      <div className="detail-column">
        <div className="detail-header">Budgeted Quantity :</div>
        <div className="detail-value">{budgetedQty}</div>

        <div className="detail-header">Inventory :</div>
        <div className="detail-value avail-inventory">
          {inventory}
          <span className="refresh-icon">
            <RotateLeftIcon style={{ fontSize: "1.2rem" }} />
          </span>
        </div>

        <div className="detail-header">Procured till date :</div>
        <div className="detail-value">{procuredTillDate}</div>
      </div>
      <div className="detail-column column-3">
        <div className="detail-header">Created by :</div>
        <div className="detail-value">25/04/2023</div>

        <div className="detail-header">Current Price :</div>
        <div className="detail-value">{/* <span>&#x20B9;</span> {0} */}0</div>

        <div className="detail-header">Variance :</div>
        <div className="detail-value">{variance} </div>
      </div>
    </Wrapper>
  );
};
export default DetailsComponent;

const Wrapper = styled.div`
  border-top: 1px solid var(--grey-50);
  padding-top: 1rem;
  padding-right: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-left: 1rem;
  font-size: 0.9rem;
  padding-bottom: 0.25rem;

  .detail-column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 0.25rem 3rem;
  }

  .column-1 {
    gap: 0.25rem 0;
  }

  .column-3 {
    justify-content: space-between;
  }

  .column-3 .detail-header {
    gap: 0;
  }

  .detail-header {
    color: var(--grey-500);
  }

  .detail-value {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .avail-inventory {
    position: relative;
    top: -0.2rem;
  }

  .refresh-icon {
    margin: 0 0.4rem;
    color: rgba(224, 73, 3, 0.964);
    transition: var(--transition);
    cursor: pointer;
  }

  .next-steps {
    display: inline-block;
    border: none;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: transparent;
    padding: 0.25rem 0.5rem;
    border: 1px solid var(--grey-300);
    background-color: var(--primary-400);
    color: var(--white);
    justify-self: flex-start;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    top: -0.5rem;
  }
`;
