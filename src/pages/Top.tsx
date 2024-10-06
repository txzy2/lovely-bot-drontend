import { FadeIn } from "@/shared/animations";
import { Medal, User } from "lucide-react";
import React, { useState } from "react";

import { mockTopManData, mockTopWomanData } from '@/shared/mocks/constants';
import { TopDTO } from "@/shared/types/types";

const Top: React.FC = () => {
  const [selectedGender, setSelectedGender] = useState<string>('Парни');

  const handleToggle = (gender: string) => {
    setSelectedGender(gender);
  };

  return (
    <FadeIn className="h-[70vh] flex flex-col items-center p-6">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-3xl p-6">
        {
          selectedGender === 'Парни' ? (
            <h2 className="text-[30px] text-black font-bold text-center">👨Парни</h2>
          ) : (
            <h2 className="text-[30px] text-black font-bold text-center">👩Девушки</h2>
          )
        }


        <div className="w-full h-[70%] overflow-y-auto">
          <table className="w-full text-left">
            <thead className="sticky top-0 bg-white">
              <tr className="border-b border-gray-200 text-gray-700 text-lg font-semibold">
                <th scope="col" className="py-2">
                  <div className="flex flex-col items-center gap-2">
                    <Medal className="text-yellow-500" /> Rank
                  </div>
                </th>
                <th scope="col" className="py-2">
                  <div className="flex flex-col items-center gap-2">
                    <User className="text-blue-500" /> Name
                  </div>
                </th>
                <th scope="col" className="py-2">
                  <div className="flex flex-col items-center gap-2">
                    <img src="/heart.png" width={25} alt="likes" /> Likes
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>

              {selectedGender === 'Парни' ? (
                mockTopManData.map((item: TopDTO) => (<tr key={item.id} className="text-center text-gray-800 font-bold border-b border-gray-200 hover:bg-gray-100 transition-all">
                  <td className="py-3">{item.rank}</td>
                  <td className="py-3 text-start">{item.name}</td>
                  <td className="py-3">{item.score}</td>
                </tr>
                ))
              ) : (

                mockTopWomanData.map((item: TopDTO) => (<tr key={item.id} className="text-center text-gray-800 font-bold border-b border-gray-200 hover:bg-gray-100 transition-all">
                  <td className="py-3">{item.rank}</td>
                  <td className="py-3">{item.name}</td>
                  <td className="py-3">{item.score}</td>
                </tr>
                ))
              )}

            </tbody>

          </table>
        </div>

        <div className="text-black mt-2 text-center">
          <div>Твоё место в рейтинге: <span className="font-bold">{Math.floor(Math.random() * 1000)}</span></div>
        </div>
      </div>

      <div className="w-[60%] absolute bottom-10 flex items-center justify-center gap-5 bg-white text-black px-4 py-2 rounded-xl shadow-lg">
        <p
          onClick={() => handleToggle('Парни')}
          className={`w-[50%] font-bold py-1 text-center rounded-xl cursor-pointer ${selectedGender === 'Парни' ? 'bg-yellow-500 text-white' : 'bg-transparent text-black'
            }`}
        >
          Парни
        </p>
        <p
          onClick={() => handleToggle('Девушки')}
          className={`w-[50%] font-bold py-1 text-center rounded-xl cursor-pointer ${selectedGender === 'Девушки' ? 'bg-yellow-500 text-white' : 'bg-transparent text-black'
            }`}
        >
          Девушки
        </p>
      </div>

    </FadeIn>
  );
};

export default Top;
