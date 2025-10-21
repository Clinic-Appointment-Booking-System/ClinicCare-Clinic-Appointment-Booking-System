import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DoctorList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Add dark mode effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialization: 'Cardiologist',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDISbqKR0Miu48WuO714qF_cT6XOxJkDdciBd2bHgA4Rxsi2QO9ZbEMm78oM1ej7pxqFs63yb5kkUzDg92WlOEHa162NyjFed-euMxZaC8H2g-ZJdkArRAMEWtpdqq5iPl7BYhfFQ2ZTFgD2XfEAXkR3yx5T0t_YrmD3j5kzqGPD3HMZZe1cTvv0OfSYTF7g0-bPDQyLC7zl4zgRYX26isPzjz8oJTAMBfdEpwOW44Zm8uY5WecE8dSA9UaanO4Z918jmyeNZDT3Js'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialization: 'Dermatologist',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMjh-7t7xiILU-GgBHpkf_c9e_qHxXk4ZWZeS-_rcOVKQB-blyTO22pNyylXcRkHvvhhMAgfrC88dzvF4OtWhOqloP7ORnrlRoEI0Scg9m1jkyr0olUQEw8OYwhWVc5i8Kpa3rTixgfRpbLHA-x2hxVZlb8xz0_kBJ7_7D4HAPhqNnSLwJCa6ZbRQXX0F8RkYNGZ_bByJOsu5LldZEIxTRrz99N0s9jVUNiEi1XokUc7XrngeC9UC8umNHurUfiJhVG5SXJgni9BY'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialization: 'Pediatrician',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcWtvi7dK-dTwI-PLI0lW8eybmAzI--vUwtO7DcusvjwXAk7TjeBfOVcfCv8ORTsIGCHJfEzw3wQI9rrixpG9uHuMjDf-NkR8yUvGR877Su-p6_RjKx1KqMBk0HCihJyTPuoFd4343lLK8mCaV0PflmUOO8yhyhpvli7AgLhYd2nRF6Vfa-byGaD9izi6nnXTQ8tG-41yFe4exvSuLfh8CuWA0rfKxsieqFY9_G52hKH98l7HCHfnNMBsCA2v2IJUrL5DEzdlFsHA'
    },
    {
      id: 4,
      name: 'Dr. David Lee',
      specialization: 'Neurologist',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPU5mFGMh5EiFnggzb7S2RltuSknjakP0QhC0UxWjybmybjxom69dtggxX6bNWe4eojAK7b4exl5-2JmG9utGMmQfed359DI5TCt8gccU0FtlTmLaRSHXYiPtR_7DTZ8B_LCXiaT2cYI_PBtrZ21ChX6U9IcNGVE_cPS-UHYxsK_Ayn6NZNWsTII-rHK9WrpG1E8MKeMSqJJhvhY6UxkZXOr5jtnT0npdAsMzece1mjG9EBqjDpi9qg7g1mYEo0asxxn4VaCyx1W8'
    },
    {
      id: 5,
      name: 'Dr. Jessica Williams',
      specialization: 'Gynecologist',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdkXzvOTveDRHgp1VVM5_fjFOz5sQwZHD16wzS2GbWnxII_FwMgkfjlpaYlhJPE2JsyriemULCcJo8g82ZP-HUBClh2pBAudNIGcagU3UanuC-x2xjwh4G1eEPEZzW77RJlaHMjuGug8Yq87n1cOU8u_TrI1QN1vKTBCPGSIxeMlk40JEnPpJS-kEeWijjvrrV-LcdajIyXTEpCw1W9ik1f770njV-QD4VdLZQV50wFObzXx9Pr73bmKpeCHRl_-MC5yFxCj4c1wQ'
    }
  ];

  const filteredDoctors = doctors.filter(doctor => 
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200 ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <main className="px-4 md:px-10 py-5 flex flex-1 justify-center">
            <div className="layout-content-container flex flex-col w-full max-w-4xl flex-1">
              <div className="flex flex-wrap justify-between items-center gap-4 p-4">
                <p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
                  Find a Doctor
                </p>
              </div>

              <div className="px-4 py-3 sticky top-0 bg-background-light dark:bg-background-dark z-10 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <label className="flex flex-col min-w-40 h-12 w-full flex-1">
                    <div className="flex w-full flex-1 items-stretch rounded-full h-full">
                      <div className="text-slate-500 flex bg-slate-100 dark:bg-slate-800 items-center justify-center pl-5 pr-2 rounded-l-full">
                        <span className="material-symbols-outlined">search</span>
                      </div>
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-full text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-slate-100 dark:bg-slate-800 h-full placeholder:text-slate-500 dark:placeholder:text-slate-400 px-4 text-base font-normal leading-normal"
                        placeholder="Search by name, specialization..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </label>

                  <div className="flex gap-3 flex-wrap justify-center pr-4">
                    <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-100 dark:bg-slate-800 pl-4 pr-3 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                      <p className="text-sm font-medium leading-normal">Insurance</p>
                      <span className="material-symbols-outlined text-lg">expand_more</span>
                    </button>
                    <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-100 dark:bg-slate-800 pl-4 pr-3 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                      <p className="text-sm font-medium leading-normal">Availability</p>
                      <span className="material-symbols-outlined text-lg">expand_more</span>
                    </button>
                    <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-100 dark:bg-slate-800 pl-4 pr-3 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                      <p className="text-sm font-medium leading-normal">Location</p>
                      <span className="material-symbols-outlined text-lg">expand_more</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-4 space-y-4">
                {filteredDoctors.map((doctor) => (
                  <div key={doctor.id} className="flex items-center gap-4 bg-white dark:bg-slate-800/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-16 w-16"
                      style={{ backgroundImage: `url("${doctor.image}")` }}
                      aria-label={`Profile picture of ${doctor.name}`}
                    />
                    <div className="flex-grow flex flex-col justify-center">
                      <p className="text-slate-900 dark:text-white text-lg font-semibold leading-normal line-clamp-1">
                        {doctor.name}
                      </p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal line-clamp-2">
                        {doctor.specialization}
                      </p>
                    </div>
                    <div className="shrink-0">
                      <Link to={`/doctor/${doctor.id}`}>
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-white text-sm font-medium leading-normal hover:bg-primary/90 transition-colors">
                          <span className="truncate">View Profile</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center p-8">
                <div className="flex items-center gap-2">
                  <button
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors disabled:opacity-50"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <button
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                      currentPage === 1 ? 'bg-primary text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                    } text-sm font-medium`}
                    onClick={() => setCurrentPage(1)}
                  >
                    1
                  </button>
                  <button
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                      currentPage === 2 ? 'bg-primary text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                    } text-sm font-medium`}
                    onClick={() => setCurrentPage(2)}
                  >
                    2
                  </button>
                  <button
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                      currentPage === 3 ? 'bg-primary text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                    } text-sm font-medium`}
                    onClick={() => setCurrentPage(3)}
                  >
                    3
                  </button>
                  <span className="text-slate-500">...</span>
                  <button
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors text-sm font-medium"
                    onClick={() => setCurrentPage(8)}
                  >
                    8
                  </button>
                  <button
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DoctorList;