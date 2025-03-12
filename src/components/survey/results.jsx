import { useMemo } from 'react'
import _map from 'lodash/map'


function SurveyResults({participants}) {

  const pollResults = useMemo(() => {
    return {
      Yes: participants.filter(participant => participant.answer === "Down").length,
      No: participants.filter(participant => participant.answer === "Not Down").length
    };
  });


  return (
    <div className="border-2 border-solid">
      <table className="table-fixed border-collapse w-96 mx-auto">
        <thead>
            <tr>
              <th className="text-left border">Down: {pollResults?.Yes} </th>
              <th className="text-left border">Not Down: {pollResults?.No}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border">
              {_map(participants.
                filter(participant => participant.answer === 'Down'),
                  (participant, index) => (
                    <div key={index}>{participant.name}</div>
                  ))
              }
              </td>
              <td className="border">
              {_map(participants.
                filter(participant => participant.answer === 'Not Down'),
                  (participant, index) => (
                    <div key={index}>{participant.name}</div>
                  ))
              }
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default SurveyResults