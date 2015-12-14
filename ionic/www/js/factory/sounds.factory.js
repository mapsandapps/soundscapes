'use strict';

/**
 * @ngdoc service
 * @name soundscapesApp.SoundsFactory
 * @description
 * # SoundsFactory
 * Factory in the soundscapesApp.
 */
angular.module('app')
  .factory('SoundsFactory', function () {
    // Service logic
    // ...

    console.log('loaded factory');

    var npsPack = [
      {
        title: 'Thunder',
        image: {
          file: 'Lightning_Yellowstone_NPS.jpg',
          info: 'Yellowstone',
          credit: 'NPS'
        },
        sound: {
          file: 'Thunder.mp3',
          info: 'This sound was recorded at North Cascades National Park in Washington.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Thunder_Sound_Pic.jpg',
          credit: 'NPS'
        }
      },{
        title: "Couch's Spadefoot Toad",
        image: {
          file: 'CouchsSpadefootToad_CreditNPS_JamesBorgmeyer.jpg',
          credit: 'NPS/James Borgmeyer' 
        },
        sound: {
          file: 'CouchsSpadefootToad_SaguaroNP_20110705.MP3',
          info: 'This sound was recorded at Saguaro National Park in Arizona.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_CouchsSpadefootToad.jpg',
          credit: 'NPS'
        }
      },{
        title: 'Green Treefrog',
        image: {
          file: 'GreenTreeFrog_Credit_NPS_TheresaThom.JPG',
          credit: 'NPS/Thereas Thom',
        },
        sound: {
          file: 'GreenTreeFrog_2008-08-16_EvergladesNP.MP3',
          info: 'This sound was recorded at Everglades National Park in Florida.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_EVER002_greentreefrog.jpg',
          credit: 'NPS'
        }
      },{
        title: 'Pig Frog',
        image: {
          file: 'PigFrog_credit_USGS_JWillson.jpg',
          credit: 'USGS/J. Willson'
        },
        sound: {
          file: 'PigFrog_EvergladesNP.MP3',
          info: 'This sound was recorded at Everglades National Park in Florida',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_EVER002_PigFrog.jpg',
          credit: 'NPS'
        }
      },{
        title: 'Northern Flicker',
        image: {
          file: 'Northern_Flicker_lgcredit_USFWS.jpg',
          credit: 'USFWS/David Menke',
        },
        sound: {
          file: 'Northern_Flicker_YOSE_7_21_2006.MP3',
          info: 'This sound was recorded at Yosemite National Park in California.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Northern_Flicker_YOSE_7_21_2006.jpg',
          credit: 'NPS'
        }
      },{
        title: 'Spotted Owl',
        image: {
          file: 'Spotted_Owl_credit_FWS_lg.jpg',
          credit: 'USFWS/John & Karen Hollingsworth'
        },
        sound: {
          file: 'Spotted_Owl_YOSE_7_14_2006.MP3',
          info: 'This sound was recorded at Yellowstone National Park in Wyoming',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Spotted_Owl_YOSE_7_14_2006.jpg',
          credit: 'NPS'
        }
      },{
        title: 'Avalanche',
        image: {
          file: 'Avalanche_UpperIngrahamGlacierMountRainier_lg.jpg',
          info: 'Upper Ingraham Glacier, Mount Rainier',
          credit: 'NPS'
        },
        sound: {
          file: 'Avalanche_DENA.MP3',
          info: 'This sound was recorded at Denali National Park in Alaska.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Avalanche_DENA.jpg',
          credit: 'NPS'
        }
      },{
        title: 'Stream',
        image: {
          file: 'Stream_JohnHeidecker_lg.jpg',
          credit: 'John Heidecker'
        },
        sound: {
          file: 'Stream_MUWO_.MP3',
          info: 'This sound was recorded at Muir Woods National Monument in California.',
          credit: 'NPS'
        },
        spectrogram: {
          file: 'Spectro_Stream_MUWO.jpg',
          credit: 'NPS'
        }
      }
    ];

    var packs = [
      {
        title: 'NPS',
        pack: npsPack
      }
    ];

    function getSound(id) {
      return npsPack[id];
    }

    function getQuiz(packId, sound) {
      console.log(packId);
      console.log(sound);
      var pack = packs[packId].pack;
      var quiz = {};
      quiz.title = pack[sound].title;
      quiz.image = pack[sound].image;
      quiz.sound = pack[sound].sound;
      quiz.sound.file = "../resources/" + quiz.sound.file;
      quiz.correctSpectrogramIndex = Math.floor(Math.random() * 4);
      quiz.spectrograms = ["", "", "", ""];
      quiz.spectrograms[quiz.correctSpectrogramIndex] = pack[sound].spectrogram;
      var remainingSpectrograms = angular.copy(pack);
      remainingSpectrograms.splice(sound, 1);
      for (var i = 0; i < quiz.spectrograms.length; i++) {
        if (quiz.spectrograms[i] === "") {
          // pick a random one from remainingSpectrograms
          var index = Math.floor(Math.random() * remainingSpectrograms.length);
          // put it at i in quiz.spectrograms
          quiz.spectrograms[i] = remainingSpectrograms[index].spectrogram;
          // splice it from remainingSpectrograms
          remainingSpectrograms.splice(index, 1);
        }
      }
      quiz.remainingSpectrograms = remainingSpectrograms;
      quiz.packTitle = packs[packId].title;
      quiz.packSize = pack.length;
      return quiz;
    }

    // Public API here
    return {
      getSound: getSound,
      getQuiz: getQuiz
    };
  });
