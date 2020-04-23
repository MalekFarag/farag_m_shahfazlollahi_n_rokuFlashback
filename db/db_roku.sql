-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 11, 2020 at 04:47 AM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_roku`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_media`
--

DROP TABLE IF EXISTS `tbl_media`;
CREATE TABLE IF NOT EXISTS `tbl_media` (
  `media_id` int(3) NOT NULL AUTO_INCREMENT,
  `media_title` varchar(64) NOT NULL,
  `media_description` varchar(256) NOT NULL,
  `media_art` varchar(32) NOT NULL,
  `media_file` varchar(32) NOT NULL,
  `media_year` varchar(32) NOT NULL,
  `media_type` varchar(32) NOT NULL,
  `kid_friendly` int(1) NOT NULL,
  PRIMARY KEY (`media_id`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_media`
--

INSERT INTO `tbl_media` (`media_id`, `media_title`, `media_description`, `media_art`, `media_file`, `media_year`, `media_type`, `kid_friendly`) VALUES
(1, 'The Ten Commandments\r\n(1956)', 'Moses (Charlton Heston), an\r\nEgyptian Prince, learns of his\r\ntrue heritage as a Hebrew and\r\nhis divine mission as the\r\ndeliverer of his people.', '1950_movie.jpg', 'movie_trailer.mp4', '1956', 'movie', 1),
(2, 'I Love Lucy (1952) - CBS', 'A daffy woman constantly strives to become a star along with her bandleader husband and gets herself in the strangest situations.', '1950_show.jpg', 'show_trailer.mp4', '1952', 'show', 0),
(3, 'The Twist (1959) - Chubby Checke', 'An American pop song written\r\nand originally released in early 1959 by Hank Ballard and\r\nthe Midnighters as a B-side to\r\n“Teardrops on Your Letter”.', '1950_song.jpg', 'music_trailer.mp4', '1959', 'music', 0),
(4, 'The Sound of Music (1965)', 'A good-natured novitiate is\r\nhired to care for the\r\nseven children of a widowed\r\nAustrian captain. She ultimately\r\nwins everyones heart but their\r\nlives are threatened by the encroachment of Nazis.', '1960_movie.jpg', 'movie_trailer.mp4', '1965', 'movie', 0),
(5, 'The Beverly Hillbillies (1963)', 'the Clampetts, a poor backwoods family from the Ozarks\r\nregion who move to posh Beverly Hills, California after striking\r\noil on their land.', '1960_show.jpg', 'show_trailer.mp4', '1963', 'show', 1),
(6, 'Hey Jude (1968) - The Beatles', 'Made by English rock band the\r\nBeatles that was released as a\r\nnon-album single. It was written\r\nby Paul McCartney and\r\ncredited to the\r\nLennon–McCartney\r\npartnership.', '1960_song.jpg', 'music_trailer.mp4', '1963', 'music', 0),
(7, 'Star Wars Episode IV: A New Hope', 'Luke Skywalker joins forces\r\nwith a Jedi Knight, a cocky\r\npilot, a Wookiee and two droids\r\nto save the galaxy from the\r\nEmpire’s world-destroying battle\r\nstation, while also attempting to\r\nrescue Princess Leia from the\r\nmysterious Darth Vader', '1970_movie.jpg', 'movie_trailer.mp4', '1977', 'movie', 1),
(8, 'All in the Family', 'About a working-class family\r\nliving in Queens, New York.\r\nIts patriarch is Archie Bunker\r\n(O’Connor), an outspoken,\r\nnarrow-minded man, seemingly\r\nprejudiced against everyone\r\nwho is not like him or his idea of\r\nhow people should be.', '1970_show.jpg', 'show_trailer.mp4', '1971', 'show', 1),
(9, 'You Light Up my Life - Kasey Cis', 'Cisyk’s original soundtrack\r\nrecording was included on the\r\nfilm’s soundtrack album, and\r\nlater released as a single to\r\nbolster sales of the soundtrack\r\nalbum after Debby Boone included her version on her first\r\nsolo album.', '1970_song.jpg', 'music_trailer.mp4', '1977', 'music', 0),
(10, 'ET', 'A troubled child summons the\r\ncourage to help a friendly alien\r\nescape Earth and return to his\r\nhome world.', '1980_movie.jpg', 'movie_trailer.mp4', '1982', 'movie', 1),
(11, 'Dallas', 'an American soap opera that\r\nrevolves around a wealthy and\r\nfeuding Texas family, the\r\nEwings, who own the\r\nindependent oil company Ewing\r\nOil and the cattle-ranching land\r\nof Southfork', '1980_show.jpg', 'show_trailer.mp4', '1980', 'show', 0),
(12, 'Physical ', 'a song recorded by\r\nEnglish-born Australian\r\nsinger Olivia Newton-John for\r\nher twelfth studio album\r\nPhysical (1981)', '1980_song.jpg', 'music_trailer.mp4', '1981', 'music', 0),
(13, 'Titanic', 'A seventeen-year-old aristocrat\r\nfalls in love with a kind but poor\r\nartist aboard the luxurious, ill-fated R.M.S. Titanic.', '1990_movie.jpg', 'movie_trailer.mp4', '1997', 'movie', 0),
(14, 'Cheers', 'The show is set in a bar named\r\nCheers in Boston,\r\nMassachusetts, where a group\r\nof locals meet to drink, relax,\r\nand socialize.', '1990_show.jpg', 'show_trailer.mp4', '1992', 'show', 1),
(15, 'How Do I Live', ' a song written by Diane Warren. It was originally performed\r\nby LeAnn Rimes and the extended version of the song was\r\nlater featured on her second\r\nstudio album You Light Up My\r\nLife', '1990_song.jpg', 'music_trailer.mp4', '1997', 'music', 1),
(16, 'Avatar', 'Set in the mid-22nd century\r\nwhen humans are colonizing\r\nPandora, a lush habitable moon\r\nof a gas giant in the Alpha Centauri star system, in order to\r\nmine the mineral unobtanium, a\r\nroom-temperature\r\nsuperconductor', '2000_movie.jpg', 'movie_trailer.mp4', '2009', 'movie', 0),
(17, 'Survivor', 'The television show places a\r\ngroup of strangers in an isolated location, where they must\r\nprovide food, fire, and shelter\r\nfor themselves. The contestants\r\ncompete in challenges for rewards and immunity from elimination.', '2000_show.jpg', 'show_trailer.mp4', '2000', 'show', 0),
(18, 'We Belong Together', '“We Belong Together” is built\r\non a simple piano arrangement\r\nwith an understated backbeat.\r\nThe lyrics chronicle a woman’s\r\ndesperation for her former lover\r\nto return.', '2000_song.jpg', 'music_trailer.mp4', '2005', 'music', 1),
(19, 'Star Wars: Episode VII: The Force Awakens', 'Three decades after the Empire’s defeat, a new threat arises in the militant First Order.\r\nDefected stormtrooper Finn and\r\nthe scavenger Rey are caught\r\nup in the Resistance’s search\r\nfor the missing Luke Skywalker.', '2010_movie.jpg', 'movie_trailer.mp4', '2015', 'movie', 1),
(20, 'American Idol', 'The concept of the series involves discovering recording\r\nstars from unsigned singing\r\ntalents, with the winner determined by American viewers using phones, Internet, and SMS\r\ntext voting.', '2010_show.jpg', 'show_trailer.mp4', '2010', 'show', 1),
(21, 'Old Town Road', 'The song has been widely labeled as “country rap”, a genre\r\nthat had become mainstream\r\nonly a year prior to release.', '2010_song.jpg', 'music_trailer.mp4', '2018', 'music', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

DROP TABLE IF EXISTS `tbl_user`;
CREATE TABLE IF NOT EXISTS `tbl_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_fname` varchar(32) NOT NULL,
  `user_name` varchar(32) NOT NULL,
  `user_pass` varchar(32) NOT NULL,
  `user_avatar` varchar(32) NOT NULL,
  `user_permissions` int(1) NOT NULL,
  `user_admin` int(1) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_fname`, `user_name`, `user_pass`, `user_avatar`, `user_permissions`, `user_admin`) VALUES
(1, 'Malek', 'malekiscool', 'password', 'malek.jpg', 1, 1),
(2, 'Nick', 'nickisok', 'password', 'nick.jpg', 1, 0),
(3, 'Timmy', 'timmy64', 'password', 'timmy.jpg', 0, 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
