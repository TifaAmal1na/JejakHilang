-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 26, 2024 at 02:57 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jejakhilang`
--

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `id` int(11) NOT NULL,
  `id_orang` int(11) NOT NULL,
  `deskripsi` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notification`
--

INSERT INTO `notification` (`id`, `id_orang`, `deskripsi`) VALUES
(1, 1, 'Joe sudah ditemukan'),
(2, 2, 'Jane sudah ditemukan');

-- --------------------------------------------------------

--
-- Table structure for table `orang_hilang`
--

CREATE TABLE `orang_hilang` (
  `id` int(11) NOT NULL,
  `nama` varchar(20) NOT NULL,
  `ciri` varchar(50) NOT NULL,
  `tanggal_hilang` date NOT NULL,
  `tanggal_ditemukan` date NOT NULL,
  `foto` varchar(255) NOT NULL,
  `status` enum('sudah','belum') NOT NULL,
  `id_pelaporan` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orang_hilang`
--

INSERT INTO `orang_hilang` (`id`, `nama`, `ciri`, `tanggal_hilang`, `tanggal_ditemukan`, `foto`, `status`, `id_pelaporan`) VALUES
(1, 'John Doe', 'Tall, blue eyes, brown hair', '2023-10-10', '2024-11-15', 'https://example.com/johndoe.jpg', 'sudah', NULL),
(2, 'Jane Smith', 'Short, blonde hair, wearing glasses', '2023-11-01', '2024-11-15', 'https://example.com/janesmith.jpg', 'sudah', NULL),
(3, 'John Doe', 'Tall, blue eyes, brown hair', '2023-10-10', '0000-00-00', 'https://example.com/johndoe.jpg', 'sudah', NULL),
(4, 'Jane Smith', 'Short, blonde hair, wearing glasses', '2023-11-01', '0000-00-00', 'https://example.com/janesmith.jpg', 'sudah', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `pelaporan`
--

CREATE TABLE `pelaporan` (
  `id` int(11) NOT NULL,
  `nama` varchar(20) NOT NULL,
  `ciri` varchar(50) NOT NULL,
  `tanggal_hilang` date NOT NULL,
  `foto` varchar(255) NOT NULL,
  `nomer_pelapor` int(13) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'tifa', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_orang` (`id_orang`);

--
-- Indexes for table `orang_hilang`
--
ALTER TABLE `orang_hilang`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_pelaporan` (`id_pelaporan`);

--
-- Indexes for table `pelaporan`
--
ALTER TABLE `pelaporan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `orang_hilang`
--
ALTER TABLE `orang_hilang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `notification`
--
ALTER TABLE `notification`
  ADD CONSTRAINT `notification_ibfk_1` FOREIGN KEY (`id_orang`) REFERENCES `orang_hilang` (`id`);

--
-- Constraints for table `orang_hilang`
--
ALTER TABLE `orang_hilang`
  ADD CONSTRAINT `fk_id_pelaporan` FOREIGN KEY (`id_pelaporan`) REFERENCES `pelaporan` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
