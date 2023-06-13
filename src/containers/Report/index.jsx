import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import ReactDatePicker from 'react-datepicker';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import './index.styles.css';

dayjs.extend(relativeTime);

function Report() {
  //   const [selectedDate, setSelectedDate] = useState(new Date());
  const [daysCount, setDaysCount] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <Container className="pt-4 pb-5">
      <h1 className="mb-5">Laporan Sewa Mobil</h1>
      <div className="d-flex align-items-center">
        <div className="flex-shrink-1">
          <div>
            <h5>Pilih tanggal</h5>
          </div>
          {/* <ReactDatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          /> */}
          <ReactDatePicker
            selectsRange
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
            onChange={(dates) => {
              setStartDate(dates[0]);
              setEndDate(dates[1]);

              const days = dayjs(dates[1]).diff(dayjs(dates[0]), 'days');
              setDaysCount(days);
            }}
          />
          <div>Jumlah hari: {daysCount}</div>
        </div>
      </div>
      <section className="section_chart d-flex justify-content-center align-items-center">
        <div>Chart here</div>
      </section>
    </Container>
  );
}

export default Report;
