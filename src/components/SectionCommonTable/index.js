import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CardLayout from "../CardLayout";
import Input from "../Input";

const SectionCommonTable = ({
  wrapperClassName,
  cardStyle,
  sectionTableTitle,
  countContainer,
  table,
  calculateCredit,
  calculateDebit,
  calculateContainer,
  data,
  setFilterData,
}) => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (data) {
      const filterData = data?.filter((dt) => {
        if (search === "") {
          return dt;
        } else if (
          dt?.user_id?.toLowerCase()?.includes(search?.toLowerCase()) ||
          dt?.sponsor_id?.toLowerCase()?.includes(search?.toLowerCase()) ||
          dt?.email?.toLowerCase()?.includes(search?.toLowerCase())
        ) {
          return dt;
        }
      });
      setFilterData(filterData);
    }
  }, [search]);

  return (
    <div className={`rf_sectiontable_wrapper ${wrapperClassName}`}>
      <CardLayout style={cardStyle} className="rf_sectiontable_card">
        <div className="rf_sectiontable_title">
          <div className="rf_sectiontable_title_container">
            <h2>{sectionTableTitle}</h2>
          </div>
          {countContainer && (
            <div className="rf_sectiontable_balance">
              <h2>{countContainer}</h2>
            </div>
          )}
          {data && setFilterData && (
            <div className="searchbar_input">
              <Input
                type="text"
                name="search"
                className="spacial_search_input"
                placeholder="Search user id or email..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          )}
        </div>
        <div className="rf_sectiontable_table">{table}</div>
        {calculateContainer && (
          <div className="rf_sectiontable_calculate">
            {calculateCredit && (
              <h2 className="credit_balance">{calculateCredit}</h2>
            )}
            {calculateDebit && (
              <h2 className="debit_balance">{calculateDebit}</h2>
            )}
          </div>
        )}
      </CardLayout>
    </div>
  );
};

export default SectionCommonTable;
