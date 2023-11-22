import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
const authorsData = [
    {
        "id": 1,
        "name": "montarion",
        "url": "https://www.youtube.com/channel/UCUC2GWAOMNYw8qotNLJd-DQ"
    },
    {
        "id": 2,
        "name": "ekslong",
        "url": "https://www.youtube.com/channel/UC4oj_RwWWW3xviCw6Jf_VnA"
    },
    {
        "id": 3,
        "name": "Ibh Svenssen",
        "url": "https://www.youtube.com/channel/UCeVv8w5mi1N4bDCbvd9Chfg"
    },
    {
        "id": 4,
        "name": "\u9418\u68ee\u7ae3",
        "url": "https://www.youtube.com/channel/UCjz58Af0C_1RUFq08-C13kQ"
    },
    {
        "id": 5,
        "name": "Sprite_tm",
        "url": "https://www.youtube.com/channel/UCG-vF93KS86_Cm-dwu6AJmA"
    },
    {
        "id": 6,
        "name": "fb39ca4",
        "url": "https://www.youtube.com/channel/UCNUxBiVyD4V7-lX7zCIMKCA"
    },
    {
        "id": 7,
        "name": "HTFCirno2000",
        "url": "https://www.youtube.com/channel/UCthL8Hsa3WjkyzPrtetV7GA"
    },
    {
        "id": 8,
        "name": "reddevils500a",
        "url": "https://www.youtube.com/channel/UCI0-z9tmpOx1bU6Weh6q0AQ"
    },
    {
        "id": 9,
        "name": "YoshiFan (avrilloosing)",
        "url": "https://www.youtube.com/channel/UCevYkfHMgGPZhRL5EXm-cWA"
    },
    {
        "id": 10,
        "name": "99710",
        "url": "https://www.youtube.com/channel/UCl65MgP-xbbsnUtDnlmF3Wg"
    },
    {
        "id": 11,
        "name": "Appel Works",
        "url": "https://www.youtube.com/channel/UCdt0FUZYX9Bjr5XYXrbTlSA"
    },
    {
        "id": 12,
        "name": "Daryl Bunao",
        "url": "https://www.youtube.com/channel/UCPJ9cwTVeS_zkiki24ypDZQ"
    },
    {
        "id": 13,
        "name": "Psypher the Psynergist",
        "url": "https://www.youtube.com/channel/UCe5nKDcNNJKyjJht0tDwREA"
    },
    {
        "id": 14,
        "name": "Wo",
        "url": "https://www.youtube.com/channel/UCwUhXiqieH9RF6oFCnAOYRQ"
    },
    {
        "id": 15,
        "name": "Stephane Dallongeville",
        "url": "https://www.youtube.com/channel/UCBrcesMiVl2_CE2e5SG_8Ow"
    },
    {
        "id": 16,
        "name": "MrSolidSnake745",
        "url": "https://www.youtube.com/channel/UCRa1raJXF22KpZ8IknQpGEw"
    },
    {
        "id": 17,
        "name": "\u30dd\u30e9\u30f3\u30c1\u30e3\u30f3\u30cd\u30eb / Polan Channel",
        "url": "https://www.youtube.com/channel/UCBdFWB8q7igmwhlMjuflJCw"
    },
    {
        "id": 18,
        "name": "Mroczny Luzio",
        "url": "https://www.youtube.com/channel/UCh8PF9WV9gR5Z_larQHnZqA"
    },
    {
        "id": 19,
        "name": "David Lee",
        "url": "https://www.youtube.com/channel/UCc9i9hzhSw7aGUcQkUC-GxA"
    },
    {
        "id": 20,
        "name": "Abaduaber",
        "url": "https://www.youtube.com/channel/UCUGrEovPqjKcTSRPsVHoy1A"
    },
    {
        "id": 21,
        "name": "DistWave",
        "url": "https://www.youtube.com/channel/UCJs_09tPFEd5xEwBRbMuF5A"
    },
    {
        "id": 22,
        "name": "facchin facchin",
        "url": "https://www.youtube.com/channel/UC9fHGi6wKHnPTnyxdicDwfg"
    },
    {
        "id": 23,
        "name": "Meru Otonashi",
        "url": "https://www.youtube.com/channel/UCwM2uC2g2vjnZM6uDophPwA"
    },
    {
        "id": 24,
        "name": "immibis",
        "url": "https://www.youtube.com/channel/UCNs3KPe5jlz_M2KvZe8q2fQ"
    },
    {
        "id": 25,
        "name": "Yusuke Kikuchi",
        "url": "https://www.youtube.com/channel/UCRsfkhhFcL2UTRSXXDRzcIw"
    },
    {
        "id": 26,
        "name": "Tianyu Liu",
        "url": "https://www.youtube.com/channel/UCeQ2tuvRTIJta7SJSo6qTZw"
    },
    {
        "id": 27,
        "name": "Sneugler",
        "url": "https://www.youtube.com/channel/UCzFLLJZOcNDaSOEYp4-6Qbw"
    },
    {
        "id": 28,
        "name": "ph01x",
        "url": "https://www.youtube.com/channel/UCkhL4o0MIzZNqncLZWxA0qg"
    },
    {
        "id": 29,
        "name": "JustBurminator",
        "url": "https://www.youtube.com/channel/UCsHPXysMBTGj2iH2OKCNdaQ"
    },
    {
        "id": 30,
        "name": "400machine1",
        "url": "https://www.youtube.com/channel/UCa7_LAdJzmQezUFCNjVTEkw"
    },
    {
        "id": 31,
        "name": "muzzdiez",
        "url": "https://www.youtube.com/channel/UCid5Hzq7aczd2_ELelWWcTA"
    },
    {
        "id": 32,
        "name": "Kun Libertad",
        "url": "https://www.youtube.com/channel/UCDBOauenc-UWEl2d_1EMORA"
    },
    {
        "id": 33,
        "name": "bigloudnoise",
        "url": "https://www.youtube.com/channel/UC9NBVp_jdoIrZjhv5gIM6Sg"
    },
    {
        "id": 34,
        "name": "Jay Wilkins",
        "url": "https://www.youtube.com/channel/UCI-CwBD2iHXDqAZGnTXGvoA"
    },
    {
        "id": 35,
        "name": "Czes\u0142aw Mnich",
        "url": "https://www.youtube.com/channel/UCSBw8ReGsJvjFB45RLOwghg"
    },
    {
        "id": 36,
        "name": "Noah Rosamilia",
        "url": "https://www.youtube.com/channel/UCmgDyh_AeaHALohvR7PKXIw"
    },
    {
        "id": 37,
        "name": "Carlos CH1",
        "url": "https://www.youtube.com/channel/UCi8JS-mz2tKcdTYWpjT8gQw"
    },
    {
        "id": 38,
        "name": "ER. ATFS",
        "url": "https://www.youtube.com/channel/UCd_l8TvTPoUSqdLFqLkIXOw"
    },
    {
        "id": 39,
        "name": "Ken Yue Production (since 2006)",
        "url": "https://www.youtube.com/channel/UCbZgG0QZKk0Ope4PAuT0rPg"
    },
    {
        "id": 40,
        "name": "Gingeas",
        "url": "https://www.youtube.com/channel/UC-Y61gW00EK4xGH8NZSZwFw"
    },
    {
        "id": 41,
        "name": "INK 9 Channel",
        "url": "https://www.youtube.com/channel/UCByEv0mIm8dzotxqvEW_TmA"
    },
    {
        "id": 42,
        "name": "RushJet1",
        "url": "https://www.youtube.com/channel/UCM1KEDxD2ZP95p7TDdMSFeA"
    },
    {
        "id": 43,
        "name": "PG",
        "url": "https://www.youtube.com/channel/UCwkIjjkKbuvB5iXZoASAIug"
    },
    {
        "id": 44,
        "name": "thealgorithm",
        "url": "https://www.youtube.com/channel/UCx9Qanir3Q5wzbTp6Lk6jNg"
    },
    {
        "id": 45,
        "name": "s2325",
        "url": "https://www.youtube.com/channel/UCKrErjK1UDNA4szHmmTEsPQ"
    },
    {
        "id": 46,
        "name": "Wacholder B\u00e4r",
        "url": "https://www.youtube.com/channel/UCQxqmiUaVv-hu7Dw_lS_76g"
    },
    {
        "id": 47,
        "name": "Oyashiro",
        "url": "https://www.youtube.com/channel/UCvtuGSSix4bgfkfj4KNtsnQ"
    },
    {
        "id": 48,
        "name": "Zeb's Drone Flights",
        "url": "https://www.youtube.com/channel/UC7Bqbt6q_UEtHk42ScjEnjg"
    },
    {
        "id": 49,
        "name": "pigdevil2010",
        "url": "https://www.youtube.com/channel/UCyaC_kwkUx-U2hAW8ag_mvg"
    },
    {
        "id": 50,
        "name": "zaxoniec",
        "url": "https://www.youtube.com/channel/UCq0qTOm1ux2WOhEDPbe0Ofg"
    },
    {
        "id": 51,
        "name": "marcan",
        "url": "https://www.youtube.com/channel/UCxS98ISZNcuaJRCvy6JV6Fw"
    },
    {
        "id": 52,
        "name": "Manwe",
        "url": "https://www.youtube.com/channel/UCrMhQRpmu_0ycUvUSxHgEyw"
    },
    {
        "id": 53,
        "name": "Junferno",
        "url": "https://www.youtube.com/channel/UCRb6Mw3fJ6OFzp-cB9X29aA"
    },
    {
        "id": 54,
        "name": "stage7",
        "url": "https://www.youtube.com/channel/UCATJmJBNClxisPFUaTJMBAQ"
    },
    {
        "id": 55,
        "name": "RetroDemoScene",
        "url": "https://www.youtube.com/channel/UCOAS2LRJ9VzWrblDtVljaUA"
    },
    {
        "id": 56,
        "name": "EpreTroll",
        "url": "https://www.youtube.com/channel/UCQhNE6T0oHGmM4uxvc43-aw"
    },
    {
        "id": 57,
        "name": "The Hpman",
        "url": "https://www.youtube.com/channel/UCKXgE8k8q8Ch9ZqGVFMjeLw"
    },
    {
        "id": 58,
        "name": "Ringomajyutu's",
        "url": "https://www.youtube.com/channel/UCEM4UgunyS7r1wVmlb3WlJw"
    },
    {
        "id": 59,
        "name": "Noah Chang",
        "url": "https://www.youtube.com/channel/UC4_0h_li-cf-UE_Swwk7M2A"
    },
    {
        "id": 60,
        "name": "LuiCat",
        "url": "https://www.youtube.com/channel/UCKCaS3jj8achqSGiP43fPGg"
    },
    {
        "id": 61,
        "name": "Carele Smith \uff08\u3072\u3068\u307f\u3055\u3093\uff09",
        "url": "https://www.youtube.com/channel/UC1fmDIpmvnzOqqB6rO87Mgg"
    },
    {
        "id": 62,
        "name": "Naveen Arunachalam",
        "url": "https://www.youtube.com/channel/UCxkQRCr3rIm7dUYT6ZXCV7g"
    },
    {
        "id": 63,
        "name": "203 Null",
        "url": "https://www.youtube.com/channel/UCl9tL-r4NzvGl-EIeVYZZ-g"
    },
    {
        "id": 64,
        "name": "PJ\u30e9\u30dc\uff20\u9ad8\u30a8\u30cd\u30eb\u30ae\u30fc\u6280\u8853\u7814\u7a76\u5ba4",
        "url": "https://www.youtube.com/channel/UCuOa976cDhTZOh3FnRbcL7Q"
    },
    {
        "id": 65,
        "name": "Ascii Fied",
        "url": "https://www.youtube.com/channel/UCD5Wsw2sp2pF67Bzj0vdcAw"
    },
    {
        "id": 66,
        "name": "Max Holt",
        "url": "https://www.youtube.com/channel/UC2KMfg_xRqNLIB5jeUVpNGg"
    },
    {
        "id": 67,
        "name": "RosinSmoke",
        "url": "https://www.youtube.com/channel/UCOOvLziI7FLzKQvCfxyjxfQ"
    },
    {
        "id": 68,
        "name": "KevstracK",
        "url": "https://www.youtube.com/channel/UC9VSFUoub0HcdLQOM3wpZBg"
    },
    {
        "id": 69,
        "name": "DjAlexGamebox",
        "url": "https://www.youtube.com/channel/UCmrZm-3EwqZfg0Z_iK5XyqQ"
    },
    {
        "id": 70,
        "name": "Roman Kobylinskii",
        "url": "https://www.youtube.com/channel/UCzyjP7tFcQDEkNSwVmNbFQw"
    },
    {
        "id": 71,
        "name": "yksoft1",
        "url": "https://www.youtube.com/channel/UCa0nF6ezg2ZLfyCafR4ea-w"
    },
    {
        "id": 72,
        "name": "evldhs",
        "url": "https://www.youtube.com/channel/UCDlUIep0DLH9yf9dchKteFg"
    },
    {
        "id": 73,
        "name": "Artem Kashkanov Live",
        "url": "https://www.youtube.com/channel/UCp5ZbxlYD0qRHGFZEbb319Q"
    },
    {
        "id": 74,
        "name": "CreepyNinja_",
        "url": "https://www.youtube.com/channel/UCaCp7EeWfpgLhKrmNZV_mHA"
    },
    {
        "id": 75,
        "name": "KappuCitti",
        "url": "https://www.youtube.com/channel/UCo--98ihTGYRTk3jzR52Uhw"
    },
    {
        "id": 76,
        "name": "Sora and Hotaru's adventure",
        "url": "https://www.youtube.com/channel/UCGP0MqOX1F7Xl2xRmTPU2BQ"
    },
    {
        "id": 77,
        "name": "Peter Dell",
        "url": "https://www.youtube.com/channel/UCdEcc4czCEHOFpYltxFhCfQ"
    },
    {
        "id": 78,
        "name": "decle",
        "url": "https://www.youtube.com/channel/UCLNAcVomyDfT7BPaBaXQ99g"
    },
    {
        "id": 79,
        "name": "NPCat",
        "url": "https://www.youtube.com/channel/UCFf2azJHYACCUIrt-a0LP2g"
    },
    {
        "id": 80,
        "name": "otter_us / OtterSou",
        "url": "https://www.youtube.com/channel/UCxABh0GkTWllqG3oGtM3skw"
    },
    {
        "id": 81,
        "name": "Treyzania",
        "url": "https://www.youtube.com/channel/UCVP-0ePDBxeNemne0zAFZkg"
    },
    {
        "id": 82,
        "name": "A4",
        "url": "https://www.youtube.com/channel/UCg2sLmvVgdsRQyOBZ1S0bPw"
    },
    {
        "id": 83,
        "name": "Lamp",
        "url": "https://www.youtube.com/channel/UCZyRLmk83gTw3LU3vWbZTNw"
    },
    {
        "id": 84,
        "name": "Zipplet Tech",
        "url": "https://www.youtube.com/channel/UC8nQsFxeFenp-2LtF8DEv2Q"
    },
    {
        "id": 85,
        "name": "niszet",
        "url": "https://www.youtube.com/channel/UCwcxjDoPHcIcA6nWFy4fSDQ"
    },
    {
        "id": 86,
        "name": "turtius",
        "url": "https://www.youtube.com/channel/UCydjQFWacJ-LVr0RVu6fVMg"
    },
    {
        "id": 87,
        "name": "WJ-Studio",
        "url": "https://www.youtube.com/channel/UCwZZE5ONCV7KojEYXxJxBlA"
    },
    {
        "id": 88,
        "name": "Eric King",
        "url": "https://www.youtube.com/channel/UC-Cdm96bkicjM64Z_CVnJ1g"
    },
    {
        "id": 89,
        "name": "P1XFX",
        "url": "https://www.youtube.com/channel/UCe64J6qUnpCjqL_yv-NvVuA"
    },
    {
        "id": 90,
        "name": "Miscellaneous projects",
        "url": "https://www.youtube.com/channel/UChIynxlOPxClksIDrTNqSBQ"
    },
    {
        "id": 91,
        "name": "Luigi Elettrico",
        "url": "https://www.youtube.com/channel/UCLp2puNJ5h8P6lqa5Ud7DDA"
    },
    {
        "id": 92,
        "name": "Bryan Braun",
        "url": "https://www.youtube.com/channel/UCu6eRj-aMjiccsLtD8Wuy5w"
    },
    {
        "id": 93,
        "name": "Franzoli Electronics",
        "url": "https://www.youtube.com/channel/UCLsUeooHSJlE_5xL4BPQIOQ"
    },
    {
        "id": 94,
        "name": "moody",
        "url": "https://www.youtube.com/channel/UCIA-5UJZ1HMug3Imb61BOKQ"
    },
    {
        "id": 95,
        "name": "Charlotte Channel",
        "url": "https://www.youtube.com/channel/UC6qjbWkNqDzF3ACpxUHUNsA"
    },
    {
        "id": 96,
        "name": "SomeKidWithKringe54",
        "url": "https://www.youtube.com/channel/UCxsECxUjyR4RZW9nJzQTX0Q"
    },
    {
        "id": 97,
        "name": "Gabriel COMBE",
        "url": "https://www.youtube.com/channel/UCqzJmD6Z1tFffJw202wnVaA"
    },
    {
        "id": 98,
        "name": "KasherGamer",
        "url": "https://www.youtube.com/channel/UCst3A428hZY_pSvpL0wRDyQ"
    },
    {
        "id": 99,
        "name": "Ian Ward",
        "url": "https://www.youtube.com/channel/UCh5rY0PaAGhnrnfLQKZt-1w"
    },
    {
        "id": 100,
        "name": "Moriya Salesman",
        "url": "https://www.youtube.com/channel/UCK8ItO50DdMB_6yDctsZhCQ"
    },
    {
        "id": 101,
        "name": "Adafruit Industries",
        "url": "https://www.youtube.com/channel/UCpOlOeQjj7EsVnDh3zuCgsA"
    },
    {
        "id": 102,
        "name": "Wenting Zhang",
        "url": "https://www.youtube.com/channel/UCkbVQA_Isfnvv1XNL_mELig"
    },
    {
        "id": 103,
        "name": "JackLuckSack",
        "url": "https://www.youtube.com/channel/UCiRc_SxH2IMSefADsxhXXrQ"
    },
    {
        "id": 104,
        "name": "leadpogrommer",
        "url": "https://www.youtube.com/channel/UCVkcWf8Xv-atl9TsMqooODQ"
    },
    {
        "id": 105,
        "name": "n1l",
        "url": "https://www.youtube.com/channel/UCJ7qCDwcwgutHQ41ZNr5H_g"
    },
    {
        "id": 106,
        "name": "-T.K.-",
        "url": "https://www.youtube.com/channel/UCRgzb2lhOC1rmteTkJNuAGA"
    },
    {
        "id": 107,
        "name": "DJ Sures",
        "url": "https://www.youtube.com/channel/UCdE3O5Xt-t6EapotLsc92AQ"
    },
    {
        "id": 108,
        "name": "\u3057\u3070\u304b\u305c",
        "url": "https://www.youtube.com/channel/UCsAoCvY2KhFfdF8-Epfg4zw"
    },
    {
        "id": 109,
        "name": "Wild Matsu",
        "url": "https://www.youtube.com/channel/UC9PzUDuPjShexlg1QUlDeYQ"
    },
    {
        "id": 110,
        "name": "vishyy",
        "url": "https://www.youtube.com/channel/UCS8bUf9ad3v-wiDwPBslCnA"
    },
    {
        "id": 111,
        "name": "Forsynth",
        "url": "https://www.youtube.com/channel/UCe5jcznt3A2UtwbC1S3dPUw"
    },
    {
        "id": 112,
        "name": "lpmuse",
        "url": "https://www.youtube.com/channel/UCqCp906APNR2KpJCofHWHIQ"
    },
    {
        "id": 113,
        "name": "applesorceZ",
        "url": "https://www.youtube.com/channel/UCxQ0cBysht5Y0cub7C75lgQ"
    },
    {
        "id": 114,
        "name": "nodeus",
        "url": "https://www.youtube.com/channel/UCfqLLI_uiqLL4dv4KVntkwA"
    },
    {
        "id": 115,
        "name": "Oby 1",
        "url": "https://www.youtube.com/channel/UCeccBqBbRbq5EnCv92HxE_A"
    },
    {
        "id": 116,
        "name": "azya",
        "url": "https://www.youtube.com/channel/UCikhJIG7wFNOeB5yGCdW_eg"
    },
    {
        "id": 117,
        "name": "dimden",
        "url": "https://www.youtube.com/channel/UCABcqcr1ovxCOTjSFzCaIYA"
    },
    {
        "id": 118,
        "name": "nowzu",
        "url": "https://www.youtube.com/channel/UCLHVCV-LhL5haMgGgAo_p7w"
    },
    {
        "id": 119,
        "name": "vic",
        "url": "https://www.youtube.com/channel/UC0F0M_9UKzS0cQraF-JM9Aw"
    },
    {
        "id": 120,
        "name": "Codrut X",
        "url": "https://www.youtube.com/channel/UCwnpr_foowlNjzgKdieEPOA"
    },
    {
        "id": 121,
        "name": "XA10C4",
        "url": "https://www.youtube.com/channel/UCqMikZ51Xp8lqL9tzmQwOCw"
    },
    {
        "id": 122,
        "name": "Terrain",
        "url": "https://www.youtube.com/channel/UCvR4ZfVoCXbyTzU8DINM0Sg"
    },
    {
        "id": 123,
        "name": "o moli e mi",
        "url": "https://www.youtube.com/channel/UCJ6MOt-kNP332K8F7RpBmVw"
    },
    {
        "id": 124,
        "name": "BLUE_MIST39         ",
        "url": "https://www.youtube.com/channel/UCrVyw9Xl1-AvfYf9pkNvocA"
    },
    {
        "id": 125,
        "name": "MaoTao",
        "url": "https://www.youtube.com/channel/UCtAsx1StDf5Ux0svjiS9__Q"
    },
    {
        "id": 126,
        "name": "NoEngrish",
        "url": "https://www.youtube.com/channel/UCc_V9C65eJQ2joysH-jUGVQ"
    },
    {
        "id": 127,
        "name": "Hydroxyl",
        "url": "https://www.youtube.com/channel/UCedVYoeprJX3KEUnU2Amaxw"
    },
    {
        "id": 128,
        "name": "MarkGamed7794",
        "url": "https://www.youtube.com/channel/UCRz7kCIosIqW6GcFg49OvnA"
    },
    {
        "id": 129,
        "name": "Gasman",
        "url": "https://www.youtube.com/channel/UC_TUZNvqTptEm3Qd4yVsH6w"
    },
    {
        "id": 130,
        "name": "LiquidDev",
        "url": "https://www.youtube.com/channel/UCiXXv4Cp8lpgrrH3rRt9saA"
    },
    {
        "id": 131,
        "name": "Mecha Art",
        "url": "https://www.youtube.com/channel/UClhGAhK3ZIDCINFvN4f0iYQ"
    },
    {
        "id": 132,
        "name": "reddevils500b",
        "url": "https://www.youtube.com/channel/UCx-TsSSo2h1rtuFqm_XFZqg"
    },
    {
        "id": 133,
        "name": "Dualie Ch. \u7121\u6975\u30c7\u30e5\u30a2\u30ea\u30fc",
        "url": "https://www.youtube.com/channel/UCDFwKaNcBH_GxC5U4MMGznQ"
    },
    {
        "id": 134,
        "name": "Sergey Karpesh",
        "url": "https://www.youtube.com/channel/UCs3c_CLoQTY89ZmMHzhXPkg"
    },
    {
        "id": 135,
        "name": "Mjau",
        "url": "https://www.youtube.com/channel/UCVm0K9ZV1Ggin_IU_KZyFtQ"
    },
    {
        "id": 136,
        "name": "Pawelr98",
        "url": "https://www.youtube.com/channel/UC7jQJXrJ2ju2OEPGtIKjdyg"
    },
    {
        "id": 137,
        "name": "Mechanical Red Panda \u673a\u68b0\u5c0f\u718a\u732b",
        "url": "https://www.youtube.com/channel/UCjGsdh719cwQG39k1tyYSiw"
    },
    {
        "id": 138,
        "name": "RzeL Gamers",
        "url": "https://www.youtube.com/channel/UCYzfm2QXg-IdcJ1pTmP1qbQ"
    },
    {
        "id": 139,
        "name": "Chickenbread",
        "url": "https://www.youtube.com/channel/UClEKWaP2ATqO-id57UpgRXg"
    },
    {
        "id": 140,
        "name": "santomon",
        "url": "https://www.youtube.com/channel/UCNJdVcIVMZrVY83rFpYq60A"
    },
    {
        "id": 141,
        "name": "Waux Studio",
        "url": "https://www.youtube.com/channel/UC2Q9UmOJewE19J6rGgT-BpA"
    },
    {
        "id": 142,
        "name": "kimoto yanke",
        "url": "https://www.youtube.com/channel/UCsQcgJdv0Qk8OUiAt7pB9NQ"
    },
    {
        "id": 143,
        "name": "\u5e38\u4e16\u30ce\u95c7 TOKOYAMi",
        "url": "https://www.youtube.com/channel/UCuq1ynSBN4ROHC1bHJNlrWQ"
    },
    {
        "id": 144,
        "name": "Delta Pie",
        "url": "https://www.youtube.com/channel/UCcRTu2PrNd0K9ca1dkuJoXg"
    },
    {
        "id": 145,
        "name": "Makkusu Otaku",
        "url": "https://www.youtube.com/channel/UCiLt5JVIP2GoBHpnjHwkgGQ"
    },
    {
        "id": 146,
        "name": "Leo Chiang",
        "url": "https://www.youtube.com/channel/UCKNesiVisRxagp5HW2BQ0lw"
    },
    {
        "id": 147,
        "name": "mhykhol",
        "url": "https://www.youtube.com/channel/UCJ7nmIkUpEaZojiI8O-717A"
    },
    {
        "id": 148,
        "name": "\ucc28\ucee4 Chaco",
        "url": "https://www.youtube.com/channel/UCMogCSEyT2n92V8uDJa1Pcg"
    },
    {
        "id": 149,
        "name": "Megalocube",
        "url": "https://www.youtube.com/channel/UCypFb0HE6CPKdRzInfErEcw"
    },
    {
        "id": 150,
        "name": "TuddlesT",
        "url": "https://www.youtube.com/channel/UCpUyYGoYxH0lnL2cK3bQMcA"
    },
    {
        "id": 151,
        "name": "Retronyme",
        "url": "https://www.youtube.com/channel/UCfeAbDpZDJJcWIIrJYSp5Xg"
    },
    {
        "id": 152,
        "name": "ARealSeal",
        "url": "https://www.youtube.com/channel/UC_FL1Mu6cz1leTQTt6VrHzg"
    },
    {
        "id": 153,
        "name": "Le Sharko\u00efste",
        "url": "https://www.youtube.com/channel/UCDajTt0Sp_jlYKlaKrh9dgg"
    },
    {
        "id": 154,
        "name": "Natt Akuma Channel!",
        "url": "https://www.youtube.com/channel/UCvMXSjcsczkuDJc4qANy2jQ"
    },
    {
        "id": 155,
        "name": "daruna",
        "url": "https://www.youtube.com/channel/UCwNfiHeInr4wj_Ip6tQvl7A"
    },
    {
        "id": 156,
        "name": "Lux",
        "url": "https://www.youtube.com/channel/UClrQKnKq7w4aMGSpaUORMMQ"
    },
    {
        "id": 157,
        "name": "Plads Elsker",
        "url": "https://www.youtube.com/channel/UCeS_HLSQpGEqymZZV5RyFHg"
    },
    {
        "id": 158,
        "name": "Tanz Dev",
        "url": "https://www.youtube.com/channel/UCKdGGrOvjZ67UEZmNJmEmSg"
    },
    {
        "id": 159,
        "name": "Doge Minedoge",
        "url": "https://www.youtube.com/channel/UCtwnEvMWHwA-e9wBfQ1hoaA"
    },
    {
        "id": 160,
        "name": "FlavoredSaucer",
        "url": "https://www.youtube.com/channel/UCq2hOkZ_S86d8wq_eDUfo0Q"
    },
    {
        "id": 161,
        "name": "_bright0n.",
        "url": "https://www.youtube.com/channel/UCwhRMBqQs8Rw-_co-Hz3mLQ"
    },
    {
        "id": 162,
        "name": "Alexander Egorov",
        "url": "https://www.youtube.com/channel/UCuAgJUDCXcDIyEqGB0tYDSA"
    },
    {
        "id": 163,
        "name": "Rph",
        "url": "https://www.youtube.com/channel/UCEGw9xywmH7LX2Utt55vE7Q"
    },
    {
        "id": 164,
        "name": "DEMOSCENE",
        "url": "https://www.youtube.com/channel/UCSnmbUU8S8XlJ8yZCViC7iw"
    },
    {
        "id": 165,
        "name": "Matt London",
        "url": "https://www.youtube.com/channel/UCesLqZwsklAWudSfwOgT1Ag"
    },
    {
        "id": 166,
        "name": "AnimateLife1412",
        "url": "https://www.youtube.com/channel/UCxWUson2m2iwjq5U2-2PIqQ"
    },
    {
        "id": 167,
        "name": "Pyhesty",
        "url": "https://www.youtube.com/channel/UCg1-Iwu349iPhzBON9NVzhA"
    },
    {
        "id": 168,
        "name": "Sascha_T",
        "url": "https://www.youtube.com/channel/UCcAQvGVm5E3jZOplKd7Hd3A"
    },
    {
        "id": 169,
        "name": "Skrzelik",
        "url": "https://www.youtube.com/channel/UCXpuUvlpSQq_mxm0JPtZPSA"
    },
    {
        "id": 170,
        "name": "Aiko",
        "url": "https://www.youtube.com/channel/UCWdgjANpsdcCvUJUFrT2iig"
    },
    {
        "id": 171,
        "name": "Composite",
        "url": "https://www.youtube.com/channel/UCC-DWdyi9GeFNHtvh4HbqNg"
    },
    {
        "id": 172,
        "name": "wavvy01",
        "url": "https://www.youtube.com/channel/UC_swxtF0-PdvEr94qzbRXGg"
    },
    {
        "id": 173,
        "name": "Reselim",
        "url": "https://www.youtube.com/channel/UClrNp5K1vyctjyQXzBxT1QA"
    },
    {
        "id": 174,
        "name": "Talon Zane",
        "url": "https://www.youtube.com/channel/UC0zTVUoRS-zHxWy3F9B5nrw"
    },
    {
        "id": 175,
        "name": "Captain Freefall",
        "url": "https://www.youtube.com/channel/UCbDEgVHeZKaTzHERhbEP2oQ"
    },
    {
        "id": 176,
        "name": "Noxturnix",
        "url": "https://www.youtube.com/channel/UCvsje3-C2JqUzgyujUTxcQQ"
    },
    {
        "id": 177,
        "name": "NotLe0n",
        "url": "https://www.youtube.com/channel/UCf148mCljpn3SULW4ZOLuDg"
    },
    {
        "id": 178,
        "name": "Harry Note Block Studio",
        "url": "https://www.youtube.com/channel/UCNYehKm4ZXbo6n44bZeF3pg"
    },
    {
        "id": 179,
        "name": "Gick",
        "url": "https://www.youtube.com/channel/UCIVa_USnpd4k2NnWVfchaow"
    },
    {
        "id": 180,
        "name": "Mhx Air",
        "url": "https://www.youtube.com/channel/UCBuUFApgu9lD97fTVOa0Oew"
    },
    {
        "id": 181,
        "name": "SomeMelGuy",
        "url": "https://www.youtube.com/channel/UCAX8ia1c3XK6MBQoIdINAfQ"
    },
    {
        "id": 182,
        "name": "SomethingElse",
        "url": "https://www.youtube.com/channel/UCusTJu-hoC1Xt-ZKuQk9uhQ"
    },
    {
        "id": 183,
        "name": "Fuou Marinas",
        "url": "https://www.youtube.com/channel/UCc0e9OJeXuTj4bxs88ZGZsQ"
    },
    {
        "id": 184,
        "name": "KewlKris",
        "url": "https://www.youtube.com/channel/UCASJVKx07V50BxWyya9_CuA"
    },
    {
        "id": 185,
        "name": "Tempestissiman",
        "url": "https://www.youtube.com/channel/UCHnTjGOLbwufuYBnFnW8oYQ"
    },
    {
        "id": 186,
        "name": "\u0414\u0435\u043d\u0438\u0441 \u041a\u0430\u043d\u044b\u0448\u0435\u0432",
        "url": "https://www.youtube.com/channel/UCOn20YhTO_NyG_eCgOTvImw"
    },
    {
        "id": 187,
        "name": "aznguy.mp5",
        "url": "https://www.youtube.com/channel/UCOQafpKVlAIs6juu-gnvJhQ"
    },
    {
        "id": 188,
        "name": "Underrated Unknown",
        "url": "https://www.youtube.com/channel/UCm7mx5gYpXEYYEc257lFW4Q"
    },
    {
        "id": 189,
        "name": "Casually Overcomplicated",
        "url": "https://www.youtube.com/channel/UCghQxkPc1nuBGINekYcAegg"
    },
    {
        "id": 190,
        "name": "Joshnaks",
        "url": "https://www.youtube.com/channel/UC2qfcmmND0YKSW05Pj_1r4A"
    },
    {
        "id": 191,
        "name": "LudoCrypt",
        "url": "https://www.youtube.com/channel/UCH-PgyrmXJPsin_xb5lv5gg"
    },
    {
        "id": 192,
        "name": "TheBorg150",
        "url": "https://www.youtube.com/channel/UC-_5RLSib8SxQNyIPbMCRBg"
    },
    {
        "id": 193,
        "name": "WorstApple",
        "url": "https://www.youtube.com/channel/UCq5guFMemcXbb-CaIofk-wQ"
    },
    {
        "id": 194,
        "name": "Kenshiro Miles VT.",
        "url": "https://www.youtube.com/channel/UCHaurcc4EKA9y66r8atMBag"
    },
    {
        "id": 195,
        "name": "Kipp",
        "url": "https://www.youtube.com/channel/UCfOBbGN7yVXYRCnms7ksmsg"
    },
    {
        "id": 196,
        "name": "Cookiemonsterbb",
        "url": "https://www.youtube.com/channel/UC7TMt7fxvTM_2CdmBfn55iA"
    },
    {
        "id": 197,
        "name": "Tommy Hetrick",
        "url": "https://www.youtube.com/channel/UCLyhWQ3ocaH13SAdEn7njLg"
    },
    {
        "id": 198,
        "name": "KNAXT",
        "url": "https://www.youtube.com/channel/UCivnPkThkFmWfXLPiQj38WQ"
    },
    {
        "id": 199,
        "name": "LittleEndu",
        "url": "https://www.youtube.com/channel/UCzl8pPfZ63M3ehRfKLJze7w"
    },
    {
        "id": 200,
        "name": "Twovert",
        "url": "https://www.youtube.com/channel/UCLve-K-z58uEWVnE95ROE1w"
    },
    {
        "id": 201,
        "name": "AndroidKitKat",
        "url": "https://www.youtube.com/channel/UCtJa6MFpxP4CIRxXkfr0xaQ"
    },
    {
        "id": 202,
        "name": "slommy",
        "url": "https://www.youtube.com/channel/UCzKMtASruCYXOwhd0c0Z0sg"
    },
    {
        "id": 203,
        "name": "BlackCreeper",
        "url": "https://www.youtube.com/channel/UCWtdaTvSH9XJLRl5tkcFX5Q"
    },
    {
        "id": 204,
        "name": "Davy Harris",
        "url": "https://www.youtube.com/channel/UC60h78kq-v2LI2H8UpHVkOw"
    },
    {
        "id": 205,
        "name": "Sad Ken",
        "url": "https://www.youtube.com/channel/UCvfjcCEgXS6j8kQ59FsjoFg"
    },
    {
        "id": 206,
        "name": "Arsen Sayadyan",
        "url": "https://www.youtube.com/channel/UCEuFEWKvUsDc3Whb-LZ2mxw"
    },
    {
        "id": 207,
        "name": "Keyboard",
        "url": "https://www.youtube.com/channel/UC0AUkRiWRFPLd6651LoSvmA"
    },
    {
        "id": 208,
        "name": "Pene Brook",
        "url": "https://www.youtube.com/channel/UCPLDcuBtGVezcTeoi9I1Zlg"
    },
    {
        "id": 209,
        "name": "GD Semicolon",
        "url": "https://www.youtube.com/channel/UCgO7Fxif2_RvvmaVRl0nS9Q"
    },
    {
        "id": 210,
        "name": "KabanFriends",
        "url": "https://www.youtube.com/channel/UCrCbh2fyz0k-fwHbADvYWPg"
    },
    {
        "id": 211,
        "name": "Domburg",
        "url": "https://www.youtube.com/channel/UCmrtx8uu020bqOU7h35wWow"
    },
    {
        "id": 212,
        "name": "Na Cl TY",
        "url": "https://www.youtube.com/channel/UCB38RGU1X-w7nbZolZYiM1Q"
    },
    {
        "id": 213,
        "name": "Antti Vesanen",
        "url": "https://www.youtube.com/channel/UCQkSC2HK5zwhThagpyMAEgw"
    },
    {
        "id": 214,
        "name": "nacabaro",
        "url": "https://www.youtube.com/channel/UCI7J52kNowaf-2Bkkj5fWPg"
    },
    {
        "id": 215,
        "name": "Kasami",
        "url": "https://www.youtube.com/channel/UCd87LvZ6TuHG3zi16Ri85Qw"
    },
    {
        "id": 216,
        "name": "Sulfrix",
        "url": "https://www.youtube.com/channel/UCM1w31JNZbOFsRNL2b-oGNg"
    },
    {
        "id": 217,
        "name": "catarium",
        "url": "https://www.youtube.com/channel/UCE4fDZ5lSfmu0bvwNe6h0XA"
    },
    {
        "id": 218,
        "name": "Heisengrind",
        "url": "https://www.youtube.com/channel/UCj6sfZsj18-3TJO-1C7DYBQ"
    },
    {
        "id": 219,
        "name": "LucienZ",
        "url": "https://www.youtube.com/channel/UCNseWGI28HPm_i9bYmi4i3g"
    },
    {
        "id": 220,
        "name": "cappin",
        "url": "https://www.youtube.com/channel/UCx-tnsVG5r9vh2ezgMAtCrw"
    },
    {
        "id": 221,
        "name": "Goasty",
        "url": "https://www.youtube.com/channel/UCArz-ycXnPQ93jdbezMAX7g"
    },
    {
        "id": 222,
        "name": "ChickenMann",
        "url": "https://www.youtube.com/channel/UCQuao1y6iIVZv-Y6m_upeIg"
    },
    {
        "id": 223,
        "name": "ScalpelRed GreenEyed",
        "url": "https://www.youtube.com/channel/UCDcz790UtznHc8WMExGIniw"
    },
    {
        "id": 224,
        "name": "Franzyd",
        "url": "https://www.youtube.com/channel/UCKTIU49WCA673rjM2avkA7g"
    },
    {
        "id": 225,
        "name": "SEA",
        "url": "https://www.youtube.com/channel/UCQ0y2O8KZovFQ1IpaEH_9PA"
    },
    {
        "id": 226,
        "name": "Irgendsoein Kek",
        "url": "https://www.youtube.com/channel/UCYS2BojBCmDdhnYuqlPwknA"
    },
    {
        "id": 227,
        "name": "Haxalicious",
        "url": "https://www.youtube.com/channel/UCZQshZF7D8tJTuM2lupByng"
    },
    {
        "id": 228,
        "name": "Zohiu",
        "url": "https://www.youtube.com/channel/UCRrH-z_JkidRWYxls3cE77w"
    },
    {
        "id": 229,
        "name": "Dark Diffusion",
        "url": "https://www.youtube.com/channel/UC3lnDYhbP5P_QTXeFvVoPMQ"
    },
    {
        "id": 230,
        "name": "Fruityloops",
        "url": "https://www.youtube.com/channel/UCRNCPD0xhIXEFOZ1xSdvLvA"
    },
    {
        "id": 231,
        "name": "\u5e78\u96c4\u91d1\u6ca2",
        "url": "https://www.youtube.com/channel/UC32Y2f0wrUjinUWGYAl5NiA"
    },
    {
        "id": 232,
        "name": "Lady Scene",
        "url": "https://www.youtube.com/channel/UCq-DCorrFXMpT3jsgUYO9Ng"
    },
    {
        "id": 233,
        "name": "Avl\u00f6nskt",
        "url": "https://www.youtube.com/channel/UCOxag8oVb70iDjCarWhuzbw"
    },
    {
        "id": 234,
        "name": "luigiman09",
        "url": "https://www.youtube.com/channel/UCPZeEvYtEm9LXWQbu049kDw"
    },
    {
        "id": 235,
        "name": "awnglier",
        "url": "https://www.youtube.com/channel/UCtGS6qhtgReq0GqZQmgh5GQ"
    },
    {
        "id": 236,
        "name": "Rob Landes",
        "url": "https://www.youtube.com/channel/UCKnBNM0_8P87KomLAAqVxNw"
    },
    {
        "id": 237,
        "name": "makeUmove",
        "url": "https://www.youtube.com/channel/UCc0_4m8a-YtBHEcYwjEnbxw"
    },
    {
        "id": 238,
        "name": "\u6775\u5bb6\u4e03\u4e09",
        "url": "https://www.youtube.com/channel/UCVWMwLFzyyz1wyVVk9RWx7g"
    },
    {
        "id": 239,
        "name": "Underswap Milkychan CleverCrimsonFox Maple Starbeam",
        "url": "https://www.youtube.com/channel/UC2kilLKgLzBjgqDZXo_vXKw"
    },
    {
        "id": 240,
        "name": "KIRA",
        "url": "https://www.youtube.com/channel/UCDxS8VeAQhnHJc6B5jE3KHg"
    },
    {
        "id": 241,
        "name": "Scrublord",
        "url": "https://www.youtube.com/channel/UCJc8NQ4qz7KH0sN3TQsUHzA"
    },
    {
        "id": 242,
        "name": "Avs Avsi",
        "url": "https://www.youtube.com/channel/UCWRN3SnDbQwvP2rEMMo06Ww"
    },
    {
        "id": 243,
        "name": "Radiant Records",
        "url": "https://www.youtube.com/channel/UCp12r-XSTiIZfiPScw7Wxfw"
    },
    {
        "id": 244,
        "name": "OR3O",
        "url": "https://www.youtube.com/channel/UCTAyRNwgMv_vvM8Z9UvKKEg"
    },
    {
        "id": 245,
        "name": "Ashe",
        "url": "https://www.youtube.com/channel/UCpxuU8Cb3U9A_lRQ_yrjdGw"
    },
    {
        "id": 246,
        "name": "RichaadEB",
        "url": "https://www.youtube.com/channel/UCPM1bCbT-dVAHAEIpUUpVLQ"
    },
    {
        "id": 247,
        "name": "Cloudjumper",
        "url": "https://www.youtube.com/channel/UClflzY3ZjKJBrEYdJhMBv4Q"
    },
    {
        "id": 248,
        "name": "Nightcore Wolfie",
        "url": "https://www.youtube.com/channel/UCS0mAvuPKmDtQEJVs5l8fTg"
    },
    {
        "id": 249,
        "name": "Alina Apfelkuchen7",
        "url": "https://www.youtube.com/channel/UCDEN10mSvPV46XcYIymSa0g"
    },
    {
        "id": 250,
        "name": "Sheet Music Boss",
        "url": "https://www.youtube.com/channel/UCzTR9iSH-TFC4-ocDS_ll4A"
    },
    {
        "id": 251,
        "name": "RichaadEB - Topic",
        "url": "https://www.youtube.com/channel/UCw0bY8ZJ9iLGNg3_agYxX2Q"
    },
    {
        "id": 252,
        "name": "NEG\u30ca\u30b9 ch.",
        "url": "https://www.youtube.com/channel/UC1npLXA1I2Kp8R5PjA2SZkQ"
    },
    {
        "id": 253,
        "name": "\u30bf\u30d4\u30bf\u30d4",
        "url": "https://www.youtube.com/channel/UCrqqJlrDA0_ErvDRIrjRaUA"
    },
    {
        "id": 254,
        "name": "Kains\u6539",
        "url": "https://www.youtube.com/channel/UCtLGBCWvTLQO0ITmD_axQaQ"
    },
    {
        "id": 255,
        "name": "Kappashiro",
        "url": "https://www.youtube.com/channel/UCmGMR_bG6xx9AAiPbxTr_RQ"
    },
    {
        "id": 256,
        "name": "FalKKonE",
        "url": "https://www.youtube.com/channel/UChAHYPBvyaQIpjyTSdQhOMQ"
    },
    {
        "id": 257,
        "name": "pluffaduff",
        "url": "https://www.youtube.com/channel/UCF080GGiPwEoZBVSvXDMg5A"
    },
    {
        "id": 258,
        "name": "XboxGamerK",
        "url": "https://www.youtube.com/channel/UCX_ldjL6rj7T9mMwehy7hQQ"
    },
    {
        "id": 259,
        "name": "Signicial",
        "url": "https://www.youtube.com/channel/UCc4Z49xNgJHkYvClnnbYLhg"
    },
    {
        "id": 260,
        "name": "The Musical Ghost",
        "url": "https://www.youtube.com/channel/UCqeHbI0rfexnHhhEgrg8Exg"
    },
    {
        "id": 261,
        "name": "syafsanai",
        "url": "https://www.youtube.com/channel/UCoBPo9JLnluzKxyjGMaa8JQ"
    },
    {
        "id": 262,
        "name": "8 Bit Universe",
        "url": "https://www.youtube.com/channel/UCn4HDI02U4f3VEsghRX7dRw"
    },
    {
        "id": 263,
        "name": "Yami Sweet",
        "url": "https://www.youtube.com/channel/UCN4duoOJQ6K1KG-BJjp1pUQ"
    },
    {
        "id": 264,
        "name": "Ember McSquiddies",
        "url": "https://www.youtube.com/channel/UCF3qTZUbfLLRTcIXw6T6ylA"
    },
    {
        "id": 265,
        "name": "ReicheruCharin",
        "url": "https://www.youtube.com/channel/UCM4OHt0PjKzFWeFjG1FDOIg"
    },
    {
        "id": 266,
        "name": "RaggedyCargo652",
        "url": "https://www.youtube.com/channel/UCe2TPVRZGFDY3QzT44Iam4w"
    },
    {
        "id": 267,
        "name": "hoghedge",
        "url": "https://www.youtube.com/channel/UCM9w52R3qVOZkYw6dCCDfLQ"
    },
    {
        "id": 268,
        "name": "\u685c",
        "url": "https://www.youtube.com/channel/UCiWb00S8AsPFdfvDZD4yWmA"
    },
    {
        "id": 269,
        "name": "Lady Lataya",
        "url": "https://www.youtube.com/channel/UC7M_9aWSWHyLMDs0K15wi9g"
    },
    {
        "id": 270,
        "name": "PianoDeuss",
        "url": "https://www.youtube.com/channel/UCgMvjHTX7jn4iIKNHjIUJiw"
    },
    {
        "id": 271,
        "name": "The Noteblock Lizard",
        "url": "https://www.youtube.com/channel/UCoBRyTKbhTthwCVjMzoCcqA"
    },
    {
        "id": 272,
        "name": "Carlos S. M.",
        "url": "https://www.youtube.com/channel/UCgVv5sa3hZluRZ8AQdq5tEg"
    },
    {
        "id": 273,
        "name": "Eszty",
        "url": "https://www.youtube.com/channel/UCqlMKajKsErfZ-JX2Go-7bQ"
    },
    {
        "id": 274,
        "name": "Tony 24 2",
        "url": "https://www.youtube.com/channel/UCtbdj6S3oWBQdzKS-vcdoGg"
    },
    {
        "id": 275,
        "name": "David Erick Ramos - Ocarina",
        "url": "https://www.youtube.com/channel/UC-69ubRH9FiX2f-8LVY6C5Q"
    },
    {
        "id": 276,
        "name": "Demoscene TV",
        "url": "https://www.youtube.com/channel/UCdaWE88_VrLbXuQrq3Uudvg"
    },
    {
        "id": 277,
        "name": "Sully Orchestration",
        "url": "https://www.youtube.com/channel/UCmoIM2c1E_5dI7-ZDnFXJkQ"
    },
    {
        "id": 278,
        "name": "Kira \u2606 Kira",
        "url": "https://www.youtube.com/channel/UClTf9_COnyHtvzoc85bckVw"
    },
    {
        "id": 279,
        "name": "DS Verse Brett 2",
        "url": "https://www.youtube.com/channel/UCtKyUgdDujUcEEznlMmn0og"
    },
    {
        "id": 280,
        "name": "MEME GENERATOR",
        "url": "https://www.youtube.com/channel/UCsmnJyH6W998aOneyD1fimw"
    },
    {
        "id": 281,
        "name": "Chill Beatz",
        "url": "https://www.youtube.com/channel/UCTI2V0lPOLf9kMRQvEhsAyw"
    },
    {
        "id": 282,
        "name": "Flippy",
        "url": "https://www.youtube.com/channel/UCMIGpjyL6H__IFp7emWErlw"
    },
    {
        "id": 283,
        "name": "Allspice",
        "url": "https://www.youtube.com/channel/UCpBYDbPUU6QQ7gtdC-k3_zw"
    },
    {
        "id": 284,
        "name": "DarkGio-P",
        "url": "https://www.youtube.com/channel/UCmZcxSP36QJUwIbvSvHdwfA"
    },
    {
        "id": 285,
        "name": "UwO",
        "url": "https://www.youtube.com/channel/UCXZYa4WgheTNT0rcAw0_SJQ"
    },
    {
        "id": 286,
        "name": "EpreTroll II",
        "url": "https://www.youtube.com/channel/UCvNnWWB3S1Sw3FcC3sDSGeQ"
    },
    {
        "id": 287,
        "name": "Chrisu",
        "url": "https://www.youtube.com/channel/UC_D9wrmnZR4bqS8RmmqELQg"
    },
    {
        "id": 288,
        "name": "Valentine",
        "url": "https://www.youtube.com/channel/UCOziNnfVG9ssHyu0Vu0OjWw"
    },
    {
        "id": 289,
        "name": "Artemisblue",
        "url": "https://www.youtube.com/channel/UCGNFaLYWrCOoyMOzcQ5GIHA"
    },
    {
        "id": 290,
        "name": "SuperNepNep64",
        "url": "https://www.youtube.com/channel/UCgJFI6UNQd4nqWF7VSpfhdQ"
    },
    {
        "id": 291,
        "name": "TheKawaiiHurts",
        "url": "https://www.youtube.com/channel/UC2orhaXZTLktBMLZ6kO9aDg"
    },
    {
        "id": 292,
        "name": "RetroSpecter",
        "url": "https://www.youtube.com/channel/UC8H0nNZJfP4zYpuvdl_4AeA"
    },
    {
        "id": 293,
        "name": "Dar\u00edo._.",
        "url": "https://www.youtube.com/channel/UCCOHwLRaIGr4-_MT0shHfKA"
    },
    {
        "id": 294,
        "name": "\u041c\u0430\u0439\u043d\u0438",
        "url": "https://www.youtube.com/channel/UC4HCh2xl_d5MNNbcPe6hrfg"
    },
    {
        "id": 295,
        "name": "JX",
        "url": "https://www.youtube.com/channel/UC0Y1GVJbtfNp7f-AUrWEtWg"
    },
    {
        "id": 296,
        "name": "Kaischiro",
        "url": "https://www.youtube.com/channel/UCNI8JtB4Y7lU_fpMJ3vtP-w"
    },
    {
        "id": 297,
        "name": "2230400180252469452",
        "url": "https://www.youtube.com/channel/UCxP61jJezue7vhZoUm4Gi6A"
    },
    {
        "id": 298,
        "name": "haruchii25",
        "url": "https://www.youtube.com/channel/UCrWWhEWUUAaR8EhGT_IKPDA"
    },
    {
        "id": 299,
        "name": "SilverWing1412",
        "url": "https://www.youtube.com/channel/UCiLcdHNIVyhJClZccn2oMng"
    },
    {
        "id": 300,
        "name": "\u042d\u0422\u041e \u041d\u0415 \u041b\u0415\u0425\u0410",
        "url": "https://www.youtube.com/channel/UC5_j4qIvCdUwsPRI0hur6Zw"
    },
    {
        "id": 301,
        "name": "MyReminiscence: Aoryn",
        "url": "https://www.youtube.com/channel/UCh56vOHF2cYnxQy0idLYmAw"
    },
    {
        "id": 302,
        "name": "The8BitDrummer",
        "url": "https://www.youtube.com/channel/UCEHXNknwbsRu73QsakWIdzQ"
    },
    {
        "id": 303,
        "name": "\u30d5\u30e9\u30f3\u30c1\u30e3\u30f3\u30cd\u30eb FlanChannel",
        "url": "https://www.youtube.com/channel/UCGN2qtGRNgplc5Wb7o5TWeQ"
    },
    {
        "id": 304,
        "name": "ForeverDreamExcape",
        "url": "https://www.youtube.com/channel/UCqTQTzNDN-yhyIviFL-CmTw"
    },
    {
        "id": 305,
        "name": "Jack Thatcher",
        "url": "https://www.youtube.com/channel/UC9GMQ77cbm2qHOV4_7uwWKA"
    },
    {
        "id": 306,
        "name": "Raider Reid",
        "url": "https://www.youtube.com/channel/UCSEwVdbt3hHsH3BL83WI-OA"
    },
    {
        "id": 307,
        "name": "Alex Snowden",
        "url": "https://www.youtube.com/channel/UCEBgY94nOwa7eAwxnqmgO0Q"
    },
    {
        "id": 308,
        "name": "\u7483\u7d05",
        "url": "https://www.youtube.com/channel/UC12mhuWNxrKqfXp9gtuc9AQ"
    },
    {
        "id": 309,
        "name": "HiroSacredFire",
        "url": "https://www.youtube.com/channel/UCyg_pxcsgUhgAR4frGbehng"
    },
    {
        "id": 310,
        "name": "Promptus",
        "url": "https://www.youtube.com/channel/UC7vK7t20xN1fun1Ih0tMc6w"
    },
    {
        "id": 311,
        "name": "Neku / HorrorShop",
        "url": "https://www.youtube.com/channel/UCia5v_hmGsainz6FJCxQNfA"
    },
    {
        "id": 312,
        "name": "imfallinfree",
        "url": "https://www.youtube.com/channel/UCeLr5CxYKDXvTvy2fbn_Jbg"
    },
    {
        "id": 313,
        "name": "gabocarina96",
        "url": "https://www.youtube.com/channel/UCdHvR6GpB1UDDt77_bwfFKg"
    },
    {
        "id": 314,
        "name": "BG Ollie",
        "url": "https://www.youtube.com/channel/UC5-umfrfqPvDvWCYHJGYtpA"
    },
    {
        "id": 315,
        "name": "Flandre-SDM",
        "url": "https://www.youtube.com/channel/UCdRJbYliYoNiwko4xTmXByg"
    },
    {
        "id": 316,
        "name": "NyxTheShield OFFICIAL",
        "url": "https://www.youtube.com/channel/UC9QBo6agq3a34UsiYfMtKGA"
    },
    {
        "id": 317,
        "name": "\ubbf8\ub77c\uc774 Mirai",
        "url": "https://www.youtube.com/channel/UC2nRwWXobuvguu92EZMY1YA"
    },
    {
        "id": 318,
        "name": "Stormheart Official",
        "url": "https://www.youtube.com/channel/UCm64x7jvV4XR3Ssw7kicfjQ"
    },
    {
        "id": 319,
        "name": "iHasCupquake",
        "url": "https://www.youtube.com/channel/UCqg2eLFNUu3QN3dttNeOWkw"
    },
    {
        "id": 320,
        "name": "AmazingArtistYellow",
        "url": "https://www.youtube.com/channel/UC_pRk73aPnVcPuFgytK4zDw"
    },
    {
        "id": 321,
        "name": "\u27c6elena\u262a",
        "url": "https://www.youtube.com/channel/UCxloGm1x2ZabKyQVcXoUvRw"
    },
    {
        "id": 322,
        "name": "Primpy",
        "url": "https://www.youtube.com/channel/UCzLcrXWe1_7Kr1Dcv3WmK6g"
    },
    {
        "id": 323,
        "name": "Ricizus",
        "url": "https://www.youtube.com/channel/UC5C2V52NDMeK7owFDDeeKdA"
    },
    {
        "id": 324,
        "name": "nico nico",
        "url": "https://www.youtube.com/channel/UC-KYsIp32t6xXX1d1XvmD7g"
    },
    {
        "id": 325,
        "name": "Gacha Eyad Life",
        "url": "https://www.youtube.com/channel/UCRNFPnRCEZBd6QNiSNPNJvA"
    },
    {
        "id": 326,
        "name": "Zedrin",
        "url": "https://www.youtube.com/channel/UCKbbOCogtCId3zHCiUIm5Bg"
    },
    {
        "id": 327,
        "name": "Diremagic",
        "url": "https://www.youtube.com/channel/UCPJvirSmDTnUCLUN-ZfEO0A"
    },
    {
        "id": 328,
        "name": "Hyuman",
        "url": "https://www.youtube.com/channel/UClrASeJSkOZIlsPkyge0gMQ"
    },
    {
        "id": 329,
        "name": "makeUmove +",
        "url": "https://www.youtube.com/channel/UCXp_FenmzsUF780AXHkyvDQ"
    },
    {
        "id": 330,
        "name": "fartbottler99",
        "url": "https://www.youtube.com/channel/UC3uarBnJEpUDFeUXZE17dMQ"
    },
    {
        "id": 331,
        "name": "Round Wave Crusher",
        "url": "https://www.youtube.com/channel/UCVmQh0heVWPcpbrkgCN7Ohw"
    },
    {
        "id": 332,
        "name": "Nico Nico",
        "url": "https://www.youtube.com/channel/UCSsl6TgE_5L8jCZ19XxDNew"
    },
    {
        "id": 333,
        "name": "Pouzdana",
        "url": "https://www.youtube.com/channel/UCqRJBfb1239sA-RI7NLgItQ"
    },
    {
        "id": 334,
        "name": "Spectre",
        "url": "https://www.youtube.com/channel/UC81uZDDMnqYL886XWHHJPcQ"
    },
    {
        "id": 335,
        "name": "Miekuah Productions",
        "url": "https://www.youtube.com/channel/UCEpOqVjxbyT4fiNdIhkdIPg"
    },
    {
        "id": 336,
        "name": "Tuturu",
        "url": "https://www.youtube.com/channel/UC2fNCAW56fkS0m1AvNGRprw"
    },
    {
        "id": 337,
        "name": "Toble_Miner",
        "url": "https://www.youtube.com/channel/UCoSiQDL4C7QhnZBBXjO8zVw"
    },
    {
        "id": 338,
        "name": "BGH Music",
        "url": "https://www.youtube.com/channel/UC8ZcDHb1WKZnzmDCUoT8IVA"
    },
    {
        "id": 339,
        "name": "TheSinnohman",
        "url": "https://www.youtube.com/channel/UCZX8oIl2TTEk7zvfiGY8bLQ"
    },
    {
        "id": 340,
        "name": "\u3116TigroX\u3116",
        "url": "https://www.youtube.com/channel/UC4D9I8LXu9UtSEDaG8mw7Iw"
    },
    {
        "id": 341,
        "name": "HonshouReimu",
        "url": "https://www.youtube.com/channel/UCEvG4bZZqLKLty-IAUHYhzw"
    },
    {
        "id": 342,
        "name": "biribiribitch",
        "url": "https://www.youtube.com/channel/UCoIbtUGw97XmrNTw-Xbcrkg"
    },
    {
        "id": 343,
        "name": "Guffy",
        "url": "https://www.youtube.com/channel/UCN4VhyLyuuaZhAmaYIGhbIQ"
    },
    {
        "id": 344,
        "name": "balloon303",
        "url": "https://www.youtube.com/channel/UCQajZDsMZU2XNmycJpP2-OA"
    },
    {
        "id": 345,
        "name": "Luis Acurio",
        "url": "https://www.youtube.com/channel/UCheYiXOo7ESOapQSpEa0EuA"
    },
    {
        "id": 346,
        "name": "Antti Pylsy",
        "url": "https://www.youtube.com/channel/UC4OfBmRdJOtGhnqGng264bw"
    },
    {
        "id": 347,
        "name": "Onjapi",
        "url": "https://www.youtube.com/channel/UCKlefd9hUUx5nc31Gn9l7aA"
    },
    {
        "id": 348,
        "name": "Studio Yuraki",
        "url": "https://www.youtube.com/channel/UCMTPj3w6L0hol6KHu9DHzQA"
    },
    {
        "id": 349,
        "name": "schkyder",
        "url": "https://www.youtube.com/channel/UC6tn7_ydQZ6bRM2OEGRLN8w"
    },
    {
        "id": 350,
        "name": "A channel named Channel",
        "url": "https://www.youtube.com/channel/UCBegjDa8OoC4TldI9n4akAg"
    },
    {
        "id": 351,
        "name": "Yukiko",
        "url": "https://www.youtube.com/channel/UCKSIZmKOOewjkbCjOz70vOQ"
    },
    {
        "id": 352,
        "name": "Null and Void",
        "url": "https://www.youtube.com/channel/UCMziA07GERYOvZxhQfdPudg"
    },
    {
        "id": 353,
        "name": "Avery Glendale",
        "url": "https://www.youtube.com/channel/UC3jTjVxaHZArgsW73kdvWpg"
    },
    {
        "id": 354,
        "name": "I don't deserve subs",
        "url": "https://www.youtube.com/channel/UCaYzVb3D22xJ_RoKS8fUrKA"
    },
    {
        "id": 355,
        "name": "Millenashea Caheret",
        "url": "https://www.youtube.com/channel/UCR14rS5qwtogPMw5-T-vx5g"
    },
    {
        "id": 356,
        "name": "\u862d/ RangChang",
        "url": "https://www.youtube.com/channel/UCPaFUxVsF0DjGzHuo-ig3ig"
    },
    {
        "id": 357,
        "name": "epsxe160",
        "url": "https://www.youtube.com/channel/UC7uHAfbQ_ZD3wVJOM-clC9A"
    },
    {
        "id": 358,
        "name": "Remilia Scarlet",
        "url": "https://www.youtube.com/channel/UCPZPXl1bkmh0o-0J_QYwYaA"
    },
    {
        "id": 359,
        "name": "haostin",
        "url": "https://www.youtube.com/channel/UCqFNG6pYi_0o0NYdd9kW3yg"
    },
    {
        "id": 360,
        "name": "ivb77810",
        "url": "https://www.youtube.com/channel/UCdEm7J83REoGRcKJofTblZg"
    },
    {
        "id": 361,
        "name": "LinkSub poop on you",
        "url": "https://www.youtube.com/channel/UC0VCIPWiaqau0xNWPyFrtTg"
    },
    {
        "id": 362,
        "name": "zanacys",
        "url": "https://www.youtube.com/channel/UCqWBLLzVX8PAOfEPYlOS40g"
    },
    {
        "id": 363,
        "name": "Kees van Oss",
        "url": "https://www.youtube.com/channel/UCaMT_RO0zxsAWyASlo3iuVA"
    },
    {
        "id": 364,
        "name": "Ivory Tower Collections",
        "url": "https://www.youtube.com/channel/UC_HoOM485ibil-cmoG5qGTw"
    },
    {
        "id": 365,
        "name": "Minjae Song",
        "url": "https://www.youtube.com/channel/UC2HKwhAxrjDR0aPlutIWKVQ"
    },
    {
        "id": 366,
        "name": "ZX Pentagon 128k",
        "url": "https://www.youtube.com/channel/UC6WtMW2NwuRB6Uyff6ADPJg"
    },
    {
        "id": 367,
        "name": "Devilmarkus",
        "url": "https://www.youtube.com/channel/UCFuHnjrPnWn2POn-r50F-zQ"
    },
    {
        "id": 368,
        "name": "TrekkiesUnite",
        "url": "https://www.youtube.com/channel/UCNTkW1rSveeRAalEgIOsBmA"
    },
    {
        "id": 369,
        "name": "\u30e1KawaiiYanderlee\u30e1",
        "url": "https://www.youtube.com/channel/UCUX4RhP9Xhx1x-_7rDjS0zg"
    },
    {
        "id": 370,
        "name": "Pony0xFF _",
        "url": "https://www.youtube.com/channel/UCZ__byDDq4ccjTs4J2pTSTQ"
    },
    {
        "id": 371,
        "name": "8301joshua",
        "url": "https://www.youtube.com/channel/UCQJr2-j5EkBBZh5R2oOzYhA"
    },
    {
        "id": 372,
        "name": "RayofHope3579",
        "url": "https://www.youtube.com/channel/UCgauVLe5Wry4Ib8Ubmgjyhw"
    },
    {
        "id": 373,
        "name": "GeeFee",
        "url": "https://www.youtube.com/channel/UCb9rKBRPEJXFdTvHSnlJrkg"
    },
    {
        "id": 374,
        "name": "gjokgjm",
        "url": "https://www.youtube.com/channel/UCm1fAEiS5pFa7IiGzzz0DUw"
    },
    {
        "id": 375,
        "name": "hotaht",
        "url": "https://www.youtube.com/channel/UC6K8AMT8Vi9wzwLYA46GyiA"
    },
    {
        "id": 376,
        "name": "TheAKIRA2",
        "url": "https://www.youtube.com/channel/UCMHdQoqB3dM2NKGQ-d2GQHg"
    },
    {
        "id": 377,
        "name": "HIKAKIN",
        "url": "https://www.youtube.com/channel/UClLV6D8S4CrVJL64-aQvwTw"
    },
    {
        "id": 378,
        "name": "khw8189",
        "url": "https://www.youtube.com/channel/UCwcZsjUaCUiB4IaTk5za_xg"
    },
    {
        "id": 379,
        "name": "da1l6",
        "url": "https://www.youtube.com/channel/UCJLfbEsjI0QkbJy_2T-8ODg"
    },
    {
        "id": 380,
        "name": "1colonelsanders",
        "url": "https://www.youtube.com/channel/UCd5BM0BNfhJlPkdl41aMRRg"
    },
    {
        "id": 381,
        "name": "Phil Andrews",
        "url": "https://www.youtube.com/channel/UCAzD1cvbSJJY2FGEzS9wY3A"
    },
    {
        "id": 382,
        "name": "John Keen",
        "url": "https://www.youtube.com/channel/UCWiF29fgltV6LOgijgLMbdw"
    },
    {
        "id": 383,
        "name": "NAB622",
        "url": "https://www.youtube.com/channel/UCXigCXLVTPbEpoHDn086JnQ"
    },
    {
        "id": 384,
        "name": "Cloudschatze",
        "url": "https://www.youtube.com/channel/UCbAMtlmtT7xVraTETqiNCDw"
    },
    {
        "id": 385,
        "name": "x0u",
        "url": "https://www.youtube.com/channel/UCXR9AVNs9OdhcFOpE5FLLLw"
    },
    {
        "id": 386,
        "name": "Zue Driflagm",
        "url": "https://www.youtube.com/channel/UC-hYVbl-WmUNx2teYDH5DiQ"
    },
    {
        "id": 387,
        "name": "Suika Ibuki",
        "url": "https://www.youtube.com/channel/UC5kGpoOgCk-hemGLHujMvKA"
    },
    {
        "id": 388,
        "name": "NiceMarkMC",
        "url": "https://www.youtube.com/channel/UCC7pOOam0aBBqqjiE0H7skA"
    },
    {
        "id": 389,
        "name": "Niko0902",
        "url": "https://www.youtube.com/channel/UCTQoOKPRTn_Grsvbs6YqO0A"
    },
    {
        "id": 390,
        "name": "Kira Oshiro",
        "url": "https://www.youtube.com/channel/UCRCTSVYPnsSu0RmA6Nf1cHA"
    },
    {
        "id": 391,
        "name": "Panduh Cx",
        "url": "https://www.youtube.com/channel/UCGK2GIxhc0wXF0lYvbJNufw"
    },
    {
        "id": 392,
        "name": "Linux Lounge",
        "url": "https://www.youtube.com/channel/UCeKE6c-kQXm4x_sJQxZPvlg"
    },
    {
        "id": 393,
        "name": "Shawn Hsueh",
        "url": "https://www.youtube.com/channel/UC-zhwfHJUh9LeGku27PMMVw"
    },
    {
        "id": 394,
        "name": "dethi",
        "url": "https://www.youtube.com/channel/UC3fPkH7Qy8-yhNbFIJ4WpCw"
    }
];

const itemsData = [
    {
        "title": "[Touhou] Bad Apple - 8Bit NES/Famicom Rendition via Powerpak",
        "description": "UPDATED ROM LINK: http://www.mediafire.com/file/gc964wsodbrbtdu/bad_apple_2_5_2015-12-20.zip/file\n\nShamelessly stolen from Applesorcez Channel - http://www.youtube.com/watch?v=AZehH55i_wg\n\nReproducing it here as I thought I'd have a crack at a nice sound mix, I like what's been achieved here SO much. It deserves to be more widely viewed! So, credit to Applesorce, and Kara for the song, and Num_Kadoma for what I assume is the Video programming.",
        "videoUrl": "https://www.youtube.com/watch?v=cuMkI6cDKMs",
        "previewImgUrl": "https://img.youtube.com/vi/cuMkI6cDKMs/hqdefault.jpg",
        "authorId": 1,
        "id": 1
    },
    {
        "title": "Play Bad Apple On Apple II",
        "description": "From bilibili http://www.bilibili.com/video/av1752770/  Up\u4e3b(author):\u539f\u5b50\u6c27 \n\u53e4\u8463\u82f9\u679c\u64ad\u653e\u70c2\u82f9\u679c-Bad Apple II~\nBGM: Bad Apple",
        "videoUrl": "https://www.youtube.com/watch?v=X8osEgYzPNo",
        "previewImgUrl": "https://img.youtube.com/vi/X8osEgYzPNo/hqdefault.jpg",
        "authorId": 2,
        "id": 2
    },
    {
        "title": "C1-65A - Bad Apple (HD)",
        "description": "\u0418\u0441\u0445\u043e\u0434\u043d\u043e\u0435 \u0432\u0438\u0434\u0435\u043e nicovideo.jp/watch/sm8628149  Touhou - Bad Apple!!\n---\n\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e \u0447\u0430\u0441\u0442\u044f\u043c \u043f\u043e\u044f\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u043d\u0430 habrahabr.ru\n\u0427\u0430\u0441\u0442\u044c 1. habrahabr.ru/post/176527\n\u0427\u0430\u0441\u0442\u044c 2. habrahabr.ru/post/176539\n---\n\nThanks to:  z0rc, Kaens, rm, Ran :3\nC1-65A russian oscilloscope , \nself-made DAC via USB2.0.\nILDA out, 30fps, 60kpps",
        "videoUrl": "https://www.youtube.com/watch?v=7pzvEouWino",
        "previewImgUrl": "https://img.youtube.com/vi/7pzvEouWino/hqdefault.jpg",
        "authorId": 3,
        "id": 3
    },
    {
        "title": "Bad apple",
        "description": "http://www.bilibili.com/video/av2483576/",
        "videoUrl": "https://www.youtube.com/watch?v=ko0z3SfXpm8",
        "previewImgUrl": "https://img.youtube.com/vi/ko0z3SfXpm8/hqdefault.jpg",
        "authorId": 4,
        "id": 4
    },
    {
        "title": "Bad Apple - Vectrex version",
        "description": "Bad Apple (the Touhou shadowplay clip) digitized, vectorized, compressed, linearized, resampled, rescaled and playing on a cartridge of my own design. Article on how I did it coming up on Spritesmods.com",
        "videoUrl": "https://www.youtube.com/watch?v=_aFXvoTnsBU",
        "previewImgUrl": "https://img.youtube.com/vi/_aFXvoTnsBU/hqdefault.jpg",
        "authorId": 5,
        "id": 5
    },
    {
        "title": "Bad Apple - Atari 2600",
        "description": "This is the Bad Apple video (https://www.youtube.com/watch?v=VzEUeWnV73U) played back on an emulated Atari 2600.\n\nThe ROM can be downloaded here: http://atariage.com/forums/topic/226949-bad-apple-full-motion-video-on-the-2600/?p=3119932\n\nSo far I have only found this to work on Stella, but to get it to work, you must right click on the file and set launch options to have it use a 3E cartridge, or it will not work. If you want to try this on real hardware, your flash cart must support 3E bankswitching with 480K ROM and 32K RAM.",
        "videoUrl": "https://www.youtube.com/watch?v=Ko9ZA50X71s",
        "previewImgUrl": "https://img.youtube.com/vi/Ko9ZA50X71s/hqdefault.jpg",
        "authorId": 6,
        "id": 6
    },
    {
        "title": "Windows 3.1 Plays Bad Apple!",
        "description": "Finally i get to this stage after 10 takes (Stupid Netbook) After setting it to 85% it worked perfectly! \r\n\r\nSpecs:\r\nWindows 3.1 In DosBox\r\nYamaha OPL 2",
        "videoUrl": "https://www.youtube.com/watch?v=uJp3ro4rSvM",
        "previewImgUrl": "https://img.youtube.com/vi/uJp3ro4rSvM/hqdefault.jpg",
        "authorId": 7,
        "id": 7
    },
    {
        "title": "\u3010Touhou\u3011Bad Apple!! Gameboy 8-bit ver.\u3010Shadow Art\u3011\u3010\u6771\u65b9\u3011",
        "description": "Bad Apple!! Game Boy 8bit ver \u3010\u6771\u65b9\u3011\nUploaded from Nico Nico Douga:\nhttp://www.nicovideo.jp/watch/sm8954478\n\n\nAlt tags: Touhou Bad Apple!! Shadow Art Animation 8bit \u6771\u65b9 Chiptune Lotus Land Story Stage 3 Theme Elly nomico",
        "videoUrl": "https://www.youtube.com/watch?v=gy3NCr4rX-Y",
        "previewImgUrl": "https://img.youtube.com/vi/gy3NCr4rX-Y/hqdefault.jpg",
        "authorId": 8,
        "id": 8
    },
    {
        "title": "[HD] Bad Windows XP!! (with video!)",
        "description": "No Shadow Art version\nhttps://www.youtube.com/watch?v=MXWRNNKAss0\n\n(Minor update - May 8th, 2016)\nJust to make it clear, I did not create the audio. I only made the video part. \nIf you want to use the audio, do not credit me, but rather the original source from NicoVideo. \nIf you want to use the video, credit me as well.\n\nArtwork: http://www.pixiv.net/member_illust.php?mode=medium&illust_id=48389837\nAudio: http://www.nicovideo.jp/watch/sm11141492\n\nVideo made with Sony Vegas Pro 13\n\nMusic in this video:\nDark Horse (feat. Juicy J) by Katy Perry\nBad Apple - BAD Windows XP - http://www.nicovideo.jp/watch/sm11141492\nSouon!! Now, Thank You!! by Silver Forest",
        "videoUrl": "https://www.youtube.com/watch?v=rcKXCyj-o1A",
        "previewImgUrl": "https://img.youtube.com/vi/rcKXCyj-o1A/hqdefault.jpg",
        "authorId": 9,
        "id": 9
    },
    {
        "title": "[HD] Ubuntu Bad Apple!! (with video!)",
        "description": "Just like the title says!\n\nShoutout to LLg Gaming! Thanks for your request.\nhttps://www.youtube.com/channel/UCcwIUT2s2zjmaMFO7_TFDIw\n\nMusic in this video:\nDark Horse (CAKED UP) by Oscar Wylde\nBad Apple by Alstroemeria Records\nSouon!! Now, Thank You!! by Silver Forest",
        "videoUrl": "https://www.youtube.com/watch?v=vSS0DKecwug",
        "previewImgUrl": "https://img.youtube.com/vi/vSS0DKecwug/hqdefault.jpg",
        "authorId": 9,
        "id": 10
    },
    {
        "title": "Bad apple on a Vintage B&W portable TV",
        "description": "",
        "videoUrl": "https://www.youtube.com/watch?v=w71xvkRT4rs",
        "previewImgUrl": "https://img.youtube.com/vi/w71xvkRT4rs/hqdefault.jpg",
        "authorId": 10,
        "id": 11
    },
    {
        "title": "\u3010Lasershow\u3011 Touhou ~ Bad Apple!!\u3000(Stylized Laser Art) (HD)",
        "description": "Just another lasershow..\nUsing my own code to project vector graphics.\nPlease look at the date of post video and think of it.\n\n30 okt 2009 19:17\n\n\nThere's also a Good orange too!\nhttp://www.youtube.com/watch?v=89hJaGY-qJ8\n\n \n\nWatch also on nicovideo, ~ sm8853380\nThe user edit my video for reason.\nAnyway thanks for crediting me ^^. + the respones at nico.\n\noh I feel grammerless",
        "videoUrl": "https://www.youtube.com/watch?v=nKavqWoifWA",
        "previewImgUrl": "https://img.youtube.com/vi/nKavqWoifWA/hqdefault.jpg",
        "authorId": 11,
        "id": 12
    },
    {
        "title": "Bad Apple!! - Stop Motion PV",
        "description": "sm9519847 - \u30b3\u30de\u64ae\u308a\u5b9f\u9a13\u30a2\u30cb\u30e1\u300c6566\uff0f6566\u300d\u3010Bad Apple!!\u3000\uff30\uff36\u3010\u5f71\u7d75\u3011\u30a2\u30ec\u30f3\u30b8\u3011.mp4\r\nhttp://www.nicovideo.jp/watch/sm9519847\r\n\r\n**EDIT2: Ten months later and this video reached 1 million views. Thanks a lot everyone who spent time watching \"Bad Apple!!\" Extra special shoutout to those who felt inspired after watching this video. I can't take any credit for its creation but if it help bring a smile to y'all then I'm pleased.\r\n\r\n*EDIT: Less than a week, the video has nearly 200k views and featured on Cirno \u2468 News Network. To show my thanks, I added annotations translating the song with a few comments during the interlude and ending. I prefer to watch it w/o annotations first to appreciate the video first. Then watch it the second time reading the subs if you are interested in the song.\r\n\r\nIt's been a while since I last uploaded something from Nico Douga and this one caught my eye. Followers of the Touhou game franchise would recognize the source song and video \"Bad Apple!!\" by nomico as it maintained 7 solid weeks on top of the Nico Nico Douga weekly rankings.\r\n \r\nFor the record, I don't own the video. It was uploaded by Shige-ruuu on Nicovideo.jp. If you have a Nico account, check out his other videos at - mylist/767941",
        "videoUrl": "https://www.youtube.com/watch?v=240Vq6tIxio",
        "previewImgUrl": "https://img.youtube.com/vi/240Vq6tIxio/hqdefault.jpg",
        "authorId": 12,
        "id": 13
    },
    {
        "title": "Touhou 4-Bad Apple (8-bit Remix with NES video Playback)",
        "description": "Hey fellow Youtubers.  It's thepsynergist here again, for a Halloween Special Video.  I made an 8-bit remix of the Bad Apple theme in FL Studio, and played them both over.  I hope you enjoy this.  \n\nThink of this also as my 250 subscriber count video.  :D  Thanks guys, couldn't have done it without you.\n\nDownload link: http://www.mediafire.com/?emxs1brrm3e4w1s\nRom Link: http://www.mediafire.com/?b636587gnuztaz1",
        "videoUrl": "https://www.youtube.com/watch?v=ZMbAEjPPf7w",
        "previewImgUrl": "https://img.youtube.com/vi/ZMbAEjPPf7w/hqdefault.jpg",
        "authorId": 13,
        "id": 14
    },
    {
        "title": "Bad Apple TI-84+ SE - New Arrangement",
        "description": "I improved the audio code and notes are now more in tune. Credits for the music go to Anonymous from /jp/.\n\nSource Code: https://github.com/fb39ca4/badapple-ti84\n\nApp Download: https://github.com/fb39ca4/badapple-ti84/releases\n\nOmnimaga Thread: http://www.omnimaga.org/ti-z80-calculator-projects/bad-apple-se/\n\nAlso check out my Atari 2600 version: https://www.youtube.com/watch?v=Ko9ZA50X71s",
        "videoUrl": "https://www.youtube.com/watch?v=6pAeWf3NPNU",
        "previewImgUrl": "https://img.youtube.com/vi/6pAeWf3NPNU/hqdefault.jpg",
        "authorId": 6,
        "id": 15
    },
    {
        "title": "Bad Apple on a Sansa Clip+",
        "description": "Just playing bad apple on a dichromatic screen!",
        "videoUrl": "https://www.youtube.com/watch?v=P12pXEtr4H8",
        "previewImgUrl": "https://img.youtube.com/vi/P12pXEtr4H8/hqdefault.jpg",
        "authorId": 7,
        "id": 16
    },
    {
        "title": "Bad apple!!_Undertale version",
        "description": "\uc5b8\ub354\ud14c\uc77c\ub85c \ubc30\ub4dc\uc560\ud50c\uc744 \ub9cc\ub4e4\uc5b4\ubcf4\uc558\uc2b5\ub2c8\ub2e4. \uc2a4\ud3ec\uc77c\ub7ec\uc694\uc18c\uac00 \uc0c1\ub2f9\ud788 \ub9ce\uc73c\ubbc0\ub85c \uc8fc\uc758 \ubd80\ud0c1\ub4dc\ub824\uc694.\n+th first image is from this movie\nhttps://youtu.be/R3l4P0sNKS8\ufeff",
        "videoUrl": "https://www.youtube.com/watch?v=OVHSozctpK8",
        "previewImgUrl": "https://img.youtube.com/vi/OVHSozctpK8/hqdefault.jpg",
        "authorId": 14,
        "id": 17
    },
    {
        "title": "[Touhou] Bad Apple!! - Sega Megadrive / Genesis version",
        "description": "This is Touhou Bad Apple!! video running on a Sega Megadrive.\n\nInspired by this video :\nhttp://www.youtube.com/watch?v=lbAxuFgQyHQ\n\nI wanted to make my own version to get it as close as possible from the original.\nI used a custom lossless video codec with adpcm sound.\n\nSpecs:\n- 320x224 resolution at 30 FPS in 2bpp.\n- 4 bit adpcm audio at 13 Khz.\n\nVideo size = 6.5 MB\nAudio size = 1.3 MB\nCode size ~ 100 KB\nTotal rom size ~ 7.9 MB\n\nYou can download 4 MB roms here :\nhttps://www.dropbox.com/s/fg8oymtgjv6o7rt/BadApple_p1.bin?dl=0\nhttps://www.dropbox.com/s/v8dffnxpcgvo93d/BadApple_p2.bin?dl=0\n\n8 MB version available here :\nhttps://www.dropbox.com/s/6fy2y71zfssomxk/BadApple.bin?dl=0\n\nNote that only specials flashcarts (as the Mega Everdrive) or some hacked emulator (as this one : http://umk3.hacking-cult.org/2.11hack.zip ) allows to play the 8 MB version.\n\nHere is a link where you can see some progress about the demo development :\nhttp://www.sega-16.com/forum/showthread.php?19027-Bad-Apple-demo-thread\n\nAs i don't own a Mega Everdrive i used a hacked version of Gens emulator to record this video but it plays almost identically on real hardware (audio timing is perfect on real hardware while is a bit ahead in Gens).\nSorry for the choppy video, i wasn't able to record it at a stable 30 images per second rate...",
        "videoUrl": "https://www.youtube.com/watch?v=2vPe452cegU",
        "previewImgUrl": "https://img.youtube.com/vi/2vPe452cegU/hqdefault.jpg",
        "authorId": 15,
        "id": 18
    },
    {
        "title": "Touhou - Bad Apple on eight floppy drives",
        "description": "Support me on Patreon! - http://www.patreon.com/MrSolidSnake745\n\nAnd thus with this video, ends my spring break. It was a request. It was difficult and I tried my best.\n\n---------------------------------------------------\nLinks to stuff you might care about\n---------------------------------------------------\n\nFAQ - http://bit.ly/XvuYAF\nTwitter - http://bit.ly/189kJ5a\nPlaylist - http://bit.ly/VK9vjx\nMIDI Files - http://bit.ly/TFohWI\nFaceBook page - http://on.fb.me/Rbywq1\nRequest Status - http://bit.ly/UheEML\nDownload Audio - http://bit.ly/UIuc0A",
        "videoUrl": "https://www.youtube.com/watch?v=hkZbAJHeu9w",
        "previewImgUrl": "https://img.youtube.com/vi/hkZbAJHeu9w/hqdefault.jpg",
        "authorId": 16,
        "id": 19
    },
    {
        "title": "Minecraft X Bad apple!! \u6bd4\u8f03\u52d5\u753b\u3010\u30de\u30a4\u30f3\u30af\u30e9\u30d5\u30c8\u30a2\u30cb\u30e1\u3011",
        "description": "1\u5e74\u534a\u304b\u3051\u305f\u529b\u4f5c\u3067\u3059\u3002\n\u3010\u53c2\u8003\u306b\u3055\u305b\u3066\u3044\u305f\u3060\u3044\u305f\u52d5\u753b\u3011\nhttp://www.nicovideo.jp/watch/sm8628149?ref=teiban\n\n\n\u3010\u5358\u4f53\u3011https://www.youtube.com/watch?v=ItnK9ha_ut4\n\n\n\u3010\u4f7f\u7528\u3057\u305f\u97f3\u697d\u306e\u914d\u5e03\u30b5\u30a4\u30c8\u3011\n[\u30d5\u30ea\u30fc\u97f3\u697d\u7d20\u6750 H/MIX GALLERY]\u69d8 http://www.hmix.net/\n[DOVA-SYNDROME]\u69d8 dova-s.jp\n[ On-Jin \uff5e\u97f3\u4eba\uff5e]\u69d8 http://on-jin.com/\n[\u9b54\u738b\u9b42]\u69d8 http://maoudamashii.jokersounds.com/",
        "videoUrl": "https://www.youtube.com/watch?v=341-Tqyh1-Q",
        "previewImgUrl": "https://img.youtube.com/vi/341-Tqyh1-Q/hqdefault.jpg",
        "authorId": 17,
        "id": 20
    },
    {
        "title": "Touhou Bad Apple Full Version CMD EDITION",
        "description": "",
        "videoUrl": "https://www.youtube.com/watch?v=Kxt-9VhMzgs",
        "previewImgUrl": "https://img.youtube.com/vi/Kxt-9VhMzgs/hqdefault.jpg",
        "authorId": 18,
        "id": 21
    },
    {
        "title": "Play the Bad Apple on the x86 DOS TEXT MODE (with Music)",
        "description": "Build Tool : BC++ 3.1\nSound Library : SMIXC for Turbo C.\nPlaying the Bad Apple movie by manipulating the ASCII FONT SET.\n\n*INTERNET ARCHIVE : https://archive.org/details/badapple_20220803",
        "videoUrl": "https://www.youtube.com/watch?v=OJTnhhk-vNU",
        "previewImgUrl": "https://img.youtube.com/vi/OJTnhhk-vNU/hqdefault.jpg",
        "authorId": 19,
        "id": 22
    },
    {
        "title": "Bad Apple, DOS version, VGA 13h (seizure!)",
        "description": "\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u043b \u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b \u044d\u0442\u043e\u0433\u043e \u0437\u0430\u043c\u0435\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0432\u0438\u0434\u0435\u043e, \u0438 \u043f\u043e\u043d\u044f\u043b, \u0447\u0442\u043e \u043d\u0435 \u043c\u043e\u0433\u0443 \u043d\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0438\u0442\u044c \u043a \u044d\u0442\u043e\u043c\u0443 \u0442\u0432\u043e\u0440\u0435\u043d\u0438\u044e \u0440\u0443\u043a\u0443 :)\n\u041f\u043e\u0441\u043b\u0435 Bad Apple \u043d\u0430 \u043e\u0441\u0446\u0438\u043b\u043b\u043e\u0433\u0440\u0430\u0444\u0435, \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442, \u043a\u043e\u043d\u0435\u0447\u043d\u043e, \u043d\u0435 \u0442\u0430\u043a \u043a\u0440\u0443\u0442\u043e, \u043d\u043e \u0432\u0441\u0435-\u0440\u0430\u0432\u043d\u043e, \u043f\u043e \u0441\u0432\u043e\u0435\u043c\u0443 \u0441\u0430\u043c\u043e\u0431\u044b\u0442\u043d\u043e.\n\u041d\u0435 \u0443\u0432\u0435\u0440\u0435\u043d, \u0432\u043f\u0440\u043e\u0447\u0435\u043c, \u0447\u0442\u043e \u0441\u0442\u0430\u043b \u043f\u0435\u0440\u0432\u044b\u043c, \u043a\u0442\u043e \u0437\u0430\u043f\u0438\u043b\u0438\u043b \u044d\u0442\u0443 \u0448\u0442\u0443\u043a\u0443 \u0438 \u0434\u043b\u044f DOS, \u043d\u0443 \u0438 \u043f\u0443\u0441\u0442\u044c)\n\u041c\u043e\u0436\u043d\u043e \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0438 \u0431\u0435\u0437 \u043c\u0443\u0437\u044b\u043a\u0438, \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u043e\u0447\u043d\u043e \u0434\u0430\u0436\u0435 \u043d\u0430 \u0441\u043e\u0432\u0441\u0435\u043c \u0441\u043b\u0430\u0431\u044b\u0445 \u043c\u0430\u0448\u0438\u043d\u0430\u0445, \u0432\u0440\u043e\u0434\u0435 286. \u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0440\u0445\u0438\u0432 \u0441 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u043c \u043f\u043e\u0434 DOS, \u0438, \u043a\u0430\u043a \u043e\u0431\u044b\u0447\u043d\u043e, \u0438\u0441\u0445\u043e\u0434\u043d\u0438\u043a\u0430\u043c\u0438, \u043d\u0438\u0436\u0435.\n\nI just watched original video, and decided that I want to... m-m-m... port it under DOS :)\nOf course, after oscilloscope and SEGA versions, it looks not so amazing, but, anyway, kinda unusual :)\nThere is possibility to watch this thing without music even on a slow machines like 286 :)\nOriginal video looks like this: http://www.youtube.com/watch?v=Hiqn1Ur32AE\nDOS executable link: http://abaduaber.com/my/badapple.rar",
        "videoUrl": "https://www.youtube.com/watch?v=IXOVUiyx1a8",
        "previewImgUrl": "https://img.youtube.com/vi/IXOVUiyx1a8/hqdefault.jpg",
        "authorId": 20,
        "id": 23
    },
    {
        "title": "\u3010 Touhou Lasershow \u3011 Bad 445 Aaaaaaapple (HD)",
        "description": "this, because I was bored, testing a 2nd 445nm laser out.\nvid looks like purple, but its white 7000k's -/+ ~ , 405nm voilet diodes sucks.\n\n\nused:\n\nMMD CUP 5 Bad AApple!! by 6666AAP.\n\nand normally bad apple\n\nthere's colors!",
        "videoUrl": "https://www.youtube.com/watch?v=UkJ_9bBn-Hc",
        "previewImgUrl": "https://img.youtube.com/vi/UkJ_9bBn-Hc/hqdefault.jpg",
        "authorId": 11,
        "id": 24
    },
    {
        "title": "Bad Apple!! in IBM PC/XT",
        "description": "Hardware:\n- IBM 5160 PC/XT with IBM 5151 monochrome display\n- 8088 @ 4.77 MHz\n- Sound Blaster 16\n- ATI Graphics Card\n\nSoftware:\n- 8088flex player by Trixter \nhttp://www.oldskool.org/pc/8088_Corruption/#do\n- tmvenc encoder by Mike Chambers \nhttp://www.vintage-computer.com/vcforum/showthread.php?41532-8088-corruption-encoder-a-new-one",
        "videoUrl": "https://www.youtube.com/watch?v=OT2ufnGe9Cc",
        "previewImgUrl": "https://img.youtube.com/vi/OT2ufnGe9Cc/hqdefault.jpg",
        "authorId": 21,
        "id": 25
    },
    {
        "title": "IBM XT Portable 5155 8088 Domination Bad Apple",
        "description": "Cpu Intel 8088 4,77mhz, 640 Ko Ram, Hard disk controller ide 8bits ADP50 with 200Mo Hard disk, Sound Blaster 2.0.\n3 Screens. Enjoy !!",
        "videoUrl": "https://www.youtube.com/watch?v=E0h8BUUboP0",
        "previewImgUrl": "https://img.youtube.com/vi/E0h8BUUboP0/hqdefault.jpg",
        "authorId": 22,
        "id": 26
    },
    {
        "title": "Bad Apple!! - GBC Rom",
        "description": "Showcasing the Everdrive GB playing Bad Apple!!\n\nWe're going totally old school with AA batteries and a flash light.\nSorry about the glare and stuff, I unfortunately don't have any studio equipement, just a cheesy little camera and a mini torchlight from China, so yeah...\n\nBest experienced on original hardware, the GBA SP does play the rom too, but makes an extremely irritating griching noise just like the emulators. :(\n\nMore information:\nBad Apple Game Boy Color Rom:\nhttps://mega.nz/file/pgJQSLCA#vCt0ISkci7RdjQAt2jB3wH7tadXNyLGThUA8D_W4xfU\nFlash Cart:\nhttp://www.stoneagegamer.com/everdrive-gb-deluxe.html",
        "videoUrl": "https://www.youtube.com/watch?v=IPUmiZshQTw",
        "previewImgUrl": "https://img.youtube.com/vi/IPUmiZshQTw/hqdefault.jpg",
        "authorId": 23,
        "id": 27
    },
    {
        "title": "Bad Apple on CASIO fx-9750GII - re-record",
        "description": "Now with much better quality. You can actually see the pixels!\nThe motion blur is from the response time of the LCD screen, it is not an encoding artifact.\n\nI cheated slightly here by recording the video and audio separately and then combining them in post-production. It was annoying to hold the audio cable and the camera at the same time.",
        "videoUrl": "https://www.youtube.com/watch?v=3RFOd_rdbro",
        "previewImgUrl": "https://img.youtube.com/vi/3RFOd_rdbro/hqdefault.jpg",
        "authorId": 24,
        "id": 28
    },
    {
        "title": "Bad Apple on CASIO fx-9860GII",
        "description": "This is a demonstration of animation on CASIO fx-9860GII graphing calculator.\nOriginal video: http://www.nicovideo.jp/watch/sm8628149\n\nVideo: 96 * 64, 30 fps (Huffman-coding-based compression)\nAudio: PCM, 4 bits, 7200Hz (output via serial port, LPF and cheap AMP)\n\nSource code: https://github.com/ac100v/bad_apple_fx-9860gii",
        "videoUrl": "https://www.youtube.com/watch?v=2s1tFAI96Zo",
        "previewImgUrl": "https://img.youtube.com/vi/2s1tFAI96Zo/hqdefault.jpg",
        "authorId": 25,
        "id": 29
    },
    {
        "title": "Bad Apple on Ti-nspire",
        "description": "Bad Apple on Calculator",
        "videoUrl": "https://www.youtube.com/watch?v=9bTLDe74AZw",
        "previewImgUrl": "https://img.youtube.com/vi/9bTLDe74AZw/hqdefault.jpg",
        "authorId": 26,
        "id": 30
    },
    {
        "title": "Bad Apple Ti-84+ SE",
        "description": "Pretty impressed at how capable the TI-84 is at full motion video, enjoy!",
        "videoUrl": "https://www.youtube.com/watch?v=OCglJmea5u0",
        "previewImgUrl": "https://img.youtube.com/vi/OCglJmea5u0/hqdefault.jpg",
        "authorId": 27,
        "id": 31
    },
    {
        "title": "Bad Apple on Noritake VFD",
        "description": "\"Bad Apple!!\" playing on a vacuum fluorescent display.\nThe display is connected to the PC via the parallel port.\n\nThis is the Pokemon Mini homebrew version, running on an emulator.\nI modified the emulator so the video output is redirected to the VFD display.\nSince the resolution of the Pokemon Mini is 96x64 and that of the VFD is 128x64, the output had to be stretched.\n\nDisplay:\nModel: GU128X64-800A\nResolution: 128x64\nManufacturer: Noritake\nLink: http://www.noritake-elec.com/\n\nPokemon Mini homebrew:\nMain code: JustBurn\nSound code: MrBlinky\nLink: http://www.youtube.com/watch?v=Jr_pVfFXcrk\n\nBad Apple credits:\nVocal: nomico\nArtist: Masayoshi Minoshima\nAlbum Artist: Alstroemeria Records\nLink: http://www.nicovideo.jp/watch/sm8628149",
        "videoUrl": "https://www.youtube.com/watch?v=ks4P9Ufr7IU",
        "previewImgUrl": "https://img.youtube.com/vi/ks4P9Ufr7IU/hqdefault.jpg",
        "authorId": 28,
        "id": 32
    },
    {
        "title": "\u3010Touhou\u3011 Bad Apple!!\u3010Stylized Shadow Art\u3011 running on Pok\u00e9mon-Mini",
        "description": "2MB version, demo: http://www.pokemon-mini.net/games/bad-apple-demo/\nEmulator to play the demo: http://code.google.com/p/pokemini/\n\nThis demo plays raw 4-bits audio through the tiny piezo speaker and renders the frames directly to the LCD (converted from AVI file).\n\nThe video uses a RLE like compression so the whole thing could fit.\n\nVideo and main code by JustBurn\nSound code by MrBlinky",
        "videoUrl": "https://www.youtube.com/watch?v=Jr_pVfFXcrk",
        "previewImgUrl": "https://img.youtube.com/vi/Jr_pVfFXcrk/hqdefault.jpg",
        "authorId": 29,
        "id": 33
    },
    {
        "title": "\u3010English Sub\u3011 NEC PC-6601 Sings \"Bad Apple!!\"",
        "description": "From Nico Nico Douga\r\nOriginal Title \u521d\u97f3\u30df\u30af\u306e10\u500d\u9ad8\u3044\u6a5f\u68b0\u306b\u300cBad Apple!!\u300d\u3092\u66ff\u6b4c\u308f\u305b\u3066\u307f\u305f.\r\n\r\nI = PC-6601\r\nYou = Master\r\n\r\nPC-6001/6601\r\nhttp://en.wikipedia.org/wiki/NEC_PC-6001\r\nhttp://www.old-computers.com/museum/computer.asp?st=1&c=395\r\nOne of selling point of PC-6001 series is a talking function.\r\n\r\n0:32 tape = cassette-tape \r\n\r\n0:46 Nanndo\r\nIts hidden meaning is NAND.\r\n\r\n1:24 Somputer\r\nsomeone like me (Original Bad Apple!!)\r\n \u2193 \r\nsome computer like me\r\n \u2193\r\nsomeputer like me\r\n \u2193\r\nsomputer like me\r\n\r\nIn this case, somputer contain *some*.\r\nSo I didn't give it the article.\r\n\r\n2:18 roku-roku\r\nRoku = 6\r\nRoku-Roku = 66(Double 6, not sixty six)\r\n\r\n3:27\r\n*Black* means *Dark* or *Guilty*",
        "videoUrl": "https://www.youtube.com/watch?v=zPjhRPN_P8g",
        "previewImgUrl": "https://img.youtube.com/vi/zPjhRPN_P8g/hqdefault.jpg",
        "authorId": 30,
        "id": 34
    },
    {
        "title": "Bad Apple on IBM PC/AT (+ boot process)",
        "description": "Well, as somebody shown me http://www.youtube.com/watch?v=E0h8BUUboP0 - then it was nothing that could stop me from trying to reproduce this on my own PC/AT.\n\nAnd finally it was done! Actual Bad Apple starts at 3:26. \n\nAccording to @Microcomputer12 , his system utilized fast and big 200 MB ATA HDD; but my goal was to do it on standard AT hardware without using anything that replace original hardware (the only exception was the replacement of discharged CMOS battery to 2 CR2032 connected in series; but it has no effect on performance, just trick to get back AT's ability to utilize RTC and keep CMOS data).\n\nTo do this, I had to deassemble the video to unique frames and sound and then recompile it using xdc_comp probing different parameters, and then transfer it to AT by network (as I don't have 5.25\" floppy drive on my main PC, but have TCP/IP stack for DOS).\nAbout third or fourth attempt - and now it works!\n\nIn addition I show a boot process of this AT (initializing XMS, network, keyboard/screen localizer (KeyRus), Sound Blaster, and starting Norton Commander). Well, some parts of software are Russian versions.\nAlso a little sup to the imageboard, where this idea was born - at the end.\n\nConfiguration:\n- IBM PC AT model 5170 S/N (?) 7327005\n- 3,5 MB RAM (512K onboard + 3072K on expansion board)\n- Seagate ST4038 31 MB Type 20 MFM HDD (733/5/17 geometry)\n- ATI EGA Wonder video card\n- Amptron Color EGA Monitor\n- Sound Blaster 16 (model CT2910)\n\nAlso were installed, but not used:\n- RTL8019 ISA Network Card\n- US Robotics Sportster 0460 ISA Modem\n- Microsoft InPort Mouse\n- 5,25\" Alps DFC642B01B 1.2MB FDD",
        "videoUrl": "https://www.youtube.com/watch?v=hc9RqxnvqVc",
        "previewImgUrl": "https://img.youtube.com/vi/hc9RqxnvqVc/hqdefault.jpg",
        "authorId": 31,
        "id": 35
    },
    {
        "title": "Windows 3.1 Plays Bad Apple on a real computer",
        "description": "PC specs\nIntel Pentium iii @ 1GHZ\n256 mb ram\n20 GB HD",
        "videoUrl": "https://www.youtube.com/watch?v=kPtiXA_QBIY",
        "previewImgUrl": "https://img.youtube.com/vi/kPtiXA_QBIY/hqdefault.jpg",
        "authorId": 32,
        "id": 36
    },
    {
        "title": "8088 Domination Running on a Toshiba T3200 286 Portable",
        "description": "This is the oldest computer in my collection with a hard drive large enough to hold the entire 8088 Domination demo, so it was the best candidate of mine to run this despite being six years and two CPU generations newer than the IBM 5150 it was originally designed for. Still...it looks quite nifty on that orange plasma screen, doesn't it?\n\nAlso, noisy hard drive is noisy!\n\n8088 Domination (C)2014 Jim Leonard\nhttps://www.youtube.com/channel/UC49y2dyVZ6_V3dJxrFuzinA\n\n\"Tron\" (C)1982 Walt Disney Productions & Lisberger/Kushner Productions\nPartial use of the above-stated copyrighted motion picture recording within this video is allowed under the Fair Use doctrine of United States Copyright Law, Section 107.\n\n\"Tron: Legacy\" (C)2010 Walt Disney Productions & Sean Bailey Productions\nPartial use of the above-stated copyrighted motion picture recording within this video is allowed under the Fair Use doctrine of United States Copyright Law, Section 107.\n\n\"Never Gonna Give You Up\" (C)1987 Rick Astley/RCA Records\nPartial use of the above-stated copyrighted musical recording within this video is allowed under the Fair Use doctrine of United States Copyright Law, Section 107.\n\n\"Bad Apple!!\" (C)1998 ZUN/Touhou Project\nRemix (C)2007 Masayoshi Minoshima\nSilhouette Music Video (C)2009 Anira (\u3042\u306b\u3089)\n\nAny other video or musical clips not listed which are used in this recording are copyrighted to their respective owners, and are used in accordance with the Fair Use doctrine of United States Copyright Law, Section 107.",
        "videoUrl": "https://www.youtube.com/watch?v=6vTPqO2sgrU",
        "previewImgUrl": "https://img.youtube.com/vi/6vTPqO2sgrU/hqdefault.jpg",
        "authorId": 33,
        "id": 37
    },
    {
        "title": "Bad Apple on CNN (Cirno News Network)",
        "description": "I thought they were gonna talk about Touhou but ended up just making me rage.\r\n\r\nCNNNNNNNNNNNNNN!!!\r\n\r\nGot reposted on Nico Nico and currently stands at 340k+ views.  This makes me grin from ear to ear like an idiot.\r\n\r\nhttp://www.nicovideo.jp/watch/sm9552637\r\n\r\nBetter Quality Video Here:\r\nhttp://www.youtube.com/watch?v=EXRsnT2_mVI\r\n\r\nThe reason for my rage was the inaccuracy of the CNN report.  It seems I inadvertently trolled *deleted* because of the unfounded worry that this was the beginning of the end for Touhou's exclusive club status.\r\n\r\nDon't worry, Touhou will always be our incredibly nerdy secret club house.",
        "videoUrl": "https://www.youtube.com/watch?v=OeEIteQmpHE",
        "previewImgUrl": "https://img.youtube.com/vi/OeEIteQmpHE/hqdefault.jpg",
        "authorId": 34,
        "id": 38
    },
    {
        "title": "Bad Apple (Shadow Art) for Amiga",
        "description": "",
        "videoUrl": "https://www.youtube.com/watch?v=XsJnMWX1qa0",
        "previewImgUrl": "https://img.youtube.com/vi/XsJnMWX1qa0/hqdefault.jpg",
        "authorId": 35,
        "id": 39
    },
    {
        "title": "Touhou Bad Apple GBA",
        "description": "Bad Apple for GBA made by Peter \"krom\" Lemon\nAudio is generated by the GBA, but was recorded separately\n\nMore info: http://gbadev.org/demos.php?showinfo=1446",
        "videoUrl": "https://www.youtube.com/watch?v=VJ4IPwLOutk",
        "previewImgUrl": "https://img.youtube.com/vi/VJ4IPwLOutk/hqdefault.jpg",
        "authorId": 36,
        "id": 40
    },
    {
        "title": "Bad Apple Teletext Demo",
        "description": "The Bitshifters Premier of their awesome Teletext Demo at Teletext Block Party 25 February at the Centre of Computing History. All done on a BBC Master home Computer.\n\nhttps://bitshifters.github.io/posts/prods/bs-badapple.html\n\nCome on over to Teletext the Facebook group for more news!\n\nhttps://www.facebook.com/groups/TeletextGroup",
        "videoUrl": "https://www.youtube.com/watch?v=rBfi4gySV-M",
        "previewImgUrl": "https://img.youtube.com/vi/rBfi4gySV-M/hqdefault.jpg",
        "authorId": 37,
        "id": 41
    },
    {
        "title": "Bad apple + 32x16 Dot Display",
        "description": "Thank you for watching!\n\nPython 3.4; Image convert + transmitt\nSTM32F411; pixel - bit coordinates processing\n\nah... atmel avr is too slow\n\n+++ \nDot Display:\nhttp://www.manmullsang.com/shop/item.php?ca_id=9020&it_id=1402920345\n\n... Audio sync ?",
        "videoUrl": "https://www.youtube.com/watch?v=mZ48vgLvMpY",
        "previewImgUrl": "https://img.youtube.com/vi/mZ48vgLvMpY/hqdefault.jpg",
        "authorId": 38,
        "id": 42
    },
    {
        "title": "iPhone Bad Apple",
        "description": "Please \"LIKE\" our facebook page! https://facebook.com/KenYueProduction",
        "videoUrl": "https://www.youtube.com/watch?v=L47n_0PzHJE",
        "previewImgUrl": "https://img.youtube.com/vi/L47n_0PzHJE/hqdefault.jpg",
        "authorId": 39,
        "id": 43
    },
    {
        "title": "[Black MIDI Animation] Bad Apple!! Music Video as a MIDI - vanBasco's Karaoke Player ~ ZUMN Zheng",
        "description": "Yup, the actual Bad Apple music video (Nomico) shown as a MIDI animation in vanBasco's Karaoke Player! Credits to Zumn Zheng of the China Black Music Team for making this awesome MIDI. \n\nZumn's original video + download link to the video: \nhttps://www.youtube.com/watch?v=wQAnBbzddbY\n(I commented the download link because it was literally inside the video so you couldn't go on it without manually typing it out).\n\nSubscribe to Zumn's channel for more MIDI goodies:\nhttps://www.youtube.com/channel/UC8VrK1WePk7KRrr69qcg-Tg\n\nHere is another comparison video with the original Bad Apple!! video: ZDocPianoPlayer comparing the Bad Apple!! prototype track MIDI + original video\nhttps://www.youtube.com/watch?v=3ZbWrG828SU",
        "videoUrl": "https://www.youtube.com/watch?v=SjvomcZKbk0",
        "previewImgUrl": "https://img.youtube.com/vi/SjvomcZKbk0/hqdefault.jpg",
        "authorId": 40,
        "id": 44
    },
    {
        "title": "Bad Apple!! on Arduino Uno with 84x48 display",
        "description": "Nokia 5110 display shield used. The video is transmited over usb-serial line. Original BA audio is mixed from some point to protect your ears from bleeding - camera and microphone were bad enough.\n\nSources - http://github.com/atsidaev/arduino_lcd5110_bad_apple",
        "videoUrl": "https://www.youtube.com/watch?v=v6HidvezKBI",
        "previewImgUrl": "https://img.youtube.com/vi/v6HidvezKBI/hqdefault.jpg",
        "authorId": 41,
        "id": 45
    },
    {
        "title": "Touhou - Bad Apple (Sega Master System)",
        "description": "The Sega Master System version of the well-known shadow art video of Bad Apple that has been done for many 8-bit systems.  \n\nYou can get the audio here:\nhttps://rushjet1.bandcamp.com/track/touhou-bad-apple-sega-master-system\n\nYou can get the ROM here: http://www.smspower.org/Homebrew/BadAppleForSMS-SMS\n\nCode: Psidum, Calindro\nMusic: RushJet1\nPixels: Sim1\nMusic player: Sverx",
        "videoUrl": "https://www.youtube.com/watch?v=8IrxK_nT1o8",
        "previewImgUrl": "https://img.youtube.com/vi/8IrxK_nT1o8/hqdefault.jpg",
        "authorId": 42,
        "id": 46
    },
    {
        "title": "Bad Apple - An Atari Demo (2017)",
        "description": "A new rendition of the well-known music video, now with proper timing, stereo music and a framerate of 12.5 fps. Runs on stock Atari 64KB machines (Atari 800 series), using a 1MB Maxflash/Ultimate cart. I was just a technical advisor in this one, mostly with regard to music.\nCode, graphics, music: R0ger\nLink to pou\u00ebt.net production page: http://www.pouet.net/prod.php?which=70220",
        "videoUrl": "https://www.youtube.com/watch?v=BjNm04oCdYc",
        "previewImgUrl": "https://img.youtube.com/vi/BjNm04oCdYc/hqdefault.jpg",
        "authorId": 43,
        "id": 47
    },
    {
        "title": "Bad Apple 64",
        "description": "A demonstration on the C64 that displays and streams 2200 frames of animation at 12fps packed onto a single side of a floppy (less than 200k)",
        "videoUrl": "https://www.youtube.com/watch?v=fu7rRYkWsyk",
        "previewImgUrl": "https://img.youtube.com/vi/fu7rRYkWsyk/hqdefault.jpg",
        "authorId": 44,
        "id": 48
    },
    {
        "title": "bad apple demo for Atari 8-bit",
        "description": "bad apple demo for Atari 8-bit",
        "videoUrl": "https://www.youtube.com/watch?v=IyyGWyQ-gL0",
        "previewImgUrl": "https://img.youtube.com/vi/IyyGWyQ-gL0/hqdefault.jpg",
        "authorId": 45,
        "id": 49
    },
    {
        "title": "BR-TV v0.6: \"Bad Apple\" Commodore 64 [C64 w/ REU]",
        "description": "BR-TV v0.6 Test: Global Charset, Unique ColorRAM. The C64 is playing both, audio & video...\nCharset from \"Resolution 80x50\"-Demo (unreleased) & \"Mini Arcade: Climax\" by Bamse\nC64 \"Personal Jesus\" Video at Vimeo: https://vimeo.com/181907814\n\nDownload Player: https://csdb.dk/release/?id=160140\nDownload Media-Files: https://www.dropbox.com/sh/5qqxovv6y7osidc/AABeYf6PBwiL5Eqj7pnIImRZa?dl=0\n\nKeep in mind that you need a 16MB RAM extension, e.g. U1541-II.\nOr just use the Vice Emulator w/ REU emulation.",
        "videoUrl": "https://www.youtube.com/watch?v=n8NQEd1azDs",
        "previewImgUrl": "https://img.youtube.com/vi/n8NQEd1azDs/hqdefault.jpg",
        "authorId": 46,
        "id": 50
    },
    {
        "title": "Bad Apple PV-FC 2 (NES)",
        "description": "Original ROM page https://web.archive.org/web/20100206030142/http://www.geocities.jp/littlimi/bad_apple_2.htm",
        "videoUrl": "https://www.youtube.com/watch?v=qRdGhHEoj3o",
        "previewImgUrl": "https://img.youtube.com/vi/qRdGhHEoj3o/hqdefault.jpg",
        "authorId": 47,
        "id": 51
    },
    {
        "title": "Teletext Bad Apple by BitShifters (BBC Micro)",
        "description": "Full info: https://bitshifters.github.io/posts/prods/bs-badapple.html\n\nNot compatible with a second processor.\n\nIf using on a DataCentre, you'll need to *DTRAP it to get it to work. Kieran says, \"it loads one track at a time using OSWORD &7F so needs to be on a DFS of some sort.\"",
        "videoUrl": "https://www.youtube.com/watch?v=22y_aiOx9CY",
        "previewImgUrl": "https://img.youtube.com/vi/22y_aiOx9CY/hqdefault.jpg",
        "authorId": 48,
        "id": 52
    },
    {
        "title": "Bad Apple!! on Impulse Tracker",
        "description": "This needs to be done.\n\nDownload: https://modarchive.org/index.php?request=view_by_moduleid&query=179366",
        "videoUrl": "https://www.youtube.com/watch?v=SDvk3aL78fI",
        "previewImgUrl": "https://img.youtube.com/vi/SDvk3aL78fI/hqdefault.jpg",
        "authorId": 49,
        "id": 53
    },
    {
        "title": "Bad apple 2 demo Atari Jaguar",
        "description": "Bad Apple 2 demo  on real machine, Jaguar + Skunkboard",
        "videoUrl": "https://www.youtube.com/watch?v=zuf20bdvSWQ",
        "previewImgUrl": "https://img.youtube.com/vi/zuf20bdvSWQ/hqdefault.jpg",
        "authorId": 50,
        "id": 54
    },
    {
        "title": "Touhou ~ Bad Apple on the laser scanner (v2)",
        "description": "This is a more recent recording of my original Bad Apple laser video:\nhttp://www.youtube.com/watch?v=uJaAYD0YT44\n\nThis version is done with a much more recent version of OpenLase and features quite a few tweaks to reduce blinking. OpenLase is my open source realtime laser graphics framework, check it out here:\n\nhttps://github.com/marcan/openlase\nhttp://openlase.org",
        "videoUrl": "https://www.youtube.com/watch?v=5A9Eh6D-K_g",
        "previewImgUrl": "https://img.youtube.com/vi/5A9Eh6D-K_g/hqdefault.jpg",
        "authorId": 51,
        "id": 55
    },
    {
        "title": "Good Apple (Bad Apple remix) by The SandS \u2013 \u0411\u041a0011",
        "description": "The demo for BK-0011M retro computer.\nTook 2nd place on Chaos Constructions 2018 demoparty.\nDownload executable file: https://www.pouet.net/prod.php?which=78066\n\nAlso watch another demo from our friends, released 4 months earlier - the source of our inspiration and some technical solutions: https://www.youtube.com/watch?v=u_pdp1QSp70",
        "videoUrl": "https://www.youtube.com/watch?v=8Q1vN51o-Dg",
        "previewImgUrl": "https://img.youtube.com/vi/8Q1vN51o-Dg/hqdefault.jpg",
        "authorId": 52,
        "id": 56
    },
    {
        "title": "Bad Apple!! played on Windows 10 File Explorer",
        "description": "I was surprised to see that this one didn't already exist on YouTube or Niconico (I did eventually find an obscure one on Bilibili but the quality was rather low), especially since it's quite simple in both idea and execution. Video sped up. Uses FileTypesMan and Python PIL.\n\nCheck out my other stuff on GitHub https://github.com/kevinjycui\nDiscord server: https://discord.gg/WEykWbjkR2\nMusic used: Le Sharko\u00efste - Bad Apple - Cover with Windows XP and 7 sounds (2018 version) https://www.youtube.com/watch?v=Qn5-dm1XPDo",
        "videoUrl": "https://www.youtube.com/watch?v=7WHA_Gi4nPA",
        "previewImgUrl": "https://img.youtube.com/vi/7WHA_Gi4nPA/hqdefault.jpg",
        "authorId": 53,
        "id": 57
    },
    {
        "title": "Bad Python!! (Bad Apple!! in a 64-kilobyte Raspberry Pi program)",
        "description": "Bad Python!! - a 64-kilobyte Raspberry Pi intro by stage7/Genshiken\n\nThis intro recreates the famous \"Bad Apple!!\" video and music in a 64-kilobyte program written in Python on a Raspberry Pi 2 Model B. \n\nThis program contains:\n- 25 megabytes of video data in 1313 hand drawn frames in some 56 kilobytes.\n- 19 megabytes of music data in 8 tracks of additive synthesis compressed in 2 kilobytes and a quarter.\n- Full PV karaoke compressed under 2 kilobytes.\n\nOriginal song by Alstroemeria Records.\nOriginal PV by \u3042\u306b\u3089.\n\"Touhou\" and its related characters are property of ZUN/Team Shanghai Alice and are used under ZUN's terms of use.\nNo copyright infringement intended.\n\nDownload the program here: http://demoscene.stg7.net/intros/st7-bp.zip",
        "videoUrl": "https://www.youtube.com/watch?v=ZuBJVZWrRuk",
        "previewImgUrl": "https://img.youtube.com/vi/ZuBJVZWrRuk/hqdefault.jpg",
        "authorId": 54,
        "id": 58
    },
    {
        "title": "Onslaught - Bad Apple 64 - C64 Demo",
        "description": "Excellent C64 demo which is quite Amiga-like and demonstrates what can be achieved in just approximately 170k and a 1 MHz computer from 1982. Released in June 2014...\n\n*Rough quick capture*\n\nCredits:\n\nCode, Graphics, Design and Linking.... Algorithm\nMusic.... Ukimenustah\nLoader.... Krill\n\nAlgorithm on 29 June 2014\n\"This is pure 100% animation and was only created to show that it could be done... over 2000 frames packed to a single disk side on the c64.\nEach frame packed to around 70 bytes and running at 12fps streaming fully from disk!\"\n\nTouhou - Bad Apple (With SID Audio) http://youtu.be/Y9aUChQmKSQ",
        "videoUrl": "https://www.youtube.com/watch?v=OsDy-4L6-tQ",
        "previewImgUrl": "https://img.youtube.com/vi/OsDy-4L6-tQ/hqdefault.jpg",
        "authorId": 55,
        "id": 59
    },
    {
        "title": "[Black MIDI Animation] BAD APPLE!! PV | MIDI Film Projector | Piano From Above (7.6 Million Notes)",
        "description": "\u266b Noone thought this was going to be possible but it was! It basically works the same as an analog film projector. The individual frames of the animation were converted into MIDI and tucked really close to eachother. When you play it and stretch it to the right note-span you should be able to see the video play.\n\nIt was created by ICEWiiMaker (ACJellier-SpringSnow), if I'm right, however she never got to actually make it work. It took some Cheat Engine and video editing to get this to work out. Was lots of work.\n\n\nFACT: This is not the original Bad Apple!!, this version of the song is merely a remake/remix of the original which was from Touhou 4: https://www.youtube.com/watch?v=3kXx6f7qaa8\n\nOriginal video: https://www.youtube.com/watch?v=qD0V06-pKjA\n\n\u25ba\u25ba\u25ba Support me on PATREON: https://www.patreon.com/epretroll\n\nBackground VFX by AA-VFX: https://www.youtube.com/user/dvdangor2011\n------------------------------------------------------\n\u2718 MIDI Download: Author does not give it out.\n------------------------------------------------------\nSong: Bad Apple!! feat. Nomico (PV)\nMIDI by: ICEWiiMaker\nNote count: 7,626,912\n\nSoundfont(s) used: \n------------------------------------------------------\n\u266c Other great Black MIDI Channels:\n\u25ba Gingeas: http://www.youtube.com/user/gingeas\n\u25ba Scub Domino: https://www.youtube.com/user/ScubDomino\n\u25ba Infernis: https://www.youtube.com/channel/UC26QH9wPeNlZ_Uod9Jro0fQ\n\u25ba Sir Spork: https://www.youtube.com/channel/UCAUG0YZ9QAdhedr91PevYQA\n\u25ba Tarwil: https://www.youtube.com/channel/UCuDo96Dxd8hU5-CSfoTwcsQ\n\u25ba TheSuperMarioBros2: http://www.youtube.com/user/thesupermariobros2\n\u25ba TheTrustedComputer: http://www.youtube.com/user/thetrustedcomputer\n\u25ba Gray Vagabond: https://www.youtube.com/channel/UCzTRo_rUF-0cka_v4CAFf2A\n------------------------------------------------------\n\u00a9 Re-use of any of the Audio-visual material in this video is prohibited without permission. Do not use clips of my videos or audio outside the realms of Fair Use without prior permission. Breaking this rule may result in your video being taken down. If by chance you are the copyright holder of any of the material in this video and aren't content with the way it was used, you can contact me by e-mail and I will discuss what I can do for you. \n------------------------------------------------------\nPiano~",
        "videoUrl": "https://www.youtube.com/watch?v=mqdM8VnaBYM",
        "previewImgUrl": "https://img.youtube.com/vi/mqdM8VnaBYM/hqdefault.jpg",
        "authorId": 56,
        "id": 60
    },
    {
        "title": "Bad Apple - Neo Geo",
        "description": "UPDATE: MAME 0.187 and up should now properly play this demo\n\nROM file:\nhttps://www.dropbox.com/s/bt7gcb9pdrihgo3/badapple.zip?dl=0\n\nFrames are 299x224 to keep aspect ratio, 60FPS, 13167 frames.\n\nSelecting different refresh rates will adjust sound playback rate to stay in sync with video.\n\n\nMAME will require a fix to fully run this, not sure about other emulators.\n\nNo CD version planned.",
        "videoUrl": "https://www.youtube.com/watch?v=WyxvDh57zZY",
        "previewImgUrl": "https://img.youtube.com/vi/WyxvDh57zZY/hqdefault.jpg",
        "authorId": 57,
        "id": 61
    },
    {
        "title": "\u3010\u97f3\u697d\u7121\u3057\u3011Bad\u3000Apple!!\u306ePV\u3092\u5168\u3066\u30ea\u30f3\u30b4\u3067\u3084\u3063\u305f\u3093\u305a\u3002\u3000 Bad Apple!! PV With Apple",
        "description": "\u306f\u3044\u3002\u9752\u68ee\u770c\u7523\u30ea\u30f3\u30b4\u3092\uff12\uff15\u500b\u4f7f\u7528\u3057\u3066\u51fa\u6765\u307e\u3057\u305f\u3002\u30ec\u30df\u30ea\u30a2\u307e\u3067\u6211\u6162\u3057\u3066\u898b\u3066\u304f\u3060\u3055\u3044\u3002\u305d\u306e\u4ed6\u3044\u308d\u3044\u308d\u898b\u306b\u304f\u3044\u3051\u3069\u3054\u52d8\u5f01\u3092\u3002\u96f0\u56f2\u6c17\u3060\u3051\u697d\u3057\u3093\u3067\u304f\u3060\u3055\u3044\u306d\u3002http://www.pixiv.net/member.php?id=820757\u3000Thank you for watching and writing many comments!\u3000\u305f\u304f\u3055\u3093\u898b\u3066\u9802\u3044\u3066\u30b3\u30e1\u30f3\u30c8\u3082\u9802\u3044\u3066\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\uff01\u611f\u8b1d\u611f\u8b1d\u3067\u3059\u3002\n\nThanks for watching! Long years past. I'm living in Hyogo Pref. So far from Aomori.\nI'm now SAKE brewer.Yeah!I love sake!\nThis movie made in 2010. So Image quality is rough :/\nI want to make apples movie again someday. Thanks a lot!\n\n\u97f3\u697d\u306e\u8457\u4f5c\u6a29\u304c\u7121\u3044\u306e\u3067\u97f3\u697d\u306f\u7121\u3057\u3067\u3059\u3002\u3054\u3081\u3093\u306d\u3002\nThere is no music because there is no copyright of the sound source.I don't get paid to make videos.\nI lost my motivation.\n\n\u3088\u304f\u3042\u308b\u8cea\u554f\n\u30ea\u30f3\u30b4\u98df\u3063\u305f\u306e\uff1f\u3000\u5f6b\u3063\u3066\u5199\u771f\u64ae\u3063\u305f\u3089\u98df\u3079\u3066\u307e\u3059\u3088\n\u4f55\u500b\u4f7f\u3063\u305f\u306e\uff1f\u3000\u300025\u500b\u3060\u3088\n\u4f55\u3067\u64ae\u3063\u305f\u306e\uff1f\u3000\u3000\u30ac\u30e9\u30b1\u30fc\u306e\u30b3\u30de\u64ae\u308a\n\u9178\u5316\u3057\u3066\u306a\u3044\u306d\u3002\u30001.5\u6642\u9593\u4ee5\u5185\u306b\u5f6b\u308c\u3070\u9178\u5316\u3057\u306a\u3044\u3088\n\u4ed6\u306e\u4f5c\u54c1\u306f\uff1f\u3000\u3000\u3000\u6c17\u304c\u5411\u3044\u305f\u3089\u5f6b\u3063\u3066\u307e\u3059\u3002\nTwitter:ringomajyutu\n\n\u3078\u3070\u306d\u30fc",
        "videoUrl": "https://www.youtube.com/watch?v=kSz00lTjeyU",
        "previewImgUrl": "https://img.youtube.com/vi/kSz00lTjeyU/hqdefault.jpg",
        "authorId": 58,
        "id": 62
    },
    {
        "title": "Bad Apple - Factorio version",
        "description": "Original video: http://nicovideo.jp/watch/sm8628149",
        "videoUrl": "https://www.youtube.com/watch?v=kgnMxRFO1iw",
        "previewImgUrl": "https://img.youtube.com/vi/kgnMxRFO1iw/hqdefault.jpg",
        "authorId": 59,
        "id": 63
    },
    {
        "title": "Factorio: Bad Apple!! on 24x16 Lamp Array (Real-time Recording)",
        "description": "Game Version: 0.15, modded\nMod: CombinatorBatchAssign (Self-made mod to assign values of data of the video to constant combinators)\n(source code: https://github.com/LuiCat/CombinatorBatchAssign)",
        "videoUrl": "https://www.youtube.com/watch?v=0e-gmMXs1Wo",
        "previewImgUrl": "https://img.youtube.com/vi/0e-gmMXs1Wo/hqdefault.jpg",
        "authorId": 60,
        "id": 64
    },
    {
        "title": "Bad Apple on an iPod mini",
        "description": "",
        "videoUrl": "https://www.youtube.com/watch?v=fMDkbzIFmag",
        "previewImgUrl": "https://img.youtube.com/vi/fMDkbzIFmag/hqdefault.jpg",
        "authorId": 10,
        "id": 65
    },
    {
        "title": "Bad apple on KY-01L",
        "description": "",
        "videoUrl": "https://www.youtube.com/watch?v=mvbkrfThGlo",
        "previewImgUrl": "https://img.youtube.com/vi/mvbkrfThGlo/hqdefault.jpg",
        "authorId": 10,
        "id": 66
    },
    {
        "title": "Bad apple on KY-01L (fast refresh mode)",
        "description": "",
        "videoUrl": "https://www.youtube.com/watch?v=OIrsJprtaYo",
        "previewImgUrl": "https://img.youtube.com/vi/OIrsJprtaYo/hqdefault.jpg",
        "authorId": 10,
        "id": 67
    },
    {
        "title": "Bad Apple!! \u5f71\u7d75 PV \u3092\u30d1\u30e9\u30d1\u30e9\u6f2b\u753b\u3067\u518d\u73fe\u3057\u3066\u307f\u305f\u3002\u3010\u9ad8\u753b\u8cea\u64ae\u308a\u76f4\u3057\u3011\u3010No Edited Edition\u3011",
        "description": "\u304a\u3072\u3055\u3057\u3076\u308a\u3067\u3059\u3002\nhttps://twitter.com/CareleSmith9\n\n\n\u56fa\u5b9a\u30b3\u30e1\u30f3\u30c8\u306f\u4f5c\u8005\u3068\u306f\u7121\u95a2\u4fc2\u306e\u4eba\u7269\u3067\u3059\u304c\u3001\u5f8c\u308d\u306e\u7d19\u306e\u5185\u5bb9\u3092\u66f8\u304d\u8d77\u3053\u3057\u3066\u304f\u3060\u3055\u3063\u305f\u3053\u3068\u306b\u611f\u8b1d\u306e\u610f\u3092\u793a\u3057\u3001\u56fa\u5b9a\u3068\u3057\u3066\u3044\u307e\u3059\u3002",
        "videoUrl": "https://www.youtube.com/watch?v=m84PTZB_qT0",
        "previewImgUrl": "https://img.youtube.com/vi/m84PTZB_qT0/hqdefault.jpg",
        "authorId": 61,
        "id": 68
    },
    {
        "title": "Bad Apple!! PV\u3092\u30d1\u30e9\u30d1\u30e9\u6f2b\u753b\u3067\u518d\u73fe\u3057\u3066\u307f\u305f\u3002\u3010\u5b8c\u6210\u3057\u305f\u3088!!!\uff08\u4eee\uff09\u3011",
        "description": "",
        "videoUrl": "https://www.youtube.com/watch?v=Nnbbt_fOnfQ",
        "previewImgUrl": "https://img.youtube.com/vi/Nnbbt_fOnfQ/hqdefault.jpg",
        "authorId": 61,
        "id": 69
    },
    {
        "title": "\"Touhou - Bad Apple PV\" in Excel for Mac 2011!! (VBA Animation)",
        "description": "Proof that Excel can do anything! (See below for details)\n\n\u6771\u65b9Bad Apple PV\u3092\u30a8\u30af\u30bb\u30eb(Excel)\u3067\u518d\u73fe\u3057\u3066\u307f\u305f\n\nDetails:\n----------------------\nPython was used to downsample the source video into a binary format containing display data. The data was then unpacked, frame by frame, into Excel using a VBA script.\n\nThis approach differs from traditional render-in-excel approaches, in that each frame is programmatically rendered onto the screen within a predefined area (the \"render window\"). Other approaches typically render all frames in a single worksheet and scan across the frames at a given frame rate. Although the traditional approach is faster and yields real-time video playback, the in-place method is interesting to consider because it consumes less application memory and leaves cells outside the render window unaffected. With this approach, one can imagine producing animated results for worksheet calculations in a way that doesn't affect the view of the current workspace.\n\nRender time was 0.45 seconds per frame (60x80 display), which is too slow for live video playback. Thus, the final result was sped up by 460% to create this video.\n\nThe blue highlight is a bug in Excel for Mac, and is an artifact of adjusting the global column heights and widths at the beginning of the script.\n----------------------\nSource Video: https://www.youtube.com/watch?v=UkgK8eUdpAo\nOriginal: http://www.nicovideo.jp/watch/sm8628149",
        "videoUrl": "https://www.youtube.com/watch?v=X7lUngqOn2w",
        "previewImgUrl": "https://img.youtube.com/vi/X7lUngqOn2w/hqdefault.jpg",
        "authorId": 62,
        "id": 70
    },
    {
        "title": "Most complex Launchpad light show ever? Play Bad Apple!! PV on 4 Launchpads",
        "description": "First \"kind normal\" video that I posted this year...\nProject file not available\n\noriginal music video: https://www.youtube.com/watch?v=G3C-VevI36s",
        "videoUrl": "https://www.youtube.com/watch?v=TFGdUH2psz4",
        "previewImgUrl": "https://img.youtube.com/vi/TFGdUH2psz4/hqdefault.jpg",
        "authorId": 63,
        "id": 71
    },
    {
        "title": "DIY ILDA Laser Projector (Bad Apple!! PV / No Blanking)",
        "description": "DIY ILDA Laser Projector & DIY ILDA USB Interface\nPV: Touhou - Bad Apple!!\nhttp://htlab.net/",
        "videoUrl": "https://www.youtube.com/watch?v=JXGq46YFfKI",
        "previewImgUrl": "https://img.youtube.com/vi/JXGq46YFfKI/hqdefault.jpg",
        "authorId": 64,
        "id": 72
    },
    {
        "title": "Bad Ascii!!!\u3010\u6771\u65b9\u3011Bad Apple!!\u3000\uff30\uff36\u3010\u5f71\u7d75\u3011",
        "description": "The 2013 Project has come back with a force!  This time, I've made a much more functional player for the custom video format.  I'm still working on making it portable and usable across different systems.  If you have any suggestions.\n\nOriginal video: http://www.nicovideo.jp/watch/sm8628149",
        "videoUrl": "https://www.youtube.com/watch?v=SsMMNIXwg3c",
        "previewImgUrl": "https://img.youtube.com/vi/SsMMNIXwg3c/hqdefault.jpg",
        "authorId": 65,
        "id": 73
    },
    {
        "title": "If this is not the correct way to use a 896-Core Processor, I don't know what is.",
        "description": "Doom will hopefully be done soon! if you want to see it subscribing here is probably the easiest way.\n\nRemade with enough cores to actually tell what it is!\n\nYou guys seemed to like the pokemon one!, so I remade the original bad apple one. Still trying to get Doom to work, but it's proving harder than I thought it would be. Maybe I'll try pong or something first instead.",
        "videoUrl": "https://www.youtube.com/watch?v=RY5_gutA_Vw",
        "previewImgUrl": "https://img.youtube.com/vi/RY5_gutA_Vw/hqdefault.jpg",
        "authorId": 66,
        "id": 74
    },
    {
        "title": "Threadripper 3990X plays Bad Apple in task manager",
        "description": "For details go there https://www.tomshardware.com/news/watch-amd-threadripper-3990x-128-threads-render-video-task-manager",
        "videoUrl": "https://www.youtube.com/watch?v=zh8MiNzKkiA",
        "previewImgUrl": "https://img.youtube.com/vi/zh8MiNzKkiA/hqdefault.jpg",
        "authorId": 67,
        "id": 75
    },
    {
        "title": "Bad Apple!! - Keyboard OLED Display (SteelSeries) |\u3010Touhou\u3011",
        "description": "Testing the Apex 7 TKL keyboard from SteelSeries using the Touhou animation \"Bad Apple\". The software supports GIF format, so I converted the video in 4 GIF segments cause the size. The resolution is 128x40 px.\n\n\u25baFollow me on Twitch: https://www.twitch.tv/kevstrack\n\n\u2605 Discord: https://discord.gg/6Ygb57Y\n\n\u25ba Twitter: https://twitter.com/KevstracK\n\u25ba Instagram: https://www.instagram.com/kevstrack/\n\u25ba Facebook: https://www.facebook.com/KevstracKOF",
        "videoUrl": "https://www.youtube.com/watch?v=-tTC57U88Gw",
        "previewImgUrl": "https://img.youtube.com/vi/-tTC57U88Gw/hqdefault.jpg",
        "authorId": 68,
        "id": 76
    },
    {
        "title": "Bad Apple!! played on Desmos Graphing Calculator",
        "description": "Calculus exam be like: find the integral. This took over an hour to render and there are parts out of sync, so sorry about that! Uses Desmos API, HTML+Vanilla JS, Python PIL.\n\nBetter version to watch after you finish watching this one: https://www.youtube.com/watch?v=MVrNn5TuMkY\n\nCheck out my other stuff on GitHub https://github.com/kevinjycui\nDiscord server: https://discord.gg/WEykWbjkR2",
        "videoUrl": "https://www.youtube.com/watch?v=siPzJD2tMDw",
        "previewImgUrl": "https://img.youtube.com/vi/siPzJD2tMDw/hqdefault.jpg",
        "authorId": 53,
        "id": 77
    },
    {
        "title": "Bad Apple on Gamebuino",
        "description": "20 fps monochrome motion picture with 8-bit 10 kHz WAV.\nArduino based console (Atmega328 & Nokia 5110 LCD). Project Jvideo by jonnection.",
        "videoUrl": "https://www.youtube.com/watch?v=sdpaFUWLg0w",
        "previewImgUrl": "https://img.youtube.com/vi/sdpaFUWLg0w/hqdefault.jpg",
        "authorId": 69,
        "id": 78
    },
    {
        "title": "Terraria: Bad Apple!! (Triumph of engineering)",
        "description": "The most ambitious build that I've build using \u201cFaulty Logic\u201d, as I used to call it.\nThis is equivalent to hoiks or hoiktronics, that became possible in 1.3.1 patch, but possibilities still stay mostly unexplored.\nUnlike regular logic gates, faulty logic gates can be joined in more complex circuits and compute a lot faster.\n\nOriginal music video you can find here \u2014 http://www.nicovideo.jp/watch/sm8628149\nOr here, on youtube \u2014 https://www.youtube.com/watch?v=G3C-VevI36s\n\nFor details, you may read T-Mec forum post \u2014 https://forums.terraria.org/index.php?threads/showcase-bad-apple.76348/",
        "videoUrl": "https://www.youtube.com/watch?v=NUh4tqlkyWI",
        "previewImgUrl": "https://img.youtube.com/vi/NUh4tqlkyWI/hqdefault.jpg",
        "authorId": 70,
        "id": 79
    },
    {
        "title": "BadApple PV ASCII Under MS Word 1.x",
        "description": "I once made a mass text importer and automatic page turner in Word 7.0 WordBasic. I ported these to WinWord 1.x WordBasic and tested that using the famous Bad Apple PV.\nYoutube wrongly deinterlaced some of my uploads (always progressive) and the quality will be lower than expected.",
        "videoUrl": "https://www.youtube.com/watch?v=YuzLMpkLv08",
        "previewImgUrl": "https://img.youtube.com/vi/YuzLMpkLv08/hqdefault.jpg",
        "authorId": 71,
        "id": 80
    },
    {
        "title": "Kako Milo by K\u00fcA-Fenarinarsa-Gasman (Atari STe demo) 1080p60",
        "description": "Atari STe Bad Apple remix released at Notlicht 2020\nDemozoo: https://demozoo.org/productions/285265/",
        "videoUrl": "https://www.youtube.com/watch?v=tgCrJBQnERM",
        "previewImgUrl": "https://img.youtube.com/vi/tgCrJBQnERM/hqdefault.jpg",
        "authorId": 72,
        "id": 81
    },
    {
        "title": "\u3010\u6771\u65b9\u3011Touhou - Bad Apple on USSR plasma panels\u3010\u5f71\u7d75\u3011",
        "description": "\u041a\u0443\u043b\u044c\u0442\u043e\u0432\u0430\u044f \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f Bad Apple!! feat.nomico(\u535a\u9e97\u795e\u793e\u3046\u305f\u796d 2016 EDIT) \u043d\u0430 \u043f\u043b\u0430\u0437\u043c\u0435\u043d\u043d\u043e\u0439 \u043f\u0430\u043d\u0435\u043b\u0438 96*96 \u0442\u043e\u0447\u0435\u043a, \u0441\u0434\u0435\u043b\u0430\u043d\u043d\u043e\u0439 \u0438\u0437 9 \u043f\u043b\u0438\u0442\u043e\u043a \u0418\u0413\u041f\u041f32-32\n\n\u041a\u0430\u043a \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u043b\u0430\u0441\u044c \u043f\u0430\u043d\u0435\u043b\u044c\nhttps://youtu.be/hCbeAC55MHI\n\n\u0421\u0442\u0440\u0430\u043d\u0438\u0447\u043a\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \nhttps://dekatronpc.com/index.php/\u0418\u0413\u041f\u041f-32/32\n\n\u041d\u0430 \u043b\u0430\u043c\u043f\u044b \u0438 \u0440\u0435\u043b\u044e\u0448\u043a\u0438:\nhttps://streamlabs.com/artemkashkanov/tip\n\n\u041f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0439\u0441\u044f:\n\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043a\u0430\u043d\u0430\u043b: https://youtube.com/c/ArtemKashkanov/\n\u041a\u0430\u043d\u0430\u043b \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0432 Telegram:  https://t.me/brainfuckpc \n\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439: https://github.com/radiolok/brainfuckpc\n\nBrainfuckPC: https://hackaday.io/project/18599-brainfuck-relay-computer\nFluidicPC: https://hackaday.io/project/45555-fluidicpc\nDekatronPC: https://hackaday.io/project/45538-dekatronpc\n\n\u042f \u0432\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435: https://vk.com/kylibin\nI'm on twitter: https://twitter.com/radiolok\n\n\u042f \u043d\u0430 \u0445\u0430\u0431\u0440\u0435:\nhttp://habr.com/users/radiolok/\n\n\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442 \u0440\u0443\u0431\u043b\u0435\u043c \u043c\u043e\u0436\u043d\u043e \u043f\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u0440\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u0430\u043c\n\u042f\u043d\u0434\u0435\u043a\u0441-\u041a\u043e\u0448\u0435\u043b\u0435\u043a: 4100140289266\n\u0411\u043e\u043b\u044c\u0448\u0435 \u0437\u043e\u043b\u043e\u0442\u0430 - \u0431\u043e\u043b\u044c\u0448\u0435 \u0431\u0435\u0437\u0443\u043c\u043d\u044b\u0445 \u0436\u0435\u043b\u0435\u0437\u043e\u043a\n\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0430 \u043f\u0430\u0442\u0440\u0435\u043e\u043d\u0435: https://www.patreon.com/radiolok\n\nhttps://www.donationalerts.com/r/radiolok",
        "videoUrl": "https://www.youtube.com/watch?v=VBtLD79KmMc",
        "previewImgUrl": "https://img.youtube.com/vi/VBtLD79KmMc/hqdefault.jpg",
        "authorId": 73,
        "id": 82
    },
    {
        "title": "Bad Apple!!, but it's actually playable",
        "description": "Imagine Bad Apple!! animation was playable. Guess it is now. Don't ask me why. But it exists, so that counts lol\nLet's see how much can one die to it!\n\n\nThis script is part of the bigger fangame made in LuaSTG. Named purely \"LuaSTG Boss Rush\" (or multi-boss rush, actually?), is a huge project made by a lone scripter from Bilibili. It consists of Boss Rush-like stages, varying from EoSD up to DDC (as for today i.e. version 3.20).\n\nIt is just amazing how many of the content is there, and how great some of the \"rushes\" are made. The most notable ones are IN, SA and DDC. Definitely worth checking out!\n\nMore videos coming soon - stay tuned!\n\n----------\n\nDownload LuaSTG Boss Rush (v3.20) right here:\nhttps://mega.nz/file/YBQw0JIB#B4iF5W0C8QtAUaOSo_uJPwNFAKRI-yL3pInpAZRVV_Q\n\nFor more fan-made goodies - check out Touhou Fangames List!\nhttp://bit.ly/FangamesList\n\nLink to my Patreon page\nhttps://www.patreon.com/CreepyNinja_\n\nDiscord - Fanworks 'n Chill\nhttps://discord.gg/wBVwcxU",
        "videoUrl": "https://www.youtube.com/watch?v=41xx6qnSpS0",
        "previewImgUrl": "https://img.youtube.com/vi/41xx6qnSpS0/hqdefault.jpg",
        "authorId": 74,
        "id": 83
    },
    {
        "title": "Bad apple but it's windows command prompt",
        "description": "Discord server (IT): https://discord.gg/kRFxbpY\nDiscord BOT with beautiful functions (IT): https://top.gg/bot/584063287428251661",
        "videoUrl": "https://www.youtube.com/watch?v=AbuonyjAcPI",
        "previewImgUrl": "https://img.youtube.com/vi/AbuonyjAcPI/hqdefault.jpg",
        "authorId": 75,
        "id": 84
    },
    {
        "title": "(Bad Apple) Watch",
        "description": "Bad Apple on an Apple Watch\nNEW 60FPS VERSION OUT: https://youtu.be/5i2Cp9WiTbc",
        "videoUrl": "https://www.youtube.com/watch?v=EQdGplOzfJ0",
        "previewImgUrl": "https://img.youtube.com/vi/EQdGplOzfJ0/hqdefault.jpg",
        "authorId": 76,
        "id": 85
    },
    {
        "title": "Bad Apple HD - Atari 8-bit Demo by JAC! of WUDSN (NTSC)",
        "description": "Recorded on the original Atari 400 computer and Atari 410 tape drive and The!Cart. 60 Hz capture from NTSC CRT display. \n\nOriginal music in this video:\nBad Apple!! (feat. nomico) by Alstroemeria Records\nAll rights belong to their respective owners.\n\nThe download is available at\nhttps://www.wudsn.com/productions/atari800/badapplehd/badapplehd.zip\n\nThe story and technical details are available at:\nhttps://www.wudsn.com/index.php/productions-atari800/demos/badapplehd\n\nThe recording of the PAL version is available at:\nhttps://www.youtube.com/watch?v=WhAn9pCdQek",
        "videoUrl": "https://www.youtube.com/watch?v=tiLB8PQUJtc",
        "previewImgUrl": "https://img.youtube.com/vi/tiLB8PQUJtc/hqdefault.jpg",
        "authorId": 77,
        "id": 86
    },
    {
        "title": "Bad Apple - Mattel Intellivision",
        "description": "Bad Apple for the Mattel Intellivision\nROM download: http://atariage.com/forums/topic/266031-intellivision-bad-apple\nTech: 80x48 video @30Hz, 6 voice audio",
        "videoUrl": "https://www.youtube.com/watch?v=tyknZvRQCaU",
        "previewImgUrl": "https://img.youtube.com/vi/tyknZvRQCaU/hqdefault.jpg",
        "authorId": 78,
        "id": 87
    },
    {
        "title": "Bad apple but its discord messages",
        "description": "I made a discord bot that plays bad apple...\n\nDiscord has a limit on how quick msgs can be sent so I had to speed up my recording, hope this still counts!\n\nCome join my discord server: https://discord.gg/BqkcukKhEk\n\nOriginal video: https://www.youtube.com/watch?v=UkgK8eUdpAo\n\nOther random bad apple stuff: https://www.youtube.com/playlist?list=PLVrFY7mKhThFgD8P4_ioFsBMWsQEMYoSp\n\nBot code:  https://github.com/NPCat/bad-apple-bot",
        "videoUrl": "https://www.youtube.com/watch?v=PLP9c0Z4Q3Y",
        "previewImgUrl": "https://img.youtube.com/vi/PLP9c0Z4Q3Y/hqdefault.jpg",
        "authorId": 79,
        "id": 88
    },
    {
        "title": "Bad Apple!! played on Google Maps",
        "description": "My contribution to the Touhou community. Uses Google Maps API, Node.js, React, Python PIL. Haven't made the code public yet since I wrote it at midnight between midterms so it's pretty scuffed (but hey it works). Video is sped up, but there is still some lag in some parts (it's surprisingly difficult to get Google Maps to update render at a consistent FPS).\n\nCheck out my other stuff on GitHub https://github.com/kevinjycui\nDiscord server: https://discord.gg/WEykWbjkR2",
        "videoUrl": "https://www.youtube.com/watch?v=r-axdVfM0c0",
        "previewImgUrl": "https://img.youtube.com/vi/r-axdVfM0c0/hqdefault.jpg",
        "authorId": 53,
        "id": 89
    },
    {
        "title": "Bad Apple!! but it's made of YouTube captions",
        "description": "Recommended: Mac, Android, Linux\nWindows is fine, but spaces look off because the font has a wrong width for braille space.\niPhone/iPad app can only play captions at about 5 fps, but it works with browser version of YouTube.\n\nOriginal: https://youtu.be/FtutLA63Cp8 https://nico.ms/sm8628149\nCaption videos playlist: https://www.youtube.com/playlist?list=PLMb28FDEyWTm9Nz8k23YyC5Cd3hLYIjrb",
        "videoUrl": "https://www.youtube.com/watch?v=G8DjxY8FNKA",
        "previewImgUrl": "https://img.youtube.com/vi/G8DjxY8FNKA/hqdefault.jpg",
        "authorId": 80,
        "id": 90
    },
    {
        "title": "Bad Apple!! played on Minecraft sheep [original]",
        "description": "I wrote this plugin for Bapcraft, join at mc.bapcraft.org.  https://discord.gg/APZ388V\n\nGitLab repo: https://gitlab.com/delbonis/rottenplayer\n\nBad Apple!! is a song from the Touhou game series.  It's developed a culture of being played on things that normally aren't made to play videos, like sheep.  A lot like how people run Doom on things that weren't meant to run Doom, like printers.",
        "videoUrl": "https://www.youtube.com/watch?v=tO6sfku_1b8",
        "previewImgUrl": "https://img.youtube.com/vi/tO6sfku_1b8/hqdefault.jpg",
        "authorId": 81,
        "id": 91
    },
    {
        "title": "Bad Apple!! in Firefox browser tabs",
        "description": "189 tabs, 1 bad apple. video is sped up 20x\nmade with ffmpeg, javascript and a dying cpu\noriginal pv: https://youtu.be/FtutLA63Cp8\n\nq: bro?? ram usage???\na: ~4gb. thanks firefox :)\n\nq: why/how does your taskbar look like that?\na: taskbarX (https://chrisandriessen.nl/taskbarx)\n\nq: why not chrome?\na: let's be real, you know the answer\n\nq: why?\na: i'll be honest. i just thought it'd look cool",
        "videoUrl": "https://www.youtube.com/watch?v=JjTqE69ZkUs",
        "previewImgUrl": "https://img.youtube.com/vi/JjTqE69ZkUs/hqdefault.jpg",
        "authorId": 82,
        "id": 92
    },
    {
        "title": "Bad Apple!! but it's a VS Code Auto-Formatter",
        "description": "Tabs or spaces? Please. I format my code as the frames of the Bad Apple!! PV. Note that this auto-formatter actually breaks the formatted code as when I implemented it to properly tokenise the code as a real formatter would do, the inconsistent line lengths and whitespaces kind of messed up the Bad Apple!! frames. Video sped up. Uses Visual Studio Code Extension API with TypeScript, Node.js, Python PIL.\n\nCheck out my other stuff on GitHub https://github.com/kevinjycui\nDiscord server: https://discord.gg/WEykWbjkR2",
        "videoUrl": "https://www.youtube.com/watch?v=cmpg-qiPYa8",
        "previewImgUrl": "https://img.youtube.com/vi/cmpg-qiPYa8/hqdefault.jpg",
        "authorId": 53,
        "id": 93
    },
    {
        "title": "Bad Apple!! played on WeBWork Homework System (Flash Warning)",
        "description": "Do all university math courses use this same website? Also, thanks for 100 subscribers! I appreciate the online validation. I'm afraid to admit that this one was the most significantly sped up one so far, as displaying it any faster than 1 frame per 3 seconds made the end result even more flashy than it already is. Uses Selenium and Python PIL. \n\nCheck out my other stuff on GitHub https://github.com/kevinjycui\nDiscord server: https://discord.gg/WEykWbjkR2",
        "videoUrl": "https://www.youtube.com/watch?v=pctF1w4utug",
        "previewImgUrl": "https://img.youtube.com/vi/pctF1w4utug/hqdefault.jpg",
        "authorId": 53,
        "id": 94
    },
    {
        "title": "Bad Apple but it's in Discord messages but in REAL TIME!!!",
        "description": "Bad Apple, 51x38 @ 10 fps, rasterized into unicode squares in Discord messages.\nNo video editing was done besides trimming and adding the audio.\nShare this video so it gets more views than the inferior ones!\n\n\nThis IS api abuse, as 15 bots were used to circumvent the rate limit, so I do not recommend doing this! However, only 2,191 messages were sent totalling about 12MB, which were later deleted, so I think the impact on Discord's infrastructure was negligible, especially considering that Discord constantly processes thousands of messages per second (if not tens or hundreds of thousands). No relevant spikes were visible on the API response time graph.\n\nSource code now available: https://gitea.moe/lamp/bad-apple-in-discord. It's super simple.\n\nOriginal video: https://www.youtube.com/watch?v=FtutLA63Cp8",
        "videoUrl": "https://www.youtube.com/watch?v=TfS1GIr4kW4",
        "previewImgUrl": "https://img.youtube.com/vi/TfS1GIr4kW4/hqdefault.jpg",
        "authorId": 83,
        "id": 95
    },
    {
        "title": "[Touhou] Bad Apple - 8Bit ZX Spectrum Rendition via DivIDE",
        "description": "Seeing as it's gonna soon be ten years since I uploaded the Famicom edition of this (https://youtu.be/cuMkI6cDKMs), and that it's remained popular with people from all over the world enjoying it, I thought I would upload a sequel video. Sadly my Powerpak cartridge no longer functions so I thought I'd do a version that was made for the first computer I owned way back in 1984, the Sinclair ZX Spectrum. This actual ZX Spectrum is not an original, it's a \"Harlequin 128\" kit, which gives you the expanded ram and AY-3 soundchip that the 128 series computers had but in a form factor that fits into the original rubber key casing. But hold up! This isn't even an original case, it's a modern remake made from translucent plastic. It's very snazzy.\n\nI hope you all enjoy this video. I may make more for other systems in the future. Maybe in even less than ten years.\n\nFor this ZX Spectrum version, the coding was by Noby Noblnoch and music by Aki. You can find it here on Pouet - http://www.pouet.net/prod.php?which=69345",
        "videoUrl": "https://www.youtube.com/watch?v=O-GGADUYmqo",
        "previewImgUrl": "https://img.youtube.com/vi/O-GGADUYmqo/hqdefault.jpg",
        "authorId": 1,
        "id": 96
    },
    {
        "title": "Pushing boundaries further: Bad Apple!! + ATMega328P (better audio) (Arduino)",
        "description": "Expand for more info. This is a continuation to my first video which explains how this works, but this time the framerate has been increased, the audio is much better yet everything is still going over the serial connection! It sounds much better in real life than the camera gives it credit for - the speaker moves around the desk when the bass hits which is why my calculator is sitting on the lid :)\n\nOriginal video where I explain the concept / how I achieved this: https://www.youtube.com/watch?v=8iLA1E4EweE",
        "videoUrl": "https://www.youtube.com/watch?v=VDYdkcZsE9A",
        "previewImgUrl": "https://img.youtube.com/vi/VDYdkcZsE9A/hqdefault.jpg",
        "authorId": 84,
        "id": 97
    },
    {
        "title": "\u30ad\u30e3\u30e9\u30af\u30bfLCD\u300cPLCD1602\u300d\u3067 Bad Apple!!",
        "description": "\u30ad\u30e3\u30e9\u30af\u30bfLCD\u3092\u89e6\u3063\u3066\u3044\u305f\u3089\u3001\u3044\u3064\u306e\u9593\u306b\u304b\u3042\u306eBad Apple!!\u306e\u5f71\u7d75\u304c\u52d5\u304f\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3057\u305f\u2026\uff01\uff1f\n\u2193\u8a73\u7d30\n\n\u52d5\u753b\u3067\u306f16x2\u306e\u8868\u793a\u9818\u57df\u306e\u5de6\u50744x2\u306e\u9818\u57df\u3092\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306b\u3001\u53f3\u507411x2\u306e\u9818\u57df\u3092\u6b4c\u8a5e\u8868\u793a\u9818\u57df\u3068\u3057\u3066\u3044\u307e\u3059\u3002\n\u97f3\u697d\u306f\u30aa\u30ea\u30b8\u30ca\u30eb\u52d5\u753b\u3092\u518d\u751f\u3057\u306a\u304c\u3089\u9332\u753b\u3057\u3001\u958b\u59cb\u30bf\u30a4\u30df\u30f3\u30b0\u3060\u3051\u624b\u52d5\u3067\u8abf\u6574\u3057\u3066\u3044\u307e\u3059\u3002\n\n\u3068\u3053\u308d\u3067\u3053\u306e\u52d5\u753b\u3001\u4f55\u304b\u304a\u304b\u3057\u3044\u3068\u3053\u308d\u304c\u3042\u308b\u306e\u3067\u3059\u304c\u2026\u5206\u304b\u308b\u3067\u3057\u3087\u3046\u304b\uff1f\n\n\u7d20\u6674\u3089\u3057\u3044\u52d5\u753b\u3068\u3001\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u305f\u3061\u306b\u3001\u611f\u8b1d\u3002\n\n* \u672c\u52d5\u753b\u3067\u4f7f\u7528\u3057\u305f\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\n* [VOL-18]PLCD1602/\u682a\u5f0f\u4f1a\u793e\u30af\u30ec\u30a4\u30f3\u96fb\u5b50\nhttps://crane-elec.co.jp/products/vol-18/\n\n* Seeeduino XIAO/Seeed\u682a\u5f0f\u4f1a\u793e\nhttps://jp.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html\n\n* Seeeduino XIAO \u62e1\u5f35\u30dc\u30fc\u30c9/Seeed\u682a\u5f0f\u4f1a\u793e\nhttps://jp.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html\n\n* GROVE - 4\u30d4\u30f3\u30b1\u30fc\u30d6\u30eb/Seeed\u682a\u5f0f\u4f1a\u793e\nhttps://jp.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-5-PCs-pack.html\nhttps://jp.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-5-PCs-Pack-p-749.html\n\n* USB Type-C\u30b1\u30fc\u30d6\u30eb\uff08Seeeduino XIAO\u3078\u306e\u7d66\u96fb\u7528\uff09\n\n\n* \u672c\u5bb6\n\u3010\u6771\u65b9\u3011Bad Apple!!\u3000\uff30\uff36\u3010\u5f71\u7d75\u3011\nhttps://www.nicovideo.jp/watch/sm8628149\n\n* \u95a2\u9023\u30c4\u30a4\u30fc\u30c8\n\n\u52d5\u753b\u7b2c3\u5f3e\uff1a\u30ad\u30e3\u30e9\u30af\u30bfLCD\u300cPLCD1602\u300d\u3067 Bad Apple!!\nhttps://twitter.com/niszet0/status/1385163972203134979?s=20\n\n\u52d5\u753b\u7b2c2\u5f3e\uff1a\u30ad\u30e3\u30e9\u30af\u30bfLCD\u3067\u9ad8\u901f\u6587\u5b57\u30b9\u30af\u30ed\u30fc\u30eb\nhttps://twitter.com/niszet0/status/1384348292348211201\n\n\u52d5\u753b\u7b2c1\u5f3e\uff1a\u30ad\u30e3\u30e9\u30af\u30bfLCD\u3067\u6587\u5b57\u30b9\u30af\u30ed\u30fc\u30eb\nhttps://twitter.com/niszet0/status/1382629818534006786\n\n\u7b2c1\u5f3e\u306e\u89e3\u8aac\uff08\u51685\u56de\uff09\nhttps://niszet.hatenablog.com/entry/2021/04/19/124703\n\n\u7b2c2\u5f3e\u306e\u89e3\u8aac\nhttps://niszet.hatenablog.com/entry/2021/04/21/193502",
        "videoUrl": "https://www.youtube.com/watch?v=kDNEpIZQb98",
        "previewImgUrl": "https://img.youtube.com/vi/kDNEpIZQb98/hqdefault.jpg",
        "authorId": 85,
        "id": 98
    },
    {
        "title": "Bad apple on windows 10 task manager.",
        "description": "bad apple on task manager\n\n\nDiscord server: https://discord.com/invite/RrB6uJMqNw\nSource code: https://github.com/turtiustrek/taskmanager\nbad apple on remote  control: https://www.youtube.com/watch?v=w0ZJj8QsBA8\nfollow me on twitter: https://twitter.com/turtiust/\n\nThis video was sped up 4.5314 times due to windows imprecise timer.\nthe frames of the big apple video were extracted from kdenlive.\n\n\nBad apple: https://www.nicovideo.jp/watch/sm8628149\n\ninspired by: https://www.youtube.com/watch?v=h39xbVrGYGQ \nalso: https://www.youtube.com/watch?v=RY5_gutA_Vw",
        "videoUrl": "https://www.youtube.com/watch?v=sBeI30ccb6g",
        "previewImgUrl": "https://img.youtube.com/vi/sBeI30ccb6g/hqdefault.jpg",
        "authorId": 86,
        "id": 99
    },
    {
        "title": "Bad Apple!! Played on Cloud",
        "description": "Rendering Bad Apple!! with sky and cloud generated by Nvidia GauGAN\n\nThe second half of the video is the comparison.\n\nNvidia GauGAN:\nhttp://nvidia-research-mingyuliu.com/gaugan/\n\nBad Apple!! - Full Version w/video [Lyrics in Romaji, Translation in English]:\nhttps://www.youtube.com/watch?v=9lNZ_Rnr7Jc\n\nOf course, I wrote a script to automate things. There are over 6000 frames.\n\nIf you like this video, please consider subscribing. I will continue uploading interesting stuff.",
        "videoUrl": "https://www.youtube.com/watch?v=baRUqyDVKSE",
        "previewImgUrl": "https://img.youtube.com/vi/baRUqyDVKSE/hqdefault.jpg",
        "authorId": 87,
        "id": 100
    },
    {
        "title": "Bad Apple!! but it's ReShade",
        "description": "https://github.com/kingeric1992/bad-apple-shader",
        "videoUrl": "https://www.youtube.com/watch?v=goZAhMMr8Go",
        "previewImgUrl": "https://img.youtube.com/vi/goZAhMMr8Go/hqdefault.jpg",
        "authorId": 88,
        "id": 101
    },
    {
        "title": "Bad apple on pinart in blender",
        "description": "I just created a plane with displacement...\nIn the end, I concluded that a bad apple is great for repeating something like what I saw here:\nhttps://www.youtube.com/watch?v=mDsqpeiTqg8\n\nTitle\uff1a Bad Apple!! feat.nomico(2014 Refix)\nAlbum\uff1a FLASHLIGHT\nCircle\uff1a Alstroemeria Records\n\nTrack Origin\uff1a \u6771\u65b9\u5e7b\u60f3\u90f7\u3000\uff5e Lotus Land Story (Touhou Gensoukyou, meaning \"Fantastic Home Village of the East\") \uff0f Bad Apple!! \u300c\"Bad Apple!!\" in the music room.\u300d\n\noriginal video: https://www.youtube.com/watch?v=FtutLA63Cp8",
        "videoUrl": "https://www.youtube.com/watch?v=LosOIFUJKu8",
        "previewImgUrl": "https://img.youtube.com/vi/LosOIFUJKu8/hqdefault.jpg",
        "authorId": 89,
        "id": 102
    },
    {
        "title": "Video on oscilloscope",
        "description": "Inspired by this: youtu.be/7pzvEouWino\nDetails on how I made it: http://boris0.blogspot.com/2013/09/video-on-oscilloscope.html\nNote: it looks like the video is losing frames around 0:30, but this is from the original video and have nothing to do with my adapter.",
        "videoUrl": "https://www.youtube.com/watch?v=24XJYhn6NwM",
        "previewImgUrl": "https://img.youtube.com/vi/24XJYhn6NwM/hqdefault.jpg",
        "authorId": 90,
        "id": 103
    },
    {
        "title": "Bad Apple!! but it's OS/400 (IBM i) [Touhou - \u3068\u3046\u307b\u3046 - \u6771\u65b9 - T\u014dh\u014d]",
        "description": "The one and only \"Bad Apple!!\" ported to IBM i (OS/400) system.\nMusic: Zun (Jun'ya \u014cta) and @AlstroemeriaRecords  ft. Nomico - Bad Apple!! (Luigi Elettrico remix)\nSource code: https://gitlab.com/luigi.elettrico/ba_os400\n\n#BadApple #Touhou #touhouproject",
        "videoUrl": "https://www.youtube.com/watch?v=8_TddbUzEAo",
        "previewImgUrl": "https://img.youtube.com/vi/8_TddbUzEAo/hqdefault.jpg",
        "authorId": 91,
        "id": 104
    },
    {
        "title": "Bad Apple on HTML Checkboxes",
        "description": "Try it at: https://www.bryanbraun.com/checkboxland/docs/demos/bad-apple/",
        "videoUrl": "https://www.youtube.com/watch?v=ZGvXdYXami4",
        "previewImgUrl": "https://img.youtube.com/vi/ZGvXdYXami4/hqdefault.jpg",
        "authorId": 92,
        "id": 105
    },
    {
        "title": "BAD APPLE on TESLA COIL TRIO",
        "description": "\ud83d\udc49Challenge accepted: Touhou - Bad Apple on musical tesla coils!\nPlease, subscribe to collaborate even more with new videos.\n\nFor those who did not understand what is going on this video, here's a brief explanation: The main loud music really comes from the tesla coil sparks. They are literally playing the music due to the programmed phase, pulse width and firing frequency! So, there are no speakers, no audio / video special effects. It looks even better in person and sounds almost the same, just louder than people expect!\n\nI hope you all enjoy this version I worked for musical tesla coils! \n\nSpecial thanks to all my patrons:\n-Logan Chase\n-Philip Andersen\n-Pete Arundell\n-Cristian Foxy Tejada\n-DankPods\n-IceBear\n-Katrina Ruff\n-Simon Spies\n-Stefan Fountain\n-Jan Pijpers\n-GGorAA Official\n\n\ud83d\udc49Instagram: https://www.instagram.com/franzolielectronics\n\ud83d\udc49Facebook: https://www.facebook.com/franzolielectronics\n\ud83d\udc49Reddit: https://www.reddit.com/user/franzolielectronics\n\ud83d\udc49Patreon: https://www.patreon.com/franzolielectronics\n\n\ud83d\udc49Donations:(PayPal): franzolielectronics@gmail.com\n\nAny question? feel free to comment on.\n\nPartners:  @arcattackmusic \nA cool electronics channel to check out:  @KaizerPowerElectronicsDk \nMore info:\nCamera: Lumix LX100 + full-spectrum image sensor mod;\nAudio Recorder: Zoom H1n.\n\n#badapple #teslacoils #tesla",
        "videoUrl": "https://www.youtube.com/watch?v=YZkPkUXY2rk",
        "previewImgUrl": "https://img.youtube.com/vi/YZkPkUXY2rk/hqdefault.jpg",
        "authorId": 93,
        "id": 106
    },
    {
        "title": "Rio plays bad apple",
        "description": "The playback is synced using bc and selective range prints from sed.\n\n\nSmall writeup:\ngemini://posixcafe.org/blogs/badapple.gem\nor\nhttps://portal.mozz.us/gemini/posixcafe.org/blogs/badapple.gem",
        "videoUrl": "https://www.youtube.com/watch?v=ppsZSBUkpF0",
        "previewImgUrl": "https://img.youtube.com/vi/ppsZSBUkpF0/hqdefault.jpg",
        "authorId": 94,
        "id": 107
    },
    {
        "title": "\u3010Touhou\u3011Bad Apple!! Play in Unity3D Debug Console !",
        "description": "#BadApple #Unity3D #Debug\nUnity3D \u7684 Debug Console \u9664\u4e86\u7528\u4f86\u770b\u4ee4\u4eba\u982d\u75db\u7684bugs \u5916\uff0c\n\u9084\u53ef\u4ee5\u7528\u4f86\u64ad Bad Apple !! :D\n\nIn the Unity3D's Debug Console, you can looking at the troublesome bugs\nYou also can watch Bad Apple !! XD\n\n---\n\n[\u539f\u66f2]\n[Alstroemeria Records] Lovelight - Bad Apple!! feat. nomico\nhttps://thwiki.cc/Lovelight\n\n\u793e\u5718\uff1aAlstroemeria Records\n\u7de8\u66f2\uff1aMasayoshi Minoshima\n\u6f14\u5531\uff1anomico\n\u4f5c\u8a5e\uff1aHaruka\n\u539f\u66f2\uff1aBad Apple!! ( Detail : https://thwiki.cc/Bad_Apple!! )",
        "videoUrl": "https://www.youtube.com/watch?v=aTDPRN2GoCw",
        "previewImgUrl": "https://img.youtube.com/vi/aTDPRN2GoCw/hqdefault.jpg",
        "authorId": 95,
        "id": 108
    },
    {
        "title": "UVB-76 sings bad apple 22/01/22",
        "description": "Real",
        "videoUrl": "https://www.youtube.com/watch?v=CJWAxOqMCvk",
        "previewImgUrl": "https://img.youtube.com/vi/CJWAxOqMCvk/hqdefault.jpg",
        "authorId": 96,
        "id": 109
    },
    {
        "title": "Bad Apple on UVB-76 (4.625khz) Jan 23 2022",
        "description": "For some context, at the time of this recording there were tensions between Russia and Ukraine. UVB-76 is a russian military station and some people were transmitting on the frequency due to the russia/ukraine stuff. In this recording one person was transmitting various music and someone else was trying to jam the signal (the noise that starts at 1:08)\n\nhttps://kotaku.com/numbers-station-russian-rickroll-uvb-76-hackers-gangnam-1848399390\n\nThis was recorded from SWL Channel's UVB-76 livestream \nhttps://www.youtube.com/watch?v=fUgzv-8_EMc",
        "videoUrl": "https://www.youtube.com/watch?v=wb9sakVGwGY",
        "previewImgUrl": "https://img.youtube.com/vi/wb9sakVGwGY/hqdefault.jpg",
        "authorId": 10,
        "id": 110
    },
    {
        "title": "Bad Apple ASCII",
        "description": "First Test of Bad Apple in ASCII Art with python.",
        "videoUrl": "https://www.youtube.com/watch?v=_1hwllfZ7mo",
        "previewImgUrl": "https://img.youtube.com/vi/_1hwllfZ7mo/hqdefault.jpg",
        "authorId": 97,
        "id": 111
    },
    {
        "title": "Bad Apple!! played in Build A Boat For Treasure (2100+ Delay Blocks)",
        "description": "Parts of the video are sped up as some frames load slower than others\n\nTotal time taken to build this: \n20 days (started on 14 November)\n108 (average) frames a day\n\nMain blocks used:\n2162 delay blocks\n192 light bulbs (50% transparency)\n\n- How did I animate Bad Apple into Build A Boat For Treasure?\nWell the logic is simple but the process is lengthy. Mainly because all of these are done manually. Firstly I downloaded the original Bad Apple video then used mosaic to pixelate it to 16x12 pixels. Then I limit the color depth to 1bit so that no gray pixels are visible and converted it to 10 fps. Afterwards the frames of the video are extracted into 2100+ of images. Light bulbs act as pixels for the display and delay blocks act as frames. I overlay the frames using Sony Sketch to compare every frame and make changes to the light bulbs on the display.\n\nOriginal mv: https://youtu.be/i41KoE0iMYU\n\n#roblox #buildaboatfortreasure #badapple",
        "videoUrl": "https://www.youtube.com/watch?v=lUCGb611F-s",
        "previewImgUrl": "https://img.youtube.com/vi/lUCGb611F-s/hqdefault.jpg",
        "authorId": 98,
        "id": 112
    },
    {
        "title": "Bad Apple on 32K EEPROM (No CPU)",
        "description": "Full details:\nhttps://excess.org/bad-apple/\n\nFeaturing:\n\n- complete Bad Apple video playback (3m36s)\n- no CPU/microcontroller\n- video stored on one AT28C256 32K EEPROM (below screen)\n- video displayed on a 20x4 LCD character display with an HD44780 controller (8 CGRAM characters, 8x4 video area)\n- clock module with 555 timer running at 150Hz\n- 16-bit counter with 74LS163 ICs, 15 bits set address of video EEPROM, high bit stops clock module\n- 256-byte lookup table on a second EEPROM (left of screen) converts 8-bit video playback EEPROM output to 9-bit LCD input (RS + D0 through D7)\n\nBad Apple on Everything playlist: \nhttps://www.youtube.com/playlist?list=PLajlU5EKJVdonUGTEc7B-0YqElDlz9Sf9\n\n#ElectronicsCreators",
        "videoUrl": "https://www.youtube.com/watch?v=TkhVqe8Z2lY",
        "previewImgUrl": "https://img.youtube.com/vi/TkhVqe8Z2lY/hqdefault.jpg",
        "authorId": 99,
        "id": 113
    },
    {
        "title": "Bad Apple!! played on Bad Apple!!",
        "description": "How deep can we go?\n\nOriginal: https://www.bilibili.com/video/BV1hu411m713\nCreator: Grieffo",
        "videoUrl": "https://www.youtube.com/watch?v=c-7G_iiWmZs",
        "previewImgUrl": "https://img.youtube.com/vi/c-7G_iiWmZs/hqdefault.jpg",
        "authorId": 100,
        "id": 114
    },
    {
        "title": "BAD APPLE demo on 2.7\" Sharp memory display",
        "description": "The BAD APPLE demo looks great on these sharp memory displays - the contrast really shows well! We used a 128x64 video and scaled it up 3x to the 400x240 sharp display, that's why its a little blocky. Looks fab with a nice fast refresh - its the same display in the Playdate handheld game. Available now at https://www.adafruit.com/product/4694\n\n#adafruit #sharp #display\n\nVisit the Adafruit shop online - http://www.adafruit.com\n\n-----------------------------------------\nLIVE CHAT IS HERE! http://adafru.it/discord\n\nAdafruit on Instagram: https://www.instagram.com/adafruit\n\nSubscribe to Adafruit on YouTube: http://adafru.it/subscribe\n\nNew tutorials on the Adafruit Learning System: http://learn.adafruit.com/\n-----------------------------------------",
        "videoUrl": "https://www.youtube.com/watch?v=B4GrfLQImYg",
        "previewImgUrl": "https://img.youtube.com/vi/B4GrfLQImYg/hqdefault.jpg",
        "authorId": 101,
        "id": 115
    },
    {
        "title": "Bad Apple!! played on Desmos but it's high quality with Bezier Curves",
        "description": "The squeakquel. Taking a bezier curve approach as opposed to linear approximations. The remix used in this video is slightly different from the song, but it's the only way I could get around copyright claims. Video sped up. Uses Desmos API, Potrace, Python PIL.\n\nDiscord server: https://discord.gg/WEykWbjkR2\nCheck out my other stuff on GitHub: https://github.com/kevinjycui\n\nMusic used: ZahranW - Bad Apple!! 8bit remix (Touhou: Lotus Land Story) https://www.youtube.com/watch?v=lNm85uXR3RM",
        "videoUrl": "https://www.youtube.com/watch?v=MVrNn5TuMkY",
        "previewImgUrl": "https://img.youtube.com/vi/MVrNn5TuMkY/hqdefault.jpg",
        "authorId": 53,
        "id": 116
    },
    {
        "title": "Bad Apple on an E-ink E paper display (2022)",
        "description": "I made a video about playing back Bad Apple on Eink screens almost 5 years ago (https://www.youtube.com/watch?v=KS8M_MV3Xhw), it was running at 2.4FPS. This time I present you E-Ink screen running at 60FPS. The video is not edited in anyway and uploaded directly from my camera to YouTube. This is part of effort to build an open source Eink monitor and laptop. I will make a video in details about how this is done in the future. But for now, feel free to take a look at www.modos.tech and learn a bit more about the project background.",
        "videoUrl": "https://www.youtube.com/watch?v=XduK7wn9SE4",
        "previewImgUrl": "https://img.youtube.com/vi/XduK7wn9SE4/hqdefault.jpg",
        "authorId": 102,
        "id": 117
    },
    {
        "title": "Bad Apple!! but it's on a 3d printer",
        "description": "Bad Apple!!, but i played it on my 3d printer. 2 axis are active, so it can play 2 notes at a time. \nUnfortunately I could not figure out a way to play the video on the printer's screen.\nThe strange rattling is from the cheap 3d printer linear bearings. They do not make drylin bushings in the proper size. That's why it sounds so weird, they are lubed and stuff, just sound terrible.\n\nIf you want to play it on your printer, you can use https://www.ultimatesolver.com/en/midi2gcode to convert midis to GCode. THIS IS NOT WHAT I USED because it doesn't have pausing support, which means that there are no pauses in the music. I instead used a python script, but I can't upload it because i hard coded my printer settings and i don't feel like making them easy to change.\n\nIf you like this video, be sure to subscribe for more similar content.\n\nCheck out my twitter: https://twitter.com/JackLuckSack\nI sometimes stream on twitch: https://www.twitch.tv/jacklucksack",
        "videoUrl": "https://www.youtube.com/watch?v=qqium4Ekx3A",
        "previewImgUrl": "https://img.youtube.com/vi/qqium4Ekx3A/hqdefault.jpg",
        "authorId": 103,
        "id": 118
    },
    {
        "title": "Bad Apple on LM3S8962 evaluation board",
        "description": "Source code: https://github.com/leadpogrommer/BadApple-LM3S8962",
        "videoUrl": "https://www.youtube.com/watch?v=5OfAESAO6eE",
        "previewImgUrl": "https://img.youtube.com/vi/5OfAESAO6eE/hqdefault.jpg",
        "authorId": 104,
        "id": 119
    },
    {
        "title": "bad apple in terminal",
        "description": "",
        "videoUrl": "https://www.youtube.com/watch?v=NsxNIYuEKZE",
        "previewImgUrl": "https://img.youtube.com/vi/NsxNIYuEKZE/hqdefault.jpg",
        "authorId": 105,
        "id": 120
    },
    {
        "title": "Hand Drawing a RISC V CPU and Playing Bad Apple on It",
        "description": "\u25b9Using RV32I ISA. Other instructions are not tested yet.\n\u25b9Planning to build a real one in the recent future.\n\u25b9Github: https://github.com/T-K-233/RISC-V-Single-Cycle-CPU",
        "videoUrl": "https://www.youtube.com/watch?v=1OfeswjPZuw",
        "previewImgUrl": "https://img.youtube.com/vi/1OfeswjPZuw/hqdefault.jpg",
        "authorId": 106,
        "id": 121
    },
    {
        "title": "36 - Bad Apple on a NABU Computer (prototype)",
        "description": "My first draft of Bad Apple running on the NABU Computer... coming to an Internet Adapter near you! Subscribe to my channel to get an update on the full release. The audio code is in progress and will be completed for tomorrow's video!",
        "videoUrl": "https://www.youtube.com/watch?v=WVk3NAegFVQ",
        "previewImgUrl": "https://img.youtube.com/vi/WVk3NAegFVQ/hqdefault.jpg",
        "authorId": 107,
        "id": 122
    },
    {
        "title": "Bad Apple PV \u5f71\u7d75 on \u30aa\u30b7\u30ed\u30b9\u30b3\u30fc\u30d7",
        "description": "Bad Apple PV(\u5f71\u7d75)\u3092\u3000STM32 Primer2\u3092\u4f7f\u3063\u3066\u30aa\u30b7\u30ed\u30b9\u30b3\u30fc\u30d7\u306b\u8868\u793a\u3055\u305b\u3066\u3044\u307e\u3059\u3002\n\u97f3\u306fSTM32Primer2\u304b\u3089\u51fa\u3066\u3044\u307e\u3059\u3002\n\u3084\u3063\u3068\u30aa\u30b7\u30ed\u306b\u52d5\u753b\u304c\u51fa\u3066\u3044\u308b\u72b6\u614b\u3067\u3001\u307e\u3060DA\u306e\u51fa\u529b\u304c\u9045\u3044\u306e\u3067\u8907\u96d1\u306a\u753b\u9762\u306b\u306a\u308b\u3068\u97f3\u3082\u542b\u3081\u3066\u9045\u304f\u306a\u308a\u307e\u3059\u3002\n\u3042\u3068\u3001\u51fa\u529b\u306e\u30ce\u30a4\u30ba\u304c\u9177\u3044\u306e\u3067\u3059\u304c\u3001\u7d75\u306b\u3057\u3066\u307f\u308b\u3068\u7dda\u304c\u592a\u304f\u306a\u308b\u3060\u3051\u3067\u6848\u5916\u6c17\u306b\u306a\u308a\u307e\u305b\u3093\u3002\u3000\u3067\u3082\u3001\u30ce\u30a4\u30ba\u306f\u6e1b\u3089\u3057\u3066\u307f\u305f\u3044\u3067\u3059\u3002",
        "videoUrl": "https://www.youtube.com/watch?v=fUZyWGCrMCg",
        "previewImgUrl": "https://img.youtube.com/vi/fUZyWGCrMCg/hqdefault.jpg",
        "authorId": 108,
        "id": 123
    },
    {
        "title": "Bad Apple but its VIDEO is ported to Famitracker",
        "description": "\"Bad Apple!!\" is originally the stage 3 theme from Touhou Gensoukyou: Lotus Land Story by ZUN,  but it is probably better known for the arrangement \"Bad Apple ft. Nomico\" by Alstroemeria Records and the shadow art video made for it. The audio is an original 8-bit remix by me, mostly based on the Alstroemeria Records arrangement, for 2A03 + VRC6 + MMC5 + 4-N163 + FDS + S5B.\n\nI've never used more than one expansion chip at a time before, but the project called for it; if I'm using 18 channels for the sake of cramming a video in there, it feels silly to not to have them play audio too. It also gave me a way to make my cover just a little bit different from many of the other covers already on YouTube (I went through dozens; only one was multichip and still used fewer chips than mine), when the need to sync my cover up with the visuals meant I couldn't alter the tempo or song structure at all. For this reason, I also decided to use the original melody in the second half.\n\nThere is one caveat worth mentioning: a song in Famitracker can only have 256 patterns. Since I'm using one pattern per frame, and way more than 256 frames, it was unavoidable to break it down into segments. For an uninterrupted viewing experience, I edited the segments together in post, and overlaid a raw export of the audio over it at the end. The whole thing easily fit into a single module, though.\n\nOne other minor thing is, because Famitracker centers the currently playing row, I had to make the Famitracker window very tall. The bottom was pretty much just empty space, though, so I cropped it out of the final video.\n\nThis module was made by using a Dxx effect to skip to the bottom row of each frame, which is where the actual musical commands are. Bad Apple ft. Nomico is at 138 BPM, and a [7,6] groove achieves an extremely close 138.46 BPM. This means the framerate is 9.6fps, which is not as high as I would have liked, but more wasn't really achievable. In theory, you can set the speed to 1 and achieve 60fps, but Famitracker simply isn't designed for video playback and therefore just won't render that many frames that fast\u2014at least, not at the 160x120 resolution I'm using here.\n\nThis idea was inspired in part by pigdevil2010's port of Bad Apple to ImpulseTracker: https://www.youtube.com/watch?v=SDvk3aL78fI\n\nHere are the modules, for DN-Famitracker 0.5.0.0. One contains the audio only, and the other includes the video. They are not compatible with previous versions of DN-Famitracker, or previous Famitracker forks. The Python script I used to generate the video module from the audio module and a folder full of video stills is available as well.\n\nRepository with all files: https://github.com/wildmatsu/BadAppleFamitrackerConverter\nModule with Video and Audio: http://wildmatsu.xyz/fami/BadAppleVideo.zip\nModule with Audio Only: http://wildmatsu.xyz/fami/BadAppleAudio.dnm\nSource Code (Archive): http://wildmatsu.xyz/fami/BAFTConverter.zip\n\nListen on SoundCloud: https://soundcloud.com/matsumuho/bad-apple",
        "videoUrl": "https://www.youtube.com/watch?v=jm-kJlawmnk",
        "previewImgUrl": "https://img.youtube.com/vi/jm-kJlawmnk/hqdefault.jpg",
        "authorId": 109,
        "id": 124
    },
    {
        "title": "Bad Apple!! but it's CSGO bullet holes",
        "description": "I used OpenCV's Canny Edge Detection to obtain the coordinates of the edges of each frame, then used pywin32 to move the crosshair to each coordinate. \n\nImportantly, I had to enter the commands in CSGO to remove recoil and bind keys to teleport the player back to the exact position on the map every hour (when the CSGO timer runs out).\n\nMaybe I'll do a video on the process if anyone wants to try it out as well.\n\nI'll clean up the code and release the GitHub repo soon for anyone interested!\n\nBad Apple!! - https://www.youtube.com/watch?v=FtutLA63Cp8",
        "videoUrl": "https://www.youtube.com/watch?v=J1AraXmlYqM",
        "previewImgUrl": "https://img.youtube.com/vi/J1AraXmlYqM/hqdefault.jpg",
        "authorId": 110,
        "id": 125
    },
    {
        "title": "Bad Apple but it's played through a phosphor screen",
        "description": "i spent 6 hours on this stupid meme",
        "videoUrl": "https://www.youtube.com/watch?v=6wG4tkYKoVo",
        "previewImgUrl": "https://img.youtube.com/vi/6wG4tkYKoVo/hqdefault.jpg",
        "authorId": 111,
        "id": 126
    },
    {
        "title": "Bad Apple but it's molecular dynamics simulation",
        "description": "A molecular dynamics simulation of 40 000 atoms with Lennard-Jones potential was made in LAMMPS code.\nhttps://www.lammps.org\nVisualization by OVITO.\nhttps://www.ovito.org\n9 hours of simulations and almost the same amount for rendering on Ryzen 5 3600.",
        "videoUrl": "https://www.youtube.com/watch?v=7OUZVY_Iy2w",
        "previewImgUrl": "https://img.youtube.com/vi/7OUZVY_Iy2w/hqdefault.jpg",
        "authorId": 112,
        "id": 127
    },
    {
        "title": "\u3010Touhou\u3011Bad Apple!!\u3000PV\u3010Stylized Shadow Art\u3011 tried to reproduce the NES",
        "description": "I tried to reproduce the badapple NES.\r\nMmc3 using Mapper, PRG-ROM is 512kbyte uses.\r\nThis is the last time around 30fps and 15fps is.\r\nSongs(nsf) is kara, is num_kadoma program works.\r\nThe Twin Famicom  (RGB of output) are used.\r\n\r\nromhere, http://www.geocities.jp/littlimi/bad_apple_2.htm\r\n\r\n\u30d5\u30a1\u30df\u30b3\u30f3\u3067badapple\u3092\u518d\u73fe\u3057\u3066\u307f\u307e\u3057\u305f\u3002\r\n\u30de\u30c3\u30d1\u30fc\u306fmmc3\u3092\u4f7f\u3044\u3001PRG-ROM\u306f512kbyte\u4f7f\u3063\u3066\u3044\u307e\u3059\u3002\r\n\u524d\u56de\u304c\u7d0430fps\u3067\u4eca\u56de\u306f15fps\u3068\u306a\u3063\u3066\u3044\u307e\u3059\u3002\r\nnsf\u306fkara\u3001\u30d7\u30ed\u30b0\u30e9\u30e0\u306fnum_kadoma\u306e\u4f5c\u54c1\u3067\u3059\u3002\r\n\u30d5\u30a1\u30df\u30b3\u30f3\u306f\u30c4\u30a4\u30f3\u30d5\u30a1\u30df\u30b3\u30f3\uff08RGB\u51fa\u529b\u5316\uff09\u3092\u4f7f\u3063\u3066\u3044\u307e\u3059\u3002",
        "videoUrl": "https://www.youtube.com/watch?v=AZehH55i_wg",
        "previewImgUrl": "https://img.youtube.com/vi/AZehH55i_wg/hqdefault.jpg",
        "authorId": 113,
        "id": 128
    },
    {
        "title": "bad apple!! zx spectrum styling",
        "description": "original: https://youtu.be/pLmx6_I1PPQ\n\nStyling video done using img2spectrum converter by Sol_HSA.\nVideo done just for fun by nodeus.\nCU.",
        "videoUrl": "https://www.youtube.com/watch?v=aS43RAqYgvQ",
        "previewImgUrl": "https://img.youtube.com/vi/aS43RAqYgvQ/hqdefault.jpg",
        "authorId": 114,
        "id": 129
    },
    {
        "title": "Bad Apple , but played on apples.",
        "description": "Hai!\n\n(Do not re-upload without permission, Copyright @ Andre Janse van Vuuren / Oby1 2023)\n\nI'm also tutoring Blender now!  Check my community posts for more details!",
        "videoUrl": "https://www.youtube.com/watch?v=ywy-OwHejfs",
        "previewImgUrl": "https://img.youtube.com/vi/ywy-OwHejfs/hqdefault.jpg",
        "authorId": 115,
        "id": 130
    },
    {
        "title": "Bad Apple, played on Bad Apples (as requested)",
        "description": "HAI!",
        "videoUrl": "https://www.youtube.com/watch?v=1cpYLmDbyfg",
        "previewImgUrl": "https://img.youtube.com/vi/1cpYLmDbyfg/hqdefault.jpg",
        "authorId": 115,
        "id": 131
    },
    {
        "title": "Bad Apple!! \u043d\u0430 \u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u0438\u043a\u0430 \u041c\u041a-90",
        "description": "\u041c\u043e\u0451 \u043f\u0435\u0440\u0432\u043e\u0435 \u0434\u0435\u043c\u043e (\u043d\u0443 \u0438\u043b\u0438 \"\u0434\u0435\u043c\u043e\") - \u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u043e\u0435 Bad Apple!! \u043d\u0430 \u041c\u041a-90.\n\u0412\u0438\u0434\u0435\u043e - 120x64 25.6 \u043a\u0430\u0434\u0440\u043e\u0432 \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0443. \u0423\u043f\u0430\u043a\u043e\u0432\u0430\u043d\u043e \u0432\u0430\u0440\u0438\u0430\u0446\u0438\u0435\u0439 LZ77 \u0434\u043e ~775\u041a\u0431.\n\u0417\u0432\u0443\u043a - \u043f\u0441\u0435\u0432\u0434\u043e-\u043f\u043e\u043b\u0438\u0444\u043e\u043d\u0438\u044f \u043f\u043e \u043c\u0435\u0442\u043e\u0434\u0443, \u043f\u0440\u0435\u043a\u0440\u0430\u0441\u043d\u043e \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u043e\u043c\u0443 Shiru \u0432 \u044d\u0442\u043e\u0439 \u0441\u0442\u0430\u0442\u044c\u0435 - https://habr.com/ru/post/438448/, \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0435\u0433\u043e \u0436\u0435 \u043f\u043b\u0430\u0433\u0438\u043d\u0430 PCSPE (\u0441\u043b\u0435\u0433\u043a\u0430 \u0430\u0434\u0430\u043f\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u0434 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0443 \u041c\u041a-90).\n\u0412 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043c\u043e\u0434\u0443\u043b\u044f \u043f\u0430\u043c\u044f\u0442\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f Raspberry Pi Pico (https://github.com/azya52/PIMP)\n\n\u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434 - https://github.com/azya52/MK90/tree/master/BadApple\n\n\u041e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u0432\u0438\u0434\u0435\u043e - https://www.nicovideo.jp/watch/sm8628149\n\u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \"\u0447\u0438\u043f\u0442\u044e\u043d\" \u0432\u0437\u044f\u0442 \u0438\u0437 \u044d\u0442\u043e\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430 - https://github.com/fb39ca4/badapple-ti84, \u043a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u043d\u0435 \u043d\u0430\u0448\u0435\u043b \u043f\u0435\u0440\u0432\u043e\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430.",
        "videoUrl": "https://www.youtube.com/watch?v=1qESkvDjKXA",
        "previewImgUrl": "https://img.youtube.com/vi/1qESkvDjKXA/hqdefault.jpg",
        "authorId": 116,
        "id": 132
    },
    {
        "title": "r/place 2023 - FULL Bad Apple!!",
        "description": "Timelapse by https://www.reddit.com/user/Fmoy/ !!!\n\nhttps://www.reddit.com/r/place/\nhttps://www.reddit.com/r/touhou/\nhttps://www.reddit.com/r/osuplace/\n\nMy website: https://dimden.dev/\nMy Twitter: https://twitter.com/dimdenEFF\nMy Discord: https://discord.gg/k4u7ddk",
        "videoUrl": "https://www.youtube.com/watch?v=3dEbouSn_nI",
        "previewImgUrl": "https://img.youtube.com/vi/3dEbouSn_nI/hqdefault.jpg",
        "authorId": 117,
        "id": 133
    },
    {
        "title": "\u3010\u6771\u65b9\u3011Bad Apple!! on r/Place (by r/Touhou) [FULL RESIZED]",
        "description": "Thank you to everyone at r/Touhou! It was one of the best weekends of my life!\nI only participated but I loved the experience and the Touhou community is wonderful!\nI love you all! (no homo)\nI'm a little sad it's over...\n\nWe need to find a new place to continue our sus discussions lmao\n\nedit : I'm trying to read all your comments but I didn't expect this video to get so many views x) Thank you everyone!\n\noriginal video : https://www.reddit.com/r/touhou/comments/157fgs7/full_animate_bad_apple_is_completed/?utm_source=share&utm_medium=android_app&utm_name=androidcss&utm_term=1&utm_content=1\n\nour reaction : https://www.youtube.com/watch?v=TJNinwUBzEg\nTell him you've come from me :D",
        "videoUrl": "https://www.youtube.com/watch?v=_CTxEMBnjgY",
        "previewImgUrl": "https://img.youtube.com/vi/_CTxEMBnjgY/hqdefault.jpg",
        "authorId": 118,
        "id": 134
    },
    {
        "title": "Bad Apple but it's *literally in* thirty dollar website",
        "description": "painstakingly and manually handmade over the course of 3 months...\n\njust kidding, simply used python to convert the frames to sequences and then automatically load them in the website\n\nsee more: https://vlcoo.net\n\n#thirtydollarwebsite",
        "videoUrl": "https://www.youtube.com/watch?v=8hwya0-45QI",
        "previewImgUrl": "https://img.youtube.com/vi/8hwya0-45QI/hqdefault.jpg",
        "authorId": 119,
        "id": 135
    },
    {
        "title": "Bad Apple!! Running on multiple Windows in Windows...?",
        "description": "Today I was a bored and had a bit of free time, then I suddenly remembered the time I made Bad Apple on Microsoft Excel and wondered on what else It could run. Suprisingly, I found that no one has tried playing this song on multiple Windows in Windows, so... why not do It myself\n\nThis project runs in real time so no time lapses with the music already included and I made It in the Pascal programming language.\n\n- My socials:\nTwitter: @LAVAplanks\n\n- I also added the source code to GitHub, for anyone interested\nhttps://github.com/Codrax/Bad-Apple-Windows\n\nIt's not the best I've written, since It's just a project I quickly put together for fun.",
        "videoUrl": "https://www.youtube.com/watch?v=O4-7uoH1iqM",
        "previewImgUrl": "https://img.youtube.com/vi/O4-7uoH1iqM/hqdefault.jpg",
        "authorId": 120,
        "id": 136
    },
    {
        "title": "Bad Apple !! - Tesla coil + LaserShow",
        "description": "\u3010Playlist\u3011TESLA COIL MUSIC\nhttps://www.youtube.com/watch?v=nNC6aTSKiwk&list=PLVH6wLUHAgyHUrhyylmHXwsJ2_Y9kZ9XI&index=1\n\nMusic: Bad apple !! feat. nomico\n\nORIGINAL SONG\nhttps://www.nicovideo.jp/watch/sm8628149\n\nDRSSTC (v4.0 v4.1)\nInput Voltage: AC80V \nOntime: 70us drum: 400us \nIGBT: 2MBI300N-060 (600V300A) X2 \nResonant capacitor: 6kV 0.2uF  \nResonance frequency: 136KHz\n\n#TOUHOU  #BadApple",
        "videoUrl": "https://www.youtube.com/watch?v=nNC6aTSKiwk",
        "previewImgUrl": "https://img.youtube.com/vi/nNC6aTSKiwk/hqdefault.jpg",
        "authorId": 121,
        "id": 137
    },
    {
        "title": "Bad Apple but every frame is a prime number",
        "description": "Primes generated with pictoprime: https://github.com/TotalTechGeek/pictoprime (and some horrible bash code to make sure it kept going despite errors)\nTime spent generating primes: ~7h\n\nHere are all the frames in text form, if you want to do anything with them such as rendering in a way you prefer or whatever. Each one is on a separate line, but to view the frames you need to line wrap every 64 digits: https://cdn.discordapp.com/attachments/759815411226902529/970159383143141396/prime_apple.txt\n\nImages generated with carbon: https://carbon.now.sh/ (and some horrible bash code generating js code that relied on setTimeout and exceptions)\nTime spent rendering images: ~8h\n\nTotal time spent working on this: ~15h (not a prime!!)\n\nIf you wish to see my insanity in creating this, visit the URCL discord where it all went down: https://discord.gg/8XwVujwCHB\n\nThis is the message that prompted it all, continue reading until you find this video: https://discord.com/channels/758395778376532059/759815411226902529/969636271343431710\n\nAlso, if you really want to see the code, i've posted most of it in the linked discord channel",
        "videoUrl": "https://www.youtube.com/watch?v=FeyYAExxmaY",
        "previewImgUrl": "https://img.youtube.com/vi/FeyYAExxmaY/hqdefault.jpg",
        "authorId": 122,
        "id": 138
    },
    {
        "title": "Bad Apple!! but it's played on Ultimaker Cura",
        "description": "I was going to prepare the files for a different bad apple video, but in doing that I realized that it was fairly easy to play it in Ultimaker Cura. I just converted each frame into an SVG, and then into an STL which I could open with Cura and take a screenshot using a batch file. All of these images are of processed G-Codes, so if I wanted to 3d print the video I could. This video took 5 hours to render, you can watch the clock if you want lol\n\nIf you like this video, be sure to subscribe for more similar content.\n\nCheck out my twitter: https://twitter.com/JackLuckSack\nI sometimes stream on twitch: https://www.twitch.tv/jacklucksack",
        "videoUrl": "https://www.youtube.com/watch?v=Wa8bHcc9FEk",
        "previewImgUrl": "https://img.youtube.com/vi/Wa8bHcc9FEk/hqdefault.jpg",
        "authorId": 103,
        "id": 139
    },
    {
        "title": "bad apple but it's magic eye",
        "description": "numpy magic\nwatch at 720p\nhttps://en.wikipedia.org/wiki/Autostereogram\nbad apple: https://youtu.be/FtutLA63Cp8",
        "videoUrl": "https://www.youtube.com/watch?v=RLuGJGyCS90",
        "previewImgUrl": "https://img.youtube.com/vi/RLuGJGyCS90/hqdefault.jpg",
        "authorId": 123,
        "id": 140
    },
    {
        "title": "bad apple but AI generated",
        "description": "As always way too broke to own anything.\n\n\ngot this from here:\nhttps://mobile.twitter.com/8co28/status/1579800537570344960?t=InzR-6RghXT6wML4sx3mqg&s=19&fbclid=IwAR2jC8qiP4RD6XBZ-pbs78yyv-TMU_tlMoAO1bBCXNucqwy7hZFLKfPhGYk\n\n\n\n\n\n\n\ndo not ask y am still here :skull:",
        "videoUrl": "https://www.youtube.com/watch?v=GXulAMYJAoI",
        "previewImgUrl": "https://img.youtube.com/vi/GXulAMYJAoI/hqdefault.jpg",
        "authorId": 124,
        "id": 141
    },
    {
        "title": "Bad Apple But The Engine Changes Every 10 Seconds",
        "description": "Videos:\nhttps://www.youtube.com/watch?v=i41KoE0iMYU\nhttps://www.youtube.com/watch?v=TANSiebOA5M\nhttps://www.youtube.com/watch?v=n8NQEd1azDs\nhttps://www.youtube.com/watch?v=iV5A-VzKWvw\nhttps://www.youtube.com/watch?v=FdW0XDB928E\nhttps://www.youtube.com/watch?v=Ko9ZA50X71s\nhttps://www.youtube.com/watch?v=SDvk3aL78fI\nhttps://www.youtube.com/watch?v=mZ48vgLvMpY\nhttps://www.youtube.com/watch?v=8I-x6ddqQ5k\nhttps://www.youtube.com/watch?v=41xx6qnSpS0\nhttps://www.youtube.com/watch?v=TfS1GIr4kW4\nhttps://www.youtube.com/watch?v=JjTqE69ZkUs\nhttps://www.youtube.com/watch?v=CDNZx8vSSMo\nhttps://www.youtube.com/watch?v=kK8i4MWa31k\nhttps://www.youtube.com/watch?v=Eq5T9dE58E4\nhttps://www.youtube.com/watch?v=qRdGhHEoj3o\nhttps://www.youtube.com/watch?v=gy3NCr4rX-Y\nhttps://www.youtube.com/watch?v=mvbkrfThGlo\nhttps://www.youtube.com/watch?v=E0h8BUUboP0\nhttps://www.youtube.com/watch?v=sBeI30ccb6g\nhttps://www.youtube.com/watch?v=240Vq6tIxio",
        "videoUrl": "https://www.youtube.com/watch?v=mNNo59ZJbso",
        "previewImgUrl": "https://img.youtube.com/vi/mNNo59ZJbso/hqdefault.jpg",
        "authorId": 125,
        "id": 142
    },
    {
        "title": "Bad Apple!! but rendered with Minecraft Creeper Explosions",
        "description": "Nothing special about this one. It's a bit of a stretch to say inter frame compression, but basically the creeper explosions represent the change in black to white pixels between frames. Video speed adjusted. Uses Java, Maven, Spigot API, Python PIL.\n\nWatch the preamble: https://www.youtube.com/watch?v=Yhv0IyPcFA0\n\nJoin the Discord: https://discord.gg/WEykWbjkR2\u200b\nCheck out my other stuff on GitHub: https://github.com/kevinjycui\n\nI have Twitter too but if you follow me there you get to see me tweet like twice a year",
        "videoUrl": "https://www.youtube.com/watch?v=jC7Y-H60_V0",
        "previewImgUrl": "https://img.youtube.com/vi/jC7Y-H60_V0/hqdefault.jpg",
        "authorId": 53,
        "id": 143
    },
    {
        "title": "Bad Apple!! | Genshin Impact Version",
        "description": "The famous Bad Apple that every fandom has at least a video of.  The reason why I chose this cover is because it is done by Cristina Vee the English VA for Xingqiu and Bennett! \nThis couldn't have been done without these two amazing people Erik-Kun and Stealthless! All credits are below.\nI have personally never played Touhou and know the lore behind it but I've seen a lot of good things from it and was suggested to make this video! \n\nOriginal Bad Apple:\nhttps://www.youtube.com/watch?v=FtutLA63Cp8\n\nStealthless - Bad Apple Original Cover Version\nhttps://www.youtube.com/watch?v=5zI_OYZqnro&t=71s\n\nErik-Kun\nhttps://www.youtube.com/channel/UCHFZ0vv8bYfiagAr8f1zWUw\n\n\u25ba Social Media:\nhttps://www.instagram.com/_yo_its_genji_\nTikTok NoEngrish\n\n\u25ba Discord:\nhttps://discord.gg/NoEngrish\n\n\u25ba Patreon: (18+ Content)\nhttps://patreon.com/NoEngrish\n\n\u25ba Song used:\nBad Apple Cristina Vee Cover - https://www.youtube.com/watch?v=rG-Fs7de_9o\n\n\u25ba Models and props!\nGenshin Weapons | Ailephi & lukatoni5\nApple | Impmagik\nBroom | artimiss1238\nBarbatos Statue| lukatoni5\nSurvival Knife | riveda1972\nKatana | AbyssLeo\nSakura Tree | Haztract\nBoat | o-DSV-o\nVenti's Lyre | Ailephi\nGuitar | MikuPirate\nTrumpet | penguinMMD\nKeyboard | TechArts 3D\nUmbrella | Haztract\nNotebook | Alementiya\nPen | HuamoKimu\nWine Bottle | CherryPieWithPoison\n\n#GenshinImpact\u200b #BadApple\u200b #Touhou",
        "videoUrl": "https://www.youtube.com/watch?v=cXJOLkc3Dhs",
        "previewImgUrl": "https://img.youtube.com/vi/cXJOLkc3Dhs/hqdefault.jpg",
        "authorId": 126,
        "id": 144
    },
    {
        "title": "Bad apple played only with emojis",
        "description": "bad apple (you know, the song) from touhou \nmade in the do not lecture me with your 30$ website gdcolon\n\n(there are so many more remixes and i want to post all of them)\n\n\n\nedit: STOP COMMENTING BUP ITS NOT ORIGINAL I HARDLY EVEN KNOW WHAT IT MEANS",
        "videoUrl": "https://www.youtube.com/watch?v=4BmebGB1-VM",
        "previewImgUrl": "https://img.youtube.com/vi/4BmebGB1-VM/hqdefault.jpg",
        "authorId": 127,
        "id": 145
    },
    {
        "title": "Bad Apple!! but played in a Tetris engine",
        "description": "I don't know if this is impressive or not",
        "videoUrl": "https://www.youtube.com/watch?v=xcxrOi80Hwo",
        "previewImgUrl": "https://img.youtube.com/vi/xcxrOi80Hwo/hqdefault.jpg",
        "authorId": 128,
        "id": 146
    },
    {
        "title": "Bad Apple but the lyrics are describing what happens in the video",
        "description": "\"Unsatisfactory Pippin\" - a literal music video of Bad Apple (https://www.youtube.com/watch?v=FtutLA63Cp8)\n\nA demoscene release by Gasman presented at FieldFX 2020.\n\n(update 2021-02-19) ONE MILLION VIEWS! Thanks everyone for making this happen :-) It seems a bit nuts that roughly 1 in 60 people who watched the original Bad Apple have now seen this...",
        "videoUrl": "https://www.youtube.com/watch?v=ReblZ7o7lu4",
        "previewImgUrl": "https://img.youtube.com/vi/ReblZ7o7lu4/hqdefault.jpg",
        "authorId": 129,
        "id": 147
    },
    {
        "title": "Bad Apple in Minecraft (52,800 blocks display)",
        "description": "Bad Apple in Minecraft on a huge (52k+ blocks) display.\nOriginal Video:\nhttps://www.youtube.com/watch?v=9lNZ_Rnr7Jc\n\nThere also is a version using minecraft sheep by @Treyzania you might like:\nhttps://www.youtube.com/watch?v=tO6sfku_1b8",
        "videoUrl": "https://www.youtube.com/watch?v=CDNZx8vSSMo",
        "previewImgUrl": "https://img.youtube.com/vi/CDNZx8vSSMo/hqdefault.jpg",
        "authorId": 130,
        "id": 148
    },
    {
        "title": "Touhou - Bad Apple on floppy drives and HDD",
        "description": "If you want to support the channel, or get my experience in creating such content, you can find guides, midi files, etc. on my Patreon - https://www.patreon.com/Mecha_Art\n\nPowered by software:  https://github.com/Sammy1Am/Moppy2",
        "videoUrl": "https://www.youtube.com/watch?v=R6myIbJpUWo",
        "previewImgUrl": "https://img.youtube.com/vi/R6myIbJpUWo/hqdefault.jpg",
        "authorId": 131,
        "id": 149
    },
    {
        "title": "\u3010Touhou\u3011 Bad Apple!! Minesweeper #2\u3010\u6771\u65b9\u3011",
        "description": "Made by: kousaka_mil\r\n\r\n\u30de\u30a4\u30f3\u30b9\u30a4\u30fc\u30d1\u3067BadApple!!\u3064\u304f\u3063\u3066\u307f\u305f\r\nUploaded from Nico Nico Douga:\r\nhttp://www.nicovideo.jp/watch/sm17065134",
        "videoUrl": "https://www.youtube.com/watch?v=L1MenIV3uBE",
        "previewImgUrl": "https://img.youtube.com/vi/L1MenIV3uBE/hqdefault.jpg",
        "authorId": 132,
        "id": 150
    },
    {
        "title": "Bad Apple!! played on Microsoft Paint (Flash Warning)",
        "description": "Sorry if it's a bit flashy, hopefully it's not too tiring on the eyes. It's because each frame is drawn by mouse (the more practical and obvious way to do this would be to just paste the images into Paint, but that's no fun). Video sped up. Uses PyAutoGUI, OpenCV Python.\n\nOh and I almost forgot to ask. How is Astolfo?\n\nDiscord server: https://discord.gg/WEykWbjkR2\nCheck out my other stuff on GitHub: https://github.com/kevinjycui\n\nMusic used:\nLe Sharko\u00efste - Bad Apple - Cover with Windows XP and 7 sounds (2021 version) https://www.youtube.com/watch?v=rKGEkbLTKbY",
        "videoUrl": "https://www.youtube.com/watch?v=itbBubDqm70",
        "previewImgUrl": "https://img.youtube.com/vi/itbBubDqm70/hqdefault.jpg",
        "authorId": 53,
        "id": 151
    },
    {
        "title": "Bad Apple!! Windsong Lyre",
        "description": "some notes are missing lol cuz accidentals\nthe last part was raised by a half step, can't really produce on the lyre so I didn't play it...\nmidi source: https://onlinesequencer.net/57131\n\nTutorial of script: https://youtu.be/I90SzSw28pw",
        "videoUrl": "https://www.youtube.com/watch?v=oZOh7m5HJMQ",
        "previewImgUrl": "https://img.youtube.com/vi/oZOh7m5HJMQ/hqdefault.jpg",
        "authorId": 133,
        "id": 152
    },
    {
        "title": "Bad Apple on GBA SP",
        "description": "Bad Apple for GBA made by Peter \"krom\" Lemon\nROM \u0432\u0437\u044f\u0442 \u0441 \u0441\u0430\u0439\u0442\u0430: https://gbadev.org/demos.php?showinfo=1446\n\n\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0439 GBA SP (\u0441\u0442\u0430\u0440\u044b\u0439 \u043a\u043e\u0440\u043f\u0443\u0441 \u0440\u0430\u0437\u0431\u0438\u0442, \u043d\u043e\u0432\u044b\u0439 \u043f\u043b\u043e\u0445\u043e\u0433\u043e \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430) \u0441 \u0444\u043b\u0435\u0448 \u043a\u0430\u0440\u0442\u0440\u0438\u0434\u0436\u0435\u043c SuperCard.",
        "videoUrl": "https://www.youtube.com/watch?v=CGN4YB2TarE",
        "previewImgUrl": "https://img.youtube.com/vi/CGN4YB2TarE/hqdefault.jpg",
        "authorId": 134,
        "id": 153
    },
    {
        "title": "Bad Apple but its played on an RGB keyboard",
        "description": "I was bored and this video: https://www.youtube.com/watch?v=PLP9c0Z4Q3Y showed up in my recommended, so I decided to bring out my old dusty K95 and play around with the sdk to control RGB.\n\nThe original video is a little bit off sync, probably due to my terrible code, so I used some editing magic to modify the speed during certain parts. Also don't mind the black bar at the bottom, I cropped it so that the original video wouldn't cover the keyboard but I was too lazy to crop the top of the video.\n\n\nP.S\nI probably should have tested some settings a bit more, because if I had changed the resolution to 24x7 instead of 24x6 the bottom row of the keyboard would also have been lit properly. Might remake the video tbh.\n\nCode now uploaded to github:\nhttps://github.com/Maharaghi/cueplayer\n\nBad Apple source video here: https://www.youtube.com/watch?v=FtutLA63Cp8",
        "videoUrl": "https://www.youtube.com/watch?v=gzcWriqcSz4",
        "previewImgUrl": "https://img.youtube.com/vi/gzcWriqcSz4/hqdefault.jpg",
        "authorId": 135,
        "id": 154
    },
    {
        "title": "Bad Apple Oscilloscope  V2",
        "description": "The circuit has been improved.\n\nFirst of all. Many LM1881 chips are fake and have trouble with vertical sync. If you get problems with vertical deflection (impulses disappearing) then just increase the Rset resistor. In my case I went from 680k to 1M. 750k didn't work.\n\nSecond improvement is better contrast.\nCollector resistor increased in value, lower base resistor lowered in value. This increased the gain of Z axis.\n\nI cannot do as much due to screen burn.\nIf you actually decide to do this, please set the transistor gain to something like 10 or even more and adjust gain using some potentiometer. Less work and easier to adapt to devices with various signal levels.\n\nApart from mentioned changes the rest is the same.\nPlease refer to previous video for schematics etc.\nhttps://www.youtube.com/watch?v=pVXF57_3mBY",
        "videoUrl": "https://www.youtube.com/watch?v=JcgewKNFeEk",
        "previewImgUrl": "https://img.youtube.com/vi/JcgewKNFeEk/hqdefault.jpg",
        "authorId": 136,
        "id": 155
    },
    {
        "title": "Bad Apple! on a Punched Card",
        "description": "Bad Apple! on a Punched Card\nThe music is played on a music box with notes recorded on a punched card.\nmidi:\nhttps://musicboxmaniacs.com/explore/melody/bad-apple_78104/",
        "videoUrl": "https://www.youtube.com/watch?v=dkxr1zHwvOw",
        "previewImgUrl": "https://img.youtube.com/vi/dkxr1zHwvOw/hqdefault.jpg",
        "authorId": 137,
        "id": 156
    },
    {
        "title": "Bad Apple But Played On Notepad",
        "description": "Bad Apple But Played In Notepad... The Idea Somehow Just Appear In My Head... So... I Create It... :3.\n\nIt's Been A While Since I Upload... Cuz I Create A Games... :3.\nMy Games At... http://rzel.itch.io\nTake A Visit Ok... :3.\n\nThe Source Code Explain Start In 00:10 ... So... You Can Try To Create It On Your Own... :3.\n\nThe Bad Apple Video Started On 00:56 ... :3.\n\nHope You Enjoy The Video... :3.\n\n---#---#---\n\nAnother Bad Apple But On Android Notification... :3.\n- https://youtu.be/EB3K7ADvwKs\n\n---#---#---\n\nAlso... If You Want To Support Me... Go Subscribe And Share This Video... :3.\nIf You Want To Support Me Directly... Go To My Ko-Fi Page... :3.\n- http://ko-fi.com/rzel100",
        "videoUrl": "https://www.youtube.com/watch?v=rknrunmQArs",
        "previewImgUrl": "https://img.youtube.com/vi/rknrunmQArs/hqdefault.jpg",
        "authorId": 138,
        "id": 157
    },
    {
        "title": "Bad Apple!! but it's pure CSS Animations",
        "description": "I was wondering whether or not it would be possible to convert an FMV to a bunch of CSS animation statements and then use a basic HTML scaffold to play it. Turns out, you can*.\nI had to add the audio after the fact, as I had no way of reliably synchronize it with the animation...\n\n*Well... kinda. This is Bad Apple converted to CSS Animations. The video is split up into it's individual pixels at a set resolution, each pixel represented by a single CSS @keyframes tag. The HTML then plots these pixels in a grid predetermined in my script generating these files.\nI limited it to a resolution of 120x80 pixels and a maximum of 20 keyframes per second. Anything more and the resulting CSS would basically bring Firefox to crash. Seems like the hard limit for CSS file sizes (at least in the case of Firefox) seems to be 400MB xD\nI haven't tried Chrome much, as my first Attempt with the whole Video already made Chromium beg me to stop. It basically skipped the first 20-30 seconds of the video and instead of playing it at the intended 5 keyframes per second at 160x120 (what I tested at first), it rendered the animation at something closer to 1-2fps.\nFirefox came through and even played the 20 keyframes per second here at what seems like almost (if not actually) 20-30fps.\n\nThe smeary-ness at some points of the video comes down to the browser trying to render in-between frames to make the \"animations\" more smooth. I can't prevent this from happening.\n\nIf you want to play around with the tool I made for this, it's on GitHub: https://github.com/Chickenbreadlp/Seq_To_CSS\nIt can be used with basically any Image sequence, they will however be converted to Grayscale.\n\nYou can download the rendered HTML and CSS I used in this video here: https://mega.nz/file/T15gTYpD#Vi4CbvRVi73CEIL6O6p33JJ97TRTsYGVJDuUwAo6CWA\nI used the 15x Zoom, as that filled the screen the most on my 1440p monitor without cutting anything off.\n\nThe original PV: https://www.youtube.com/watch?v=FtutLA63Cp8",
        "videoUrl": "https://www.youtube.com/watch?v=Ym8-25wuVts",
        "previewImgUrl": "https://img.youtube.com/vi/Ym8-25wuVts/hqdefault.jpg",
        "authorId": 139,
        "id": 158
    },
    {
        "title": "I have run out of things to play Bad Apple!! on",
        "description": "spoilers for the video (I guess?)\n\n...\n\nWhat an inconspicuously arbitrary day to post a video. Alternate title: Bad Apple!! but it's a Denial-of-Service Attack Computer Virus. Or perhaps more accurately, it is visually similar to one (as if I implemented a real DoS attack my computer would crash, as that's what those things do). Video sped up. Uses C++ SDL, Python PIL.\n\nCheck out my other stuff on GitHub: https://github.com/kevinjycui\nDiscord server: https://discord.gg/WEykWbjkR2\n\nCommunity Captions\nFrench - Le Sharko\u00efste\nPortuguese (Brazil) - Guilherme BR\nSpanish (Spain) - Nico\nThai - Argamnex",
        "videoUrl": "https://www.youtube.com/watch?v=zlLQg7p_BTs",
        "previewImgUrl": "https://img.youtube.com/vi/zlLQg7p_BTs/hqdefault.jpg",
        "authorId": 53,
        "id": 159
    },
    {
        "title": "Bad Apple!! played on Middle Europe [EU4, Voltaire's Nightmare]",
        "description": "The infamous Bad Apple!! MV played mostly on the provinces of the Holy Roman Empire;\n\nThis can be done by editing a savefile to change province ownership to a nation with the desired colour. The eu4 timeline can then replay the province histories.\n\nFootage sped up and edited in Blender (oof).\n\nreddit post: https://www.reddit.com/r/eu4/comments/o920w7/project_rendering_videos_using_eu4s_timeline/\ngithub: https://github.com/santomon/eu4-renderer\n\nThanks for watching!",
        "videoUrl": "https://www.youtube.com/watch?v=mpGjNrUt8cM",
        "previewImgUrl": "https://img.youtube.com/vi/mpGjNrUt8cM/hqdefault.jpg",
        "authorId": 140,
        "id": 160
    },
    {
        "title": "[BAD APPLE] Made with HTML , JS and CSS with 5 different pattern in one play",
        "description": "",
        "videoUrl": "https://www.youtube.com/watch?v=o3aO2Xjesq4",
        "previewImgUrl": "https://img.youtube.com/vi/o3aO2Xjesq4/hqdefault.jpg",
        "authorId": 141,
        "id": 161
    },
    {
        "title": "Bad Apple!! but it's in Hearts of Iron IV",
        "description": "HoI4 but it plays Bad Apple!! feat. nomico\n\n\nset_province_controller\u3067\u30d7\u30ed\u30f4\u30a3\u30f3\u30b9\u5360\u9818\u5236\u5fa1\uff0b\u81ea\u4f5c\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u30ed\u30b0\u304c\u6d41\u308c\u305f\u306e\u3092\u691c\u77e5\u3057\u3066\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u64ae\u3063\u3066\u30bf\u30a4\u30e0\u30e9\u30d7\u30b9\u306b\u3059\u308b\u611f\u3058\u3067\u3059\nI did it with controlling province occupation with \"set_province_controller\", and screenshoting with \"log\" command and file watching system\nAll made with hoi4 modding techs.",
        "videoUrl": "https://www.youtube.com/watch?v=9se2o2lZS8o",
        "previewImgUrl": "https://img.youtube.com/vi/9se2o2lZS8o/hqdefault.jpg",
        "authorId": 142,
        "id": 162
    },
    {
        "title": "Bad Apple!! \u3092\u30d1\u30ba\u30c9\u30e9\u306e\u30c9\u30ed\u30c3\u30d7\u3067\u518d\u73fe\u3057\u3066\u307f\u305f\u3010\uff12\uff10\u4e07\u4eba\u8a18\u5ff5\u3011",
        "description": "\u672c\u5f53\u306b\u767b\u9332\u800520\u4e07\u4eba\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059!!!!!!!!!\n(\u4eca\u307e\u3067\u306e\u52d5\u753b\u306e\u4e2d\u3067\u4e00\u756a\u7de8\u96c6\u306b\u6642\u9593\u304c\u304b\u304b\u308a\u305d\u3046w)\n\n\u539f\u66f2:Bad Apple!! feat.nomico\n\n\u9762\u767d\u304b\u3063\u305f\u3089\u662f\u975e\u3068\u3082\u767b\u9332\u304a\u9858\u3044\u3057\u307e\u3059\uff01\uff01\ntwitter:\nhttps://twitter.com/tokoyaminomori\n\n#\u30d1\u30ba\u30c9\u30e9\n#\u6771\u65b9project\n#\u5e38\u4e16\u30ce\u95c7",
        "videoUrl": "https://www.youtube.com/watch?v=WSVL7eq8AV0",
        "previewImgUrl": "https://img.youtube.com/vi/WSVL7eq8AV0/hqdefault.jpg",
        "authorId": 143,
        "id": 163
    },
    {
        "title": "Bad Apple but every line it switches to a different version",
        "description": "haha I made another one and this time, it's TOUHOU. You thought you could escape huh?\n89 segments here. \nPLEAE READ THE FREQUENTLY ASKED QUESTIONS BEFORE YELLING ABOUT COVERS\n\nFrequently Asked Questions\n- What about the apple/sheep/stopmotion version?\nI only chose covers that changed the audio, not just the video, so while there are several videos I wanted to use I unfortunately could not.\n- What about the one that describes the video?\nThat was released ONE day before my video! It could not have been included.\n- What about Cloudjumper?\nCouldn't use because copyright.\n- What about Nhato remix?\nI did a dumb thing and forgot to put it in, despite writing it down. My bad.\n- What about [INSERT NAME HERE] cover/remix?\nSorry, there was only a limited amount of space so I couldn't fit every cover in the world. Alas, I am restricted by reality.\n\nThis uses the five-minute version of Bad Apple by Alstroemeria Records, though some of the covers were the short version so there could be a little disconnect. It's kind of like the Bad Apple parade that I know exists somewhere but it's more switchy.\n\n\nBrief history of Bad Apple for those who don't know (I've got to fill this description somehow): Bad Apple originates from the game Touhou by ZUN. The theme was remixed by Alstroemeria Records. Touhou fans, being the ridiculously overpowered people they are, creating a black-and-white shadow art PV for the song containing characters from Touhou. It became ridiculous popular and became the first video to hit 10 million (and then 20 million) views on Nico Nico (basically YouTube but Japanese). It's still the most viewed video on Nico Nico today, I think. Alongside UN Owen Was Her and Night of Nights, it's one of the most well-known songs that originated from the Touhou project and has been hailed as the Megalovania of the 2000s (the Megalovania cover-switch version is, after all, what inspired this video). \n\nCredits are in the comments since they're over the description limit (as in the just the names and links were greater than 5,000 characters. This doesn't include all the other stuff in the description).\n\nokay the chapters were getting ridiculous they will now be in the captions",
        "videoUrl": "https://www.youtube.com/watch?v=i8lDuo9yqfs",
        "previewImgUrl": "https://img.youtube.com/vi/i8lDuo9yqfs/hqdefault.jpg",
        "authorId": 144,
        "id": 164
    },
    {
        "title": "Bad Apple!! (Misheard Lyrics)",
        "description": "It's bad apple misheard lyrics with vocals by unity chan.\n\nThis was so time consuming lol\n\nOriginal without sub: \nhttps://youtu.be/4RSLooiCUPU",
        "videoUrl": "https://www.youtube.com/watch?v=Dc7gRjJSKjM",
        "previewImgUrl": "https://img.youtube.com/vi/Dc7gRjJSKjM/hqdefault.jpg",
        "authorId": 145,
        "id": 165
    },
    {
        "title": "Bad Apple but it is played with QR code",
        "description": "Yet another Bad Apple. The data inside the QR code are the romanization of the lyrics. \n\nI do not own the original video and music. I only own the program that generates this video.\n\nQ: How does this work?\nA: Dithering and only keeping the pixels that are needed for QR codes.",
        "videoUrl": "https://www.youtube.com/watch?v=tPYUdjptMpk",
        "previewImgUrl": "https://img.youtube.com/vi/tPYUdjptMpk/hqdefault.jpg",
        "authorId": 146,
        "id": 166
    },
    {
        "title": "bad apple but with minecraft apples",
        "description": "bad apple video:\nhttps://youtu.be/i41KoE0iMYU\n\nworld download:\nhttps://www.mediafire.com/file/1h2ihfr4pj873ta/bad_apple.zip/file\n(The world name is \"bad\")\n\nto play: /function apple:play\nto stop: /scoreboard players set .play bad_apple 0",
        "videoUrl": "https://www.youtube.com/watch?v=i2keoktlGyA",
        "previewImgUrl": "https://img.youtube.com/vi/i2keoktlGyA/hqdefault.jpg",
        "authorId": 147,
        "id": 167
    },
    {
        "title": "Bad Apple (Calculator Cover)",
        "description": "\u3010\u6771\u65b9\u3011Bad Apple!! feat. nomico (Calculator Cover)",
        "videoUrl": "https://www.youtube.com/watch?v=_8FFjA02Uc8",
        "previewImgUrl": "https://img.youtube.com/vi/_8FFjA02Uc8/hqdefault.jpg",
        "authorId": 148,
        "id": 168
    },
    {
        "title": "Bad Apple but it's Megalovania",
        "description": "",
        "videoUrl": "https://www.youtube.com/watch?v=SmnYbCsaesY",
        "previewImgUrl": "https://img.youtube.com/vi/SmnYbCsaesY/hqdefault.jpg",
        "authorId": 149,
        "id": 169
    },
    {
        "title": "Bad Apple!! but it's made from Minecraft sounds",
        "description": "Sorry for the bad timing in some parts, I was focusing more on the audio than the video and couldn't be stuffed \u00af\\_(\u30c4)_/\u00af\n\nMIDI Program - Ableton Live 9 (Lite)\nVideo Editing - Premiere Pro\n\nOriginal Song - https://youtu.be/3kXx6f7qaa8\nPatreon - https://www.patreon.com/TuddlesT",
        "videoUrl": "https://www.youtube.com/watch?v=Jxa_u1UPuZI",
        "previewImgUrl": "https://img.youtube.com/vi/Jxa_u1UPuZI/hqdefault.jpg",
        "authorId": 150,
        "id": 170
    },
    {
        "title": "Bad Apple!! but it's on Etch A Sketch in Blender",
        "description": "My crap GPU almost died while rendering this video. It's only 10 frames/seconds and with a bunch of denoising to try to reduce render time.\n\noriginal video: https://www.youtube.com/watch?v=FtutLA63Cp8\n\nFollow me on instagram !\nhttps://www.instagram.com/retronyme/",
        "videoUrl": "https://www.youtube.com/watch?v=LD4D09EVcDY",
        "previewImgUrl": "https://img.youtube.com/vi/LD4D09EVcDY/hqdefault.jpg",
        "authorId": 151,
        "id": 171
    },
    {
        "title": "HP Prime \u2014 Bad Apple",
        "description": "Program Download: https://drive.google.com/file/d/1g5kZiJpbggDlHojJk51zaA39HGzIcRGR/view?usp=sharing\n\nBad Apple played on a G2 HP Prime calculator. Should be the first video played on the device. If not, I shall bask in my blissful ignorance. And, yeah, the framerate's kinda off...",
        "videoUrl": "https://www.youtube.com/watch?v=bTaohBmrNr0",
        "previewImgUrl": "https://img.youtube.com/vi/bTaohBmrNr0/hqdefault.jpg",
        "authorId": 152,
        "id": 172
    },
    {
        "title": "Bad Windows!! (Bad Apple w/ Windows XP/7 sounds) [2018]",
        "description": "Discord: https://discord.gg/dajMkfjudn\n\n2021 version: https://www.youtube.com/watch?v=rKGEkbLTKbY\n\n[2018 NOTE: It was made in OpenMPT and... oh yeah! There is NO BGM!]\n\nSounds used:\n\n-Windows XP:\n--Start\n--Balloon\n--Critical Stop\n--Hardware fail\n--Error\n--Menu Command\n\n-Windows 7:\n--Pop-up blocked\n--Ding\n\nDownload file:\nhttps://drive.google.com/open?id=14ewtY-CyPs7fRFEYzXUhvBSH_hsE1kYQ",
        "videoUrl": "https://www.youtube.com/watch?v=Qn5-dm1XPDo",
        "previewImgUrl": "https://img.youtube.com/vi/Qn5-dm1XPDo/hqdefault.jpg",
        "authorId": 153,
        "id": 173
    },
    {
        "title": "Bad Apple!! but it's 240 7-segment displays",
        "description": "Probably my most costly project to date...\nI have been always liking the aesthetics of 7-segment displays and wanted to something big with it. So I decided to connect them into a 20x12 display with serial input and way too many decoders. The video and compressed audio data are streamed through the UART interface at a standard 115200 baud rate.\n\nMore detailed write-ups and source code soon if you're interested.\n\n\n[Where Else I Appear]\nTwitter: https://twitter.com/akumanatt\nTwitch: https://www.twitch.tv/akumanatt (no plans to stream there yet)",
        "videoUrl": "https://www.youtube.com/watch?v=qrSkWpVoKHM",
        "previewImgUrl": "https://img.youtube.com/vi/qrSkWpVoKHM/hqdefault.jpg",
        "authorId": 154,
        "id": 174
    },
    {
        "title": "bad apple but it's an animal crossing new horizons shitpost",
        "description": "i did this by ear",
        "videoUrl": "https://www.youtube.com/watch?v=oO5g6jpdl8g",
        "previewImgUrl": "https://img.youtube.com/vi/oO5g6jpdl8g/hqdefault.jpg",
        "authorId": 155,
        "id": 175
    },
    {
        "title": "Bad Apple but in space. \u26a0\ufe0fFlash Warning",
        "description": "\u26a0\ufe0fFlash Warning\nI know Bad Apple is about playing it in the real thing, but you know, it's... complicated. \nBest experienced viewed from a considerable distance from your screen.\nFirst seconds meme could be avoided but youtube thumbnail picks are terrible.\nAlso youtube favorite type of video with fast moving small detail every frame which is sure to be preserved... anyways \u00af\\_(\u30c4)_/\u00af.\n\nEdit: Warning per the comments suggestion, for I didn't consider it, and the low bitrate makes it worse.",
        "videoUrl": "https://www.youtube.com/watch?v=lxt2XucHyL0",
        "previewImgUrl": "https://img.youtube.com/vi/lxt2XucHyL0/hqdefault.jpg",
        "authorId": 156,
        "id": 176
    },
    {
        "title": "Bad Apple!! played on Rocket League",
        "description": "Taking advantage of boosts in rocket league to play Bad Apple!! with lineart :D\n\nFor anyone wondering, here are some answers to frequently asked questions: \n\nQ: How did you do this? \nA: Here is an in-depth explanation of what I did to render Bad Apple!! in Rocket League:\n\nI first applied what is called a \"kernel\", or a convolution matrix, on every image of the video. You can learn more about kernels on wikipedia if you're interested: \nhttps://en.wikipedia.org/wiki/Kernel_(image_processing)\nI applied specifically the \"ridge detection\" one. \nThe problem with this specific kernel is that it removes the sun/moon at 1:48 and 1:55, for example. To prevent that, you need to clamp the brightness of pixels to a hard \"0\" or \"1\", and remove anything that's in-between (which is what I did, hence the sun/moon is displayed :D).\n\nNow that the kernel is applied, we are left with a set of points that correspond to the edges of the image. The problem now is that if we were to use them to play the video right now, we wouldn't know in which order to do so. The cars would jump from one part of the image to the other, without any order in mind, and we wouldn't be able to recognize anything at all. \nAnd so, we need to order the points that we computed with the kernel. \n\nTo sort the points, I used a somewhat greedy approach: \n- Take a point, and find its closest neighbor. Mark this neighbor as \"ordered\". \n- Take the found neighbor, and find its own neighbor. Mark this new neighbor as \"ordered\" too. \n- Repeat this until every point is marked as \"ordered\". \n\nThe problem with this algorithm is that you end up with a lot more travel than you need when rendering the image. For example, if you look at 0:32, you can see that the cars travel from the castle to Marisa every single frame. There are better algorithms that sort the points such that this travel is minimized, but I didn't want to bother too much and find the optimal solution. \nI kept the sub-optimal and greedy approach in the end because I thought it was good enough. \n\nFinally, once this sort is executed, we can start to make a bot that follows the path in the game! \nI won't go into too much detail for the bot part, because I think it's much simpler to implement than the image processing. \nI used what is called the RLBot framework to alter the physics of the game. With the framework, you can set the position of cars in the game at every frame (~120 fps). This is called \"state setting\". I used exactly 10 bots because the game wouldn't display the boost trails properly if there were any more cars. \n\nI coded the image processing part in python, and the bot was coded with the Java version of the RLBot framework. \n\nTL;DR \nApply some image processing to the original video to transform it into usable paths for the cars, and use the RLBot framework to override the physics. \n\nQ: How long did it take? \nA: It took me about 2 days to make this video.\nDay 1: build roughly the whole system, apply the image processing to the original video.\nDay 2: test the renderer, fix some bugs, tweak some parameters, render it, edit it, and send it.\n\nQ: Why is it ugly? There are something like 3 frames rendered at once.\nA: Well, it's not perfect. The boost I choose to render it has too much afterglow. It might have worked better with another boost, I didn't test everything. I thought it was good enough, so I stopped working on it and started rendering.",
        "videoUrl": "https://www.youtube.com/watch?v=98qxEe0-KaQ",
        "previewImgUrl": "https://img.youtube.com/vi/98qxEe0-KaQ/hqdefault.jpg",
        "authorId": 157,
        "id": 177
    },
    {
        "title": "Bad Apple but overlapping upside down but the truth is I was just learning shaders.",
        "description": "This is not a Rorschach psychological personality test, the test doesn't have great music.\nIt's also an MSDF :D",
        "videoUrl": "https://www.youtube.com/watch?v=gQr4axTo-WU",
        "previewImgUrl": "https://img.youtube.com/vi/gQr4axTo-WU/hqdefault.jpg",
        "authorId": 156,
        "id": 178
    },
    {
        "title": "Bad Apple but I ran every frame through AI",
        "description": "I don't know why I did this, but it's here.\n\nI went through a dozen of crashes while editing this video, but I present my suffering for your pleasure in this one, lads!\nHope ya like it!\n\n(also, subtitles are available-)\n\n0:00 Quick intro\n0:27 A very long exposition\n6:11 The thing that you actually clicked for\n\n======================================================\n\n\" [Alstroemeria Records] Bad Apple!! feat.nomico (Shadow Animation Version)\"\n[] https://youtu.be/i41KoE0iMYU\n\n\"\u6d41\u884c\u308a\u306eAI\u306b\u30df\u30af\u3055\u3093\u98df\u3079\u3055\u305b\u3066\u307f\u305f\u3010\u6bd4\u8f03\u3011\"\n[] https://youtu.be/OVpYBxK0sCg\n\n\"\u300eTell Your World\u300f3DMV\u30b2\u30fc\u30e0\u30b5\u30a4\u30ba\u516c\u958b\uff01\"\n[] https://youtu.be/UUaVUWCPv_Y\n\n\"Every Night I Dream Of Dancing | Andrew Huang\"\n[] https://youtu.be/pNVNM9JBSL0\n\n\n#BadApple #Touhou #AI\n\n======================================================\n\nThrow me some pennies!\n[] https://trakteer.id/tanzdev\n\n---\n\n:: CHECK MY EP! ::\n[] Playlist : https://youtube.com/playlist?list=PLk...\n\n:: CHECK MY OTHER SONGS! ::\n[] Playlist : https://youtube.com/playlist?list=PLk...\n\n:: CHECK MY VIDEO GAMES! ::\n[] https://tanzdev.itch.io/\n\n---\n\n:: GET IN TOUCH WITH ME! ::\n[] \"Subscribe to my channel!\"\nYouTube : https://www.youtube.com/c/tanzdev\n[] \"Tweets!\"\nTwitter : http://twitter.com/TanzDev\n\n======================================================\n\nThanks for watching!\nLeave a like if you love it and subscribe for more contents from me~\n\nWith love and nurture,\nTanzDev",
        "videoUrl": "https://www.youtube.com/watch?v=l7GTF08WgFU",
        "previewImgUrl": "https://img.youtube.com/vi/l7GTF08WgFU/hqdefault.jpg",
        "authorId": 158,
        "id": 179
    },
    {
        "title": "Bad Apple!! but it's in Windows console minesweeper",
        "description": "Well, it is what it is",
        "videoUrl": "https://www.youtube.com/watch?v=0sfXbVItZ5Q",
        "previewImgUrl": "https://img.youtube.com/vi/0sfXbVItZ5Q/hqdefault.jpg",
        "authorId": 159,
        "id": 180
    },
    {
        "title": "Bad Apple!! played on Pokemon Cards",
        "description": "Every frame is generated by converting each pokemon card into 4 pixels, 2 in each dimension. I convert the frame into a much smaller image, and then i compare the 2 of them by using the pythagorean theorem (color is a vector, after all) and I match 4 pixels on the bad apple image to a card. Afterwards, i added all of the cards together and saved them. Each frame takes about 20 seconds to render with the optimizations i made, and with multithreading my computer chewed through them all in around 2.5 hours. Github is here: https://github.com/Spheroman/BadApplePkMn\n\ni then just ran it as a stop motion over https://pokegear.app/ made by Jake Gearhart as a background.\n\nthe song is a midi file played using the gbfont soundfont (https://musical-artifacts.com/artifacts/8). I'll find the midi eventually, i downloaded it ages ago and never remembered where it came from.",
        "videoUrl": "https://www.youtube.com/watch?v=nhLwbs2fvEY",
        "previewImgUrl": "https://img.youtube.com/vi/nhLwbs2fvEY/hqdefault.jpg",
        "authorId": 103,
        "id": 181
    },
    {
        "title": "Bad Apple but it's minesweeper",
        "description": "Created in blender\n\nbased off of this video\nhttps://www.youtube.com/watch?v=L1MenIV3uBE",
        "videoUrl": "https://www.youtube.com/watch?v=jGuznuVWM-0",
        "previewImgUrl": "https://img.youtube.com/vi/jGuznuVWM-0/hqdefault.jpg",
        "authorId": 160,
        "id": 182
    },
    {
        "title": "bad apple ft. delay lama (but he's actually singing the lyrics)",
        "description": "320kbps MP3 of the cover, with an FLP download with instrumental audio and a copy of the lama VST included because you insatiable fucks wanted it: https://drive.google.com/drive/folders/1oh9QYo7xtMk51nSLBD3z9QZ0_J0tAlFV?usp=sharing\n\nthis took three hours of my life.\n\na few things to note:\n- yes, this is an octave below the vocals of the song. the lama's vocal range is... limited.\n- the delay lama cannot produce consonants, so this is just a recreation of the vowels that will sound vaguely like the lyrics assuming you know them or are reading them. i created this out of anger & disappointment that the first attempt at doing this just had unprocessed, default \"aaa\" sounds.\n- yes, i know the japanese \"u\" doesn't sound like that. the lama straight up just can't produce the actual japanese \"u\" sound because of how the vowel shifter is laid out, so i did the closest i could get.\n- a fair few notes are \"n\"s (i.e. ji-bu-n-ka-ra) - i've subbed them out for \"u\"s because, again, the lama can't do consonants.\n- i'm using the official instrumental because i honestly do not give a shit about monetisation. i'll put this up as an mp3 if it's requested enough, but otherwise, you can just youtube2mp3 it.\n\n\"bad apple\" is a remix of an instrumental by ZUN, which was produced by, and belongs to, alstroemeria records. i do not own the original song, or nomico's vocals.\n\nstream my actual music: https://bright0nsounds.bandcamp.com",
        "videoUrl": "https://www.youtube.com/watch?v=E8cp91d_SDc",
        "previewImgUrl": "https://img.youtube.com/vi/E8cp91d_SDc/hqdefault.jpg",
        "authorId": 161,
        "id": 183
    },
    {
        "title": "Bad Gomoku! Bad Apple, but it's valid Gomoku combinations.",
        "description": "#badapple #gomoku \n\nSince I was coding a Gomoku game for myself, I unexpectedly discovered that there is still not such implementation of Bad Apple. This omission needed to be corrected :)\n\nEvery frame of this animation is a valid Gomoku combination (no winner, and X/O ratio is 1 or 1+1 (for odd count of moves)).\n\nWill probably post a link to my code later. Likes are welcome :)\n\nOriginal Bad Apple video: https://youtu.be/FtutLA63Cp8\n\nSources*: https://github.com/Amegatron/gomoku-game\n\n* Atm, there is no a dedicated script for generating Bad Apple, but it has DrawGameBoardGenerator class - the main tool to generate specific frames, and GameBoardImageRenderer to render those boards into an image.",
        "videoUrl": "https://www.youtube.com/watch?v=J5QZtfYnWdA",
        "previewImgUrl": "https://img.youtube.com/vi/J5QZtfYnWdA/hqdefault.jpg",
        "authorId": 162,
        "id": 184
    },
    {
        "title": "Bad Apple playing on the minecraft player list",
        "description": "Link to a video that explains how to do this on your own server:\nhttps://youtu.be/_KeLXwo8WKQ\n\nCORRECTION: The previous version said scoreboard but it is in fact the tab menu not the scoreboard\nHow?\nMinecraft 1.16.3 allows arbitrary colors for chat components, the tab menu's header is a chat component. The music is done with a resource pack.\nI wrote a spigot plugin that updates the tab menu header 20 times a second and held tab for 4 minutes.\n\nhttps://twitter.com/rphsoftware\n\nSource code/assets:\nhttps://drive.google.com/file/d/1WB7wSw8ztjouBqTYtG72crEudvFbL0aD/view?usp=sharing",
        "videoUrl": "https://www.youtube.com/watch?v=DStJUHwJUgw",
        "previewImgUrl": "https://img.youtube.com/vi/DStJUHwJUgw/hqdefault.jpg",
        "authorId": 163,
        "id": 185
    },
    {
        "title": "Bad Apple!! zx spectrum version by Techno Lab",
        "description": "0:25 start\n\nRelease date: 13.02.2016\nRelease party: ZX Enhanced compo\nCompo: Demo\nPlatform: zxspectrum 512k\nRanked:\n\noriginal video: https://youtu.be/UkgK8eUdpAo\nsoundcloud: http://soundcloud.com/n1k-o\nhype: http://hypr.ru\nretroscene: http://retroscene.org\n\nAfter 16 years of silence Techno Lab is back and glad to present you the ZX Spectrum version of \"Bad Apple!!\n\nHave fun! Greetz to geeks all over the world!\n\ncode..........................................kowalski\nmusic............................................n1k-o\nascii.............................................dman\n\nAlmost any ZX clone with 512Kb of RAM or more (tested on real ZXEvo and emulated ATM*/ZS/Profi/KAY).\n2x AY/YM chips aka TurboSound (NedoPC standard).",
        "videoUrl": "https://www.youtube.com/watch?v=cd5iEeIe7L0",
        "previewImgUrl": "https://img.youtube.com/vi/cd5iEeIe7L0/hqdefault.jpg",
        "authorId": 164,
        "id": 186
    },
    {
        "title": "Bad Apple XDV on Victor V86P XT Compatible Laptop",
        "description": "Bad Apple XDC video, playing on a Victor V86P laptop (circa 1989). This has a monochrome CGA LCD display with no backlight, an 8MHz 80C86 CPU and 1MB RAM. I've attached an XT-IDE controller and an old 2.6GB Fujitsu HDD with the BadApple.xdv on it (wouldn't fit on the internal 20MB drive)\n\nThis system doesn't have a sound card, so sound was generated by running the same video in dosbox on another PC off-screen\n\nThe laptop reverses black and white by default, which gives a more readable display most of the time. I should probably have toggled that off for this video\n\nhttps://github.com/MobyGamer/XDC\nftp://ftp.oldskool.org/pub/misc/Video/XDV/BADAPPLE.XDV",
        "videoUrl": "https://www.youtube.com/watch?v=YuBtPBVJFBc",
        "previewImgUrl": "https://img.youtube.com/vi/YuBtPBVJFBc/hqdefault.jpg",
        "authorId": 165,
        "id": 187
    },
    {
        "title": "Bad Apple Phone Cover!",
        "description": "Lol was bored had free time, the rest is history ^-^",
        "videoUrl": "https://www.youtube.com/watch?v=Yf7V-zbYq5c",
        "previewImgUrl": "https://img.youtube.com/vi/Yf7V-zbYq5c/hqdefault.jpg",
        "authorId": 166,
        "id": 188
    },
    {
        "title": "Bad Apple! oscilloscope C1-94",
        "description": "Bad Apple \u043d\u0430 \u0442\u0435\u043f\u043b\u043e\u043c \u043b\u0430\u043c\u043f\u043e\u0432\u043e\u043c \u043e\u0441\u0446\u0438\u043b\u043b\u043e\u0433\u0440\u0430\u0444\u0435 C1-94\n\u0421 \u0434\u043d\u0435\u043c \u0420\u0430\u0434\u0438\u043e! =)",
        "videoUrl": "https://www.youtube.com/watch?v=B8rATsdTYvA",
        "previewImgUrl": "https://img.youtube.com/vi/B8rATsdTYvA/hqdefault.jpg",
        "authorId": 167,
        "id": 189
    },
    {
        "title": "Bad Apple on Minecraft Copper Blocks",
        "description": "original: https://www.youtube.com/watch?v=FtutLA63Cp8",
        "videoUrl": "https://www.youtube.com/watch?v=6KyZ4kiUhzo",
        "previewImgUrl": "https://img.youtube.com/vi/6KyZ4kiUhzo/hqdefault.jpg",
        "authorId": 168,
        "id": 190
    },
    {
        "title": "Factorio - Bad Apple!!",
        "description": "\"Bad Apple!!\" made in vanilla factorio on combinators. I created a program to convert any video into the blueprint you can place in factorio. Once I finish the program I'm gonna release it the public.\nThe Display resolution is 192 x 144 at 20 fps, any more and the game UPS starts to fall down \n\nHead here for more info:\nhttps://redd.it/apj3bz\n\nOriginal Bad Apple: \nhttps://www.youtube.com/watch?v=FtutLA63Cp8\n\nThe song was generated based was generated using Miditorio:\nhttp://miditorio.com/\n\nThe midi version of the song:\nhttps://www.youtube.com/watch?v=ANRzDT1pU8c",
        "videoUrl": "https://www.youtube.com/watch?v=tihwC6FLB3E",
        "previewImgUrl": "https://img.youtube.com/vi/tihwC6FLB3E/hqdefault.jpg",
        "authorId": 169,
        "id": 191
    },
    {
        "title": "Bad Apple!! Played on Grass",
        "description": "Made using Nvidia GAUGAN\nhttp://nvidia-research-mingyuliu.com/gaugan/\n\nBad Apple!!\nhttps://www.youtube.com/watch?v=9lNZ_Rnr7Jc",
        "videoUrl": "https://www.youtube.com/watch?v=u-1GCGZNotA",
        "previewImgUrl": "https://img.youtube.com/vi/u-1GCGZNotA/hqdefault.jpg",
        "authorId": 87,
        "id": 192
    },
    {
        "title": "Bad Apple!! played with pure CSS in high quality",
        "description": "Uploading the full Bad Apple!! PV in about 139MB of pure CSS and HTML (without any JavaScript) as promised in the previous video. Animation quality slightly reduced to compress CSS file from 165MB and play all the way through on Chromium. Note we are referring to CSS as in Cascading Style Sheets and not Character Select Screen or Counter-Strike: Source. Uses Python PIL, BeautifulSoup, cssutils, OpenCV to generate HTML/CSS files.\n\nAs described in \"The Art of Pure CSS\" (preamble): https://youtu.be/wUQbchYY80U\n\nJoin the Discord: https://discord.gg/WEykWbjkR2\nTwitter: https://twitter.com/Junferno\nCheck out my other stuff on GitHub: https://github.com/kevinjycui",
        "videoUrl": "https://www.youtube.com/watch?v=MQbjW2VfaHs",
        "previewImgUrl": "https://img.youtube.com/vi/MQbjW2VfaHs/hqdefault.jpg",
        "authorId": 53,
        "id": 193
    },
    {
        "title": "Bad Apple on Genshin GRASS",
        "description": "#genshin impact #badapple\n\nLUMA IF U R WONDERING HOW\n\n\u25baDiscord\nhttps://discord.gg/TEeThu5A8t\n\n\u25baPatreon\nhttps://www.patreon.com/aikoimpact\n\n\u25baATTRIBUTION\nThis video is derivative  of  \"Bad Apple!! (English Cover)\u3010JubyPhonic\u3011\" published by JubyPhonic\nSource: https://youtu.be/rQg2qngyIZM\n\n\u25baORIGINAL CREDITS:\n\u266c Original: www.nicovideo.jp/watch/sm8628149\n\u266c Music: Masayoshi Minoshima\n\n\u25baCOVER CREDITS:\n\u266c Vocals/Mix/Subs: Juby\n\u266c Lyrics: Pat McCarthy",
        "videoUrl": "https://www.youtube.com/watch?v=thnECMLCw5c",
        "previewImgUrl": "https://img.youtube.com/vi/thnECMLCw5c/hqdefault.jpg",
        "authorId": 170,
        "id": 194
    },
    {
        "title": "Bad Morshu!! [YTPMV] (Morshu Bad Apple!! Vocaloid Cover)",
        "description": "Original Music: Masayoshi Minoshima ft. nomico - Bad Apple!!",
        "videoUrl": "https://www.youtube.com/watch?v=nm3fHeOGiko",
        "previewImgUrl": "https://img.youtube.com/vi/nm3fHeOGiko/hqdefault.jpg",
        "authorId": 171,
        "id": 195
    },
    {
        "title": "Bad Apple TI-83 Plus Silver Edition",
        "description": "Original (at least I think): https://m.youtube.com/watch?v=6pAeWf3NPNU\nI did not make this software, I downloaded it from a github page and installed it on my calculator.",
        "videoUrl": "https://www.youtube.com/watch?v=4kdtiOyJgtc",
        "previewImgUrl": "https://img.youtube.com/vi/4kdtiOyJgtc/hqdefault.jpg",
        "authorId": 172,
        "id": 196
    },
    {
        "title": "Bad Apple But Played On The Name (Filename) Of 10 Files In Windows 10.",
        "description": "Another Bad Apple Again... :3.\nBut Now Played On The Filename... :3.\n\nThis One Is Pretty Wild... I Don't Really Have Good Laptop Or Something Like That... So... I'm Sorry To Not Make It To Full 30 Fps... It Supposed To Play It On 30 Fps... But My Laptop Really Lag... Maybe Because My Laptop Need To Rename 10 Files 30 Times In 1 Second...??? That's About Renaming 300 Files / Sec... :3. Also... I Change The Speed A Bit... I Hope It's Still Count... :3.\n\nAt First... I Tried With 20 Files... But... Yea... My Laptop Just Lag... Even I Can't Click Anything On My Screen... So... I Need To Resize It... :3.\n\nAnyway... Hope You Enjoy This Video... :3.\n\nDon't Forget To Like And Subscribe... :)\nAnd Left Some Comment... I Will Try To Reply As Best As I Can... :3.\n\n-#-#-#-\nLink To Support Me... :3.\n- https://ko-fi.com/rzel100\n-#-#-#-\n\nStay Safe And See You Later... :D.",
        "videoUrl": "https://www.youtube.com/watch?v=2lkeTYPAqZo",
        "previewImgUrl": "https://img.youtube.com/vi/2lkeTYPAqZo/hqdefault.jpg",
        "authorId": 138,
        "id": 197
    },
    {
        "title": "Bad Apple!! but it's in Free Draw",
        "description": "(i am the creator of free draw and this is a script!!! apparently that wasnt obvious)\n\nto anyone confused: I didn't make this. this is a tech demo of bad apple running with Free Draw 2's renderer because I thought it would be funny\n\nread about the prevalence of Bad Apple's video and why it's the perfect candidate for this kind of project https://en.wikipedia.org/wiki/Bad_Apple!!\n\nyes i know it's flipped and i don't really care to fix it\n\noriginal: https://youtu.be/FtutLA63Cp8",
        "videoUrl": "https://www.youtube.com/watch?v=wLNlyxv3qWY",
        "previewImgUrl": "https://img.youtube.com/vi/wLNlyxv3qWY/hqdefault.jpg",
        "authorId": 173,
        "id": 198
    },
    {
        "title": "Bad Apple!! but it's procedurally generated apple mosaics",
        "description": "ive never played a touhou game in my life\n\nFAQ since this video has more views than reasonable:\n\nQ: how did you do this\nA: i wrote a python program that was just supposed to automate clean mosaics that were relevant to the tile, one thing leads to another and this video is born after 24 hours of rendering.\n\nQ: why did you do this\nA: funny\n\nQ: why are some of the apples rotten\nA: the algorithm detects the difference between the space it's filling and every possible tile. if it's rotten it's because THAT apple matches the silhouette of the frame better than the usual black or white replacement tiles.\n\nQ: is the script limited to black and white videos, such as bad apple?\nA: no actually! i could play literally any video on apples. or bread. or anything. theres no limitations at all aside from what looks nice.\n\nQ: have you played a touhou game since you uploaded this\nA: absolutely not",
        "videoUrl": "https://www.youtube.com/watch?v=w-Cyxp_yz2M",
        "previewImgUrl": "https://img.youtube.com/vi/w-Cyxp_yz2M/hqdefault.jpg",
        "authorId": 174,
        "id": 199
    },
    {
        "title": "Bad Apple!! in Starbound",
        "description": "Behind the Scenes: https://www.youtube.com/watch?v=lwSQouKsqZM\nI honestly thought someone would've done this sooner, but I guess not.",
        "videoUrl": "https://www.youtube.com/watch?v=WPQVuORUPQQ",
        "previewImgUrl": "https://img.youtube.com/vi/WPQVuORUPQQ/hqdefault.jpg",
        "authorId": 175,
        "id": 200
    },
    {
        "title": "Bad Apple in Library of Babel",
        "description": "6412 unique pages total\n\nPage URLs (6572 frames) for those who want to print them: https://gist.github.com/Noxturnix/4f0c27b7cd1a8b4685c5a37fed7893d1\n\nhttps://libraryofbabel.info/",
        "videoUrl": "https://www.youtube.com/watch?v=_0IVVw7g23o",
        "previewImgUrl": "https://img.youtube.com/vi/_0IVVw7g23o/hqdefault.jpg",
        "authorId": 176,
        "id": 201
    },
    {
        "title": "bad apple in terraria",
        "description": "The timing with the music might not match 100%, due to framerate differences.\n\n\"Why didn't you use draw code??\"\n- With draw code it'd look so similar to the original, you'd might aswell watch that one.\n\nCode: https://paste.mod.gg/nepoxiwuvo.cs\nEDIT: link broke because hastebin decided to delete links after 30 days",
        "videoUrl": "https://www.youtube.com/watch?v=V8Go4X5aPZU",
        "previewImgUrl": "https://img.youtube.com/vi/V8Go4X5aPZU/hqdefault.jpg",
        "authorId": 177,
        "id": 202
    },
    {
        "title": "Synthesia bad apple",
        "description": "Other Synthesia music:\nhttps://www.youtube.com/playlist?list=PLGvW9K8neFHJAScZ3yKNBnyWAmfRFZMcE",
        "videoUrl": "https://www.youtube.com/watch?v=IltRgZW2Jcw",
        "previewImgUrl": "https://img.youtube.com/vi/IltRgZW2Jcw/hqdefault.jpg",
        "authorId": 178,
        "id": 203
    },
    {
        "title": "Bad Apple in ASCII",
        "description": "Symbols that were used: \"  BADPLE\"",
        "videoUrl": "https://www.youtube.com/watch?v=iCh2Oi81WdM",
        "previewImgUrl": "https://img.youtube.com/vi/iCh2Oi81WdM/hqdefault.jpg",
        "authorId": 179,
        "id": 204
    },
    {
        "title": "Grubhub ad but it's Bad Apple",
        "description": "I'm way too lazy to properly chroma key this video over a short joke, but you get the point",
        "videoUrl": "https://www.youtube.com/watch?v=cYjD7PgBjhg",
        "previewImgUrl": "https://img.youtube.com/vi/cYjD7PgBjhg/hqdefault.jpg",
        "authorId": 180,
        "id": 205
    },
    {
        "title": "bad apple but it's apple emoji",
        "description": "watch in 1080p for best experience\nmade with crappy pil+moviepy code and a bit of ffmpeg\n\nUPD: The code is now uploaded on GitHub! \nhttps://github.com/n-saraseka/bad_apple_tiler\n\nThere also is a tutorial how to use it on my channel.",
        "videoUrl": "https://www.youtube.com/watch?v=JAHMoD_7mjY",
        "previewImgUrl": "https://img.youtube.com/vi/JAHMoD_7mjY/hqdefault.jpg",
        "authorId": 181,
        "id": 206
    },
    {
        "title": "Bad Apple but it is in roblox",
        "description": "https://www.roblox.com/games/5171348834/Bad-apple-but-in-roblox",
        "videoUrl": "https://www.youtube.com/watch?v=QTeekSKDF5g",
        "previewImgUrl": "https://img.youtube.com/vi/QTeekSKDF5g/hqdefault.jpg",
        "authorId": 182,
        "id": 207
    },
    {
        "title": "Bad Apple Deepfake Choir (24)",
        "description": "It took 8 hours to do all of this\nBGM: Bad Apple \r\nSOURCE: First Order Motion Model for Image Animation\r\n\r\n\r\n\r\n#deepfake #damedane \r\n------------------------------------------------------------------------------------------------------\r\n\r\nhttps://discord.io/ytpmv\r\nhttps://twitter.com/FuouMarinas\r\n:]",
        "videoUrl": "https://www.youtube.com/watch?v=3aX9RYLKNLw",
        "previewImgUrl": "https://img.youtube.com/vi/3aX9RYLKNLw/hqdefault.jpg",
        "authorId": 183,
        "id": 208
    },
    {
        "title": "Bad Apple!! in Scrap Mechanic",
        "description": "A screen of logic gates playing Bad Apple!! in vanilla Scrap Mechanic. I originally wanted the music to play in-game as well, but in the current version of the game (January 2021) the percussion sound block seems to be broken.\n\nWorkshop Links:\nhttps://steamcommunity.com/sharedfiles/filedetails/?id=2377067685\n(Smaller version for potato computers. Lower resolution/framerate)\nhttps://steamcommunity.com/sharedfiles/filedetails/?id=2377067269",
        "videoUrl": "https://www.youtube.com/watch?v=tTxR1mqvLbo",
        "previewImgUrl": "https://img.youtube.com/vi/tTxR1mqvLbo/hqdefault.jpg",
        "authorId": 184,
        "id": 209
    },
    {
        "title": "Bad Apple but it's all Arcaea trace",
        "description": "thanks wQYakisobaQw for recording this\nhttps://www.youtube.com/channel/UCxIdowMnVo4Gpn8Ht7JVWZA",
        "videoUrl": "https://www.youtube.com/watch?v=lK0EX4dtGLQ",
        "previewImgUrl": "https://img.youtube.com/vi/lK0EX4dtGLQ/hqdefault.jpg",
        "authorId": 185,
        "id": 210
    },
    {
        "title": "Bad Apple on LEGO EV3 Mindstorms",
        "description": "Touhou - Bad Apple on LEGO EV3 Mindstorms.\nUsed ed3ved image http://http://www.ev3dev.org/",
        "videoUrl": "https://www.youtube.com/watch?v=f8I2AMFNUoY",
        "previewImgUrl": "https://img.youtube.com/vi/f8I2AMFNUoY/hqdefault.jpg",
        "authorId": 186,
        "id": 211
    },
    {
        "title": "bad apple but it's a discord voice channel user list",
        "description": "alt title: bad apple but i risk my account of getting banned lol\n\nOPEN SOURCE ~ https://github.com/aznguymp4/bad-apple-discord/\n\n\u2014 Links\nTwitter ~ https://twitter.com/aznguymp4/\nInstagram ~ https://instagram.com/aznguymp4/\nMain Channel ~ https://youtube.com/aznguymp4/\n\n\u2014 Music\nbad ringo",
        "videoUrl": "https://www.youtube.com/watch?v=VGscIBfT7xE",
        "previewImgUrl": "https://img.youtube.com/vi/VGscIBfT7xE/hqdefault.jpg",
        "authorId": 187,
        "id": 212
    },
    {
        "title": "Bad Apple! but it's a slice of a volume",
        "description": "thankies 2 aly\n\nto those who wanted to download the mesh in my Bad Apple video i've made it available here, along with a corrected version\nhttps://drive.google.com/drive/folders/1HpBDUOoqNzy81QURhs2fK88qgNyvLTj9?usp=share_link",
        "videoUrl": "https://www.youtube.com/watch?v=HfMzrvXQJP8",
        "previewImgUrl": "https://img.youtube.com/vi/HfMzrvXQJP8/hqdefault.jpg",
        "authorId": 160,
        "id": 213
    },
    {
        "title": "MINECRAFT Bad Apple But Enderman Render It",
        "description": "",
        "videoUrl": "https://www.youtube.com/watch?v=hx95pKVwcI4",
        "previewImgUrl": "https://img.youtube.com/vi/hx95pKVwcI4/hqdefault.jpg",
        "authorId": 188,
        "id": 214
    },
    {
        "title": "Bad Apple but drawn using a single line. (Seizure Warning)",
        "description": ". Bad Apple but it's a single-line drawing.   I used a program called FiniteCurve, https://www.finitecurve.com (I used the offline version) to convert each frame to a single-line drawing. \n\n#badapple #lineart",
        "videoUrl": "https://www.youtube.com/watch?v=RsJVCAMxdio",
        "previewImgUrl": "https://img.youtube.com/vi/RsJVCAMxdio/hqdefault.jpg",
        "authorId": 189,
        "id": 215
    },
    {
        "title": "Bad Apple!! but it's played on the YouTube Homepage",
        "description": "I wrote a script to split each frame into images the size of thumbnails and channel icons, and wrote a script to play each frame in succession.\n\nGithub: https://github.com/JoshnaksPNG\nPatreon: https://www.patreon.com/Joshnaks/\nDiscord: https://discord.gg/GqMasVynMr",
        "videoUrl": "https://www.youtube.com/watch?v=fMXWmACfhmQ",
        "previewImgUrl": "https://img.youtube.com/vi/fMXWmACfhmQ/hqdefault.jpg",
        "authorId": 190,
        "id": 216
    },
    {
        "title": "Bad Apple from Chiseled Bookshelves in Minecraft",
        "description": "This is Bad Apple but made out of Chiseled Bookshelves in Minecraft\n\nOriginal Bad Apple:\nhttps://www.youtube.com/watch?v=FtutLA63Cp8\n\nMy Links!\nPortfolio: https://ludocrypt.crd.co/\nDiscord: https://discord.com/invite/bbhS2vy\nBandcamp: https://ludocrypt.bandcamp.com/music\nSpotify: https://open.spotify.com/artist/68YtlfmCDOni6VNJiHw7qo?si=BfT8I3QkQ3uuVL_kedvxfw\nCurseforge: https://www.curseforge.com/members/ludocrypt/projects\nModrinth: https://modrinth.com/user/LudoCrypt",
        "videoUrl": "https://www.youtube.com/watch?v=9vnhHj2qi9M",
        "previewImgUrl": "https://img.youtube.com/vi/9vnhHj2qi9M/hqdefault.jpg",
        "authorId": 191,
        "id": 217
    },
    {
        "title": "Bad Apple but Played on Christmas Lights",
        "description": "Bad Apple on Christmas lights! Merry Christmas :)",
        "videoUrl": "https://www.youtube.com/watch?v=gv5oly2gu0U",
        "previewImgUrl": "https://img.youtube.com/vi/gv5oly2gu0U/hqdefault.jpg",
        "authorId": 192,
        "id": 218
    },
    {
        "title": "WorstApple #4 | Bad Apple But Its ONE ANALOG CLOCK Because I Was Dared To...",
        "description": "Actually how edition? how is this even possible? how did I even do this? idek but its past my bedtime so gn now.\n\nWaste of money:\npatreon.com/WorstApple\n\nTags i guess:\n#badapple #bad #apple #python #coding #code #broken #fractal #trippy #worstapple #worstappleever #magiceye #60fps #color #original #badapplebut #but #ai #lyrics",
        "videoUrl": "https://www.youtube.com/watch?v=IfcItGA9L24",
        "previewImgUrl": "https://img.youtube.com/vi/IfcItGA9L24/hqdefault.jpg",
        "authorId": 193,
        "id": 219
    },
    {
        "title": "WorstApple #3 | Bad Apple But Its ANALOG Clocks...",
        "description": "Its finally done lets go!!\n\nUhhhhhh this took like 2 weeks and probably over 10 hours to code so like the video or something I guess or don't I don't really care.\n\nTags i guess:\n#badapple #bad #apple #python #coding #code #broken #fractal #trippy #worstapple #worstappleever #magiceye #60fps #color #original #badapplebut #but #ai #lyrics",
        "videoUrl": "https://www.youtube.com/watch?v=hAHXZCAqN4A",
        "previewImgUrl": "https://img.youtube.com/vi/hAHXZCAqN4A/hqdefault.jpg",
        "authorId": 193,
        "id": 220
    },
    {
        "title": "Bad Apple on a 7 Segment Digital Clock Display",
        "description": "This is an edit of Natt Akuma Channel!'s Bad Apple on 240 7 segment displays. This is uploaded in the intention to improve the audio. I do not intend to steal Natt's work, just to provide potential exposure with this edit.\nGo check out his channel!!\n\nhttps://www.youtube.com/channel/UCvMXSjcsczkuDJc4qANy2jQ",
        "videoUrl": "https://www.youtube.com/watch?v=D8xEuWoDZjo",
        "previewImgUrl": "https://img.youtube.com/vi/D8xEuWoDZjo/hqdefault.jpg",
        "authorId": 194,
        "id": 221
    },
    {
        "title": "Bad Apple but with only straight lines",
        "description": "Every line touches 2 edges of the image, and each frame consists of up to 5000 lines.\nPotential seizure warning\n\nCode: https://github.com/CameronChoy/BadAppleFLSL\nOriginal: https://youtu.be/FtutLA63Cp8",
        "videoUrl": "https://www.youtube.com/watch?v=Y-gFajE5UEM",
        "previewImgUrl": "https://img.youtube.com/vi/Y-gFajE5UEM/hqdefault.jpg",
        "authorId": 195,
        "id": 222
    },
    {
        "title": "Bad Apple but with onion skin enabled",
        "description": "Original Song: https://www.youtube.com/watch?v=FtutLA63Cp8\n\nView the code here\nhttps://github.com/Cookei/bad-apple-onion-skin",
        "videoUrl": "https://www.youtube.com/watch?v=n_fwUL_BDxY",
        "previewImgUrl": "https://img.youtube.com/vi/n_fwUL_BDxY/hqdefault.jpg",
        "authorId": 196,
        "id": 223
    },
    {
        "title": "Bad Apple But Played Using Iron Trapdoors in Minecraft",
        "description": "This work is based on the song from The Touhou Project\n\nBehind the scenes: https://youtu.be/CvajAPbe0xk\n\nWatch the 1 million views celebration video\nhttps://youtu.be/5idyTkp-FG0\n\nCredits to @underratedunknown3102 who did it first:\nhttps://www.youtube.com/watch?v=tT7meHoYJ6Y\n\nGitHub: https://github.com/Tommyhetrick/BadAppleIronTrapdoors\n\nWorld Download: https://www.mediafire.com/file/loltncld48dwl7w/BadAppleIronTrapdoors.zip/file\n\n#badapple #minecraft",
        "videoUrl": "https://www.youtube.com/watch?v=Yl47RoFQas8",
        "previewImgUrl": "https://img.youtube.com/vi/Yl47RoFQas8/hqdefault.jpg",
        "authorId": 197,
        "id": 224
    },
    {
        "title": "Bad apple - but its meowsynth",
        "description": "Discord ( Feel free to DM me )\nhttps://discord.gg/puQ4kVc3q6\nAny suggestions and ideas are appreciated!\n------------------------------\nSpecial mentions to @Pinky Animates for sugesting the idea for this video!\nhttps://www.youtube.com/channel/UCc5YBrO6ATY1s9GGQJfp1xg , https://www.youtube.com/channel/UCylQyU8K-jtZsBFiLlZ8XyA\n( Btw nice animations! )\n(Notes at the end werent intended but I still hope you enjoy it :D )",
        "videoUrl": "https://www.youtube.com/watch?v=nnUOtUjhchE",
        "previewImgUrl": "https://img.youtube.com/vi/nnUOtUjhchE/hqdefault.jpg",
        "authorId": 198,
        "id": 225
    },
    {
        "title": "MINECRAFT Bad Apple But Colored Version",
        "description": "",
        "videoUrl": "https://www.youtube.com/watch?v=8LQggHfGpIU",
        "previewImgUrl": "https://img.youtube.com/vi/8LQggHfGpIU/hqdefault.jpg",
        "authorId": 188,
        "id": 226
    },
    {
        "title": "WorstApple #5 | BAD APPLE BUT YOU CAN ONLY SEE IT IN 720P",
        "description": "MUST WATCH AT 720p OR 1080p OR ELSE IT WONT WORK!!!!\n\nThanks for watching and sorry for the stuttering lol this is very hard to render in python!\n\nWaste of money:\npatreon.com/WorstApple\n\n\nTags i guess:\n#badapple #bad #apple #python #coding #code #broken #fractal #trippy #worstapple #worstappleever #magiceye #60fps #color #original #badapplebut #but #ai #lyrics",
        "videoUrl": "https://www.youtube.com/watch?v=X-DDT2l8Ao4",
        "previewImgUrl": "https://img.youtube.com/vi/X-DDT2l8Ao4/hqdefault.jpg",
        "authorId": 193,
        "id": 227
    },
    {
        "title": "bad apple but it's played on r/place clone (@ludwig's our/place timelapse)",
        "description": "bad apple played on a canvas game\n\nOnly 45 seconds of bad apple was animated on our/place. Rest of this video is fake.\n\nFor full timelapse of everything else go to Ludwig's channel here: https://youtu.be/SBwoVbUfhuc\nFor the 2023 timelapse on r/place itself go watch this video: https://youtu.be/IKXDyKWXBhk",
        "videoUrl": "https://www.youtube.com/watch?v=9yrqY8Q8WK8",
        "previewImgUrl": "https://img.youtube.com/vi/9yrqY8Q8WK8/hqdefault.jpg",
        "authorId": 199,
        "id": 228
    },
    {
        "title": "bad apple but you have to dodge the black pixels",
        "description": "the color black absorbs the most light and therefore is the hottest... that's why mario's feet are on fire \ud83d\ude08\n\nhow did i make it: dma copy an i8 texture. im a lazy dumb programmer so theres no cool compression or anything. it still fits on an n64 cart because it really isn't that much data.\n\n- Links -\nMain Channel: https://www.youtube.com/@Rovert_YT\nDiscord Server: https://discord.gg/X7vvvKu\nRHDC: https://romhacking.com/user/Rovert\n\n\ud83d\udc14",
        "videoUrl": "https://www.youtube.com/watch?v=uTH1wRpYMk4",
        "previewImgUrl": "https://img.youtube.com/vi/uTH1wRpYMk4/hqdefault.jpg",
        "authorId": 200,
        "id": 229
    },
    {
        "title": "Bad AppKit   HD 1080p",
        "description": "I know it's not actually AppKit but bear with me\n\nhttps://github.com/AndroidKitKat/Bad-AppKit\n\nBad Apple song: https://www.youtube.com/watch?v=FtutLA63Cp8",
        "videoUrl": "https://www.youtube.com/watch?v=yJ6YRInG4tI",
        "previewImgUrl": "https://img.youtube.com/vi/yJ6YRInG4tI/hqdefault.jpg",
        "authorId": 201,
        "id": 230
    },
    {
        "title": "responding to some comments",
        "description": "Hey folks, sorry for the relatively lower effort video. I'm not expecting this one to get as many views since there's no Bad Apple!! in the title anyway. I've been swamped in assignments these past few days as exams are coming up but at the same time I wanted to at least acknowledge 3k subscribers (thanks again!). \n\nI'll go more into detail in what was used for the Bad Apple!! part of this video when I finish that (it's not very optimal as of now, so if I recorded the whole thing now it would take a real-time of around 8 hours). \n\nI've been losing track of comments lately and I'm not very active on most social media so I decided to make a Discord server for video suggestions, code explanation, etc. Join it and say hi if you'd like, I don't think it'll be a very big server. https://discord.gg/WEykWbjkR2\n\nCheck out my other stuff on GitHub: https://github.com/kevinjycui\n\nCommunity Captions:\nPortuguese (Brazil) - GuilhermeBR",
        "videoUrl": "https://www.youtube.com/watch?v=DH6WDlWJdIk",
        "previewImgUrl": "https://img.youtube.com/vi/DH6WDlWJdIk/hqdefault.jpg",
        "authorId": 53,
        "id": 231
    },
    {
        "title": "\u3010Touhou\u3011 Bad Apple!! PV (All Apples Reproduction Carving Art)\u3010\u6771\u65b9\u3011",
        "description": "Creator of this video: \u30ea\u30f3\u30b4\u306e\u9b54\u8853\u5e2b\nhttps://www.nicovideo.jp/user/9138773\n\nAccording to the creator, he ate all 25 apples.\nHe always carve apples on pixiv. Link to his pixiv:\nhttp://www.pixiv.net/member.php?id=820757\n\nBadApple!!PV\u3092\u5168\u3066\u30ea\u30f3\u30b4\u3067\u518d\u73fe\u3057\u3066\u307f\u305f\u3002\r\nUploaded from Nico Nico Douga:\r\nhttp://www.nicovideo.jp/watch/sm9837984\r\n\r\nAlt tags: Touhou \u6771\u65b9 Bad Apple!! nomico",
        "videoUrl": "https://www.youtube.com/watch?v=rSiOhsGwcII",
        "previewImgUrl": "https://img.youtube.com/vi/rSiOhsGwcII/hqdefault.jpg",
        "authorId": 132,
        "id": 232
    },
    {
        "title": "Bad Apple but Played in Conway's Game of Life",
        "description": "Minecraft main channel: @Sloimay \n\nOne generation of the Game of Life is computed every frame, but at the same time, all white pixels of the corresponding frame in the Bad Apple music video are set as \"alive cells\" inside the GOL grid.\nThis channel is officially shitpost approved :D",
        "videoUrl": "https://www.youtube.com/watch?v=KLLYet7qHbU",
        "previewImgUrl": "https://img.youtube.com/vi/KLLYet7qHbU/hqdefault.jpg",
        "authorId": 202,
        "id": 233
    },
    {
        "title": "Bad Apple in Minecraft [Command Blocks]",
        "description": "So this is my recreation of Bad Apple in minecraft using resource pack with edited audio and items in item frames. Took me about 30-40 days to do this.",
        "videoUrl": "https://www.youtube.com/watch?v=7AaMaeAOitI",
        "previewImgUrl": "https://img.youtube.com/vi/7AaMaeAOitI/hqdefault.jpg",
        "authorId": 203,
        "id": 234
    },
    {
        "title": "Touhou - Bad Apple on 8 Musical Floppy Drives",
        "description": "Thanks for Mrsolidsnake745 for supplying some of the midi files",
        "videoUrl": "https://www.youtube.com/watch?v=lKcodsiomoU",
        "previewImgUrl": "https://img.youtube.com/vi/lKcodsiomoU/hqdefault.jpg",
        "authorId": 204,
        "id": 235
    },
    {
        "title": "Bad Apple - Touhou.  Floppy Drive Orchestra",
        "description": "Bad Apple from Touhou, as played by the Floppy Drive orchestra\n\nFor any licensing requests please contact\u00a0licensing@break.com",
        "videoUrl": "https://www.youtube.com/watch?v=njUFABsdy4M",
        "previewImgUrl": "https://img.youtube.com/vi/njUFABsdy4M/hqdefault.jpg",
        "authorId": 205,
        "id": 236
    },
    {
        "title": "Touhou \u2013 Bad Apple (Samsung Cover)",
        "description": "",
        "videoUrl": "https://www.youtube.com/watch?v=ignZO-ZnfhE",
        "previewImgUrl": "https://img.youtube.com/vi/ignZO-ZnfhE/hqdefault.jpg",
        "authorId": 206,
        "id": 237
    },
    {
        "title": "\"Touhou - Bad Apple!!\" on a Google Spreadsheet",
        "description": "If this isn't the best way to use Google Sheets I don't know what is.\n\nI wrote a script that extracts the pixels from each frame and converts them to numbers. These numbers were then sent via the Google Sheets API to a spreadsheet that changes background color based on each cells' value.",
        "videoUrl": "https://www.youtube.com/watch?v=-PBQViYED-E",
        "previewImgUrl": "https://img.youtube.com/vi/-PBQViYED-E/hqdefault.jpg",
        "authorId": 207,
        "id": 238
    },
    {
        "title": "I'm back, with a TI-84 Plus emulator and Bad Apple",
        "description": "Credits to fb39ca4, check his video here: https://www.youtube.com/watch?v=6pAeWf3NPNU\nOriginal song: https://www.youtube.com/watch?v=9lNZ_Rnr7Jc (Bad Apple - Stage 3 in Touhou 5)",
        "videoUrl": "https://www.youtube.com/watch?v=TZ600kdFHp4",
        "previewImgUrl": "https://img.youtube.com/vi/TZ600kdFHp4/hqdefault.jpg",
        "authorId": 208,
        "id": 239
    },
    {
        "title": "Bad Apple But Played On Notepad++ And Not Flickering.",
        "description": "Bad Apple But Played On Notepad++ And Not Flickering...\n\nNotepad++ Is Different Than Notepad... But If You Care About Look And Smoothness... Notepad++ Is The Answer...\nWhatever You Use Find Or PageDown Button... It Will Not Flickering... But Instead It Will \"Stuck\" At Some Point (Maybe Cuz It's Need To Load That Huge Number Of Line)...\n\nWatch My Original \"Bad Apple But Played On Notepad\"\nhttps://youtu.be/rknrunmQArs\n\nAnd... To See How I Made This... Check Here... :3.\nhttps://youtu.be/LPe_2na41wY\n\nAlso... Subs Please... :3.",
        "videoUrl": "https://www.youtube.com/watch?v=upGzDQh1KcM",
        "previewImgUrl": "https://img.youtube.com/vi/upGzDQh1KcM/hqdefault.jpg",
        "authorId": 138,
        "id": 240
    },
    {
        "title": "Bad Apple!! But it's a Geometry Dash level",
        "description": "ID: 67127924\nNONG Song: http://bit.ly/3gvtjow\nPress read more for info on how I made the level!\n\nOkay so I did this all in four hours (during online school but who cares), here's a quick rundown of how it all went:\n\nStep 1 - Download the Bad Apple!! music video, then use FFmpeg to extract all the frames from it. The video is nerfed down to a resolution of 50x38 pixels, and 30 frames per second (6572 frames total). 50x38 is important because it equals 1900 pixels total, which is just enough for GD's limit of 999 group IDs and 999 color IDs. It also takes up just enough space in the ship gamemode.\n\nStep 2 - Write a program to convert every frame to 0s and 1s, where 0=white and 1=black. Any pixel with a combined RGB value of more than 128*3 is considered white. Save every frame in a massive .json file (12 megabytes)\n\nStep 3 - Write another program to create a 50x38 canvas in Geometry Dash using pixel blocks. The first 950 pixels are colored black and assigned groups 1-950, and the last 950 are assigned color channels 1-950 (are all black by default). The pixels with group IDs can be individually toggled off to reveal a white pixel behind it. \n\nStep 4 - Create the 'base' GD level in the editor, while you're still able to open it without crashing. This basically means anything that I'm not using code for. The frame around the video, the background color, syncing with the audio, etc.\n\nStep 5 - Calculate how fast the player moves at 4x speed by recording a video and going frame by frame. You travel at 3.125 frames/tile at 60fps, which means 0.64 tiles/frame at 30 fps. 1 tile is 30 editor units, which means that a player at 4x speed is travelling at 19.2 units per frame. This means that we will update the pixels every 19.2 units (a little bit over half a grid space, 0.64 to be exact)\n\nStep 6 - Loop through every frame in the video and check for any pixels that change color. For each changed pixel, a color or toggle trigger (depending on which pixel) will be added to the level's code and flip the pixel from black to white or vice versa. Note that triggers are only added for pixels that CHANGE, because using 1900 triggers for every single frame is a recipe for disaster.\n\nStep 7 - Upload to the GD servers! At first I thought the level was too big to upload but turns out it was just because I had exclamation marks in the level title. So I removed them.\n\nmmm yeah that's about it, i had a lot of fun working on this. i'll probably update the level once or twice to fix sync or optimize it further, we'll see.\n\nOriginal Bad Apple: https://youtu.be/FtutLA63Cp8\n\n----------------------------------------\u00ad----------------------------------------\u00ad-----------------\n\nSide note: There is actually another person who made Bad Apple in GD!!\nhttps://www.youtube.com/watch?v=DxO3S_phfL8\n\nI was very aware of this video but wanted to try coding it myself. The main difference between our versions is that mine only uses legal values for group+color IDs (1-999) which means that the level is playable in 2.11 and also uploadable to the servers. However, this also means that my version has a much lower resolution.\n\n----------------------------------------\u00ad----------------------------------------\u00ad-----------------\n\nTwitter: https://twitter.com/TheRealGDColon\nMain Channel: https://youtube.com/gdcolon",
        "videoUrl": "https://www.youtube.com/watch?v=c6NMa716-Ek",
        "previewImgUrl": "https://img.youtube.com/vi/c6NMa716-Ek/hqdefault.jpg",
        "authorId": 209,
        "id": 241
    },
    {
        "title": "\u3010Mod\u3011Bad Apple!! feat.nomico (PV)\u3010\u592a\u9f13\u306e\u9054\u4eba The Drum Master!\u3011",
        "description": "Bad Apple\u304c\u518d\u751f\u3067\u304d\u308b\u306e\u3067\u3053\u306e\u30b2\u30fc\u30e0\u306f\u795e\u30b2\u30fc\u3060\u3068\u601d\u3044\u307e\u3059\n\nThank you Bandai Namco for providing us a very moddable game!",
        "videoUrl": "https://www.youtube.com/watch?v=ZFZqxrKr6Js",
        "previewImgUrl": "https://img.youtube.com/vi/ZFZqxrKr6Js/hqdefault.jpg",
        "authorId": 210,
        "id": 242
    },
    {
        "title": "DON'T YOU LECTURE ME WITH YOUR THIRTY DOLLAR BAD APPLE",
        "description": "Bad Apple!! made using https://gdcolon.com/%F0%9F%97%BF by GDColon\nalso check his twitter: https://twitter.com/TheRealGDColon\nthis took me five days to make\n\na link to the files: https://drive.google.com/drive/folders/1jxdsxqEsjkxKebHtiXbq-W7ypMa2xbr_\n\n#thirtydollarwebsite",
        "videoUrl": "https://www.youtube.com/watch?v=insn50YRHm4",
        "previewImgUrl": "https://img.youtube.com/vi/insn50YRHm4/hqdefault.jpg",
        "authorId": 211,
        "id": 243
    },
    {
        "title": "Bad Apple Channel Reveals Analytics",
        "description": "Special occasion lower-effort Junferno. You probably already know what it's going to be.\n\nSee it on GitHub: https://github.com/kevinjycui/bad-apple\n\nPatreon: https://www.patreon.com/Junferno\nTwitter: https://twitter.com/kevinjycui\nJoin the Discord: https://discord.gg/junferno\nSecondary Discord invite if vanity invite expires: https://discord.gg/WEykWbjkR2\nCheck out my other stuff on GitHub: https://github.com/kevinjycui\n\nBad Apple!! 15th Anniversary UTAU Cover\nJunferno UTAU Voicebank (Junfune CV): https://www.mediafire.com/file/22pdpgotm8849ls/Junfune_%25E3%2582%25B8%25E3%2583%25A5%25E3%2583%25B3%25E3%2583%2595%25E9%259F%25B3v1.0.zip/file\nKasane Teto UTAU Voicebank\nUST by Tanjiro Taidana: https://www.youtube.com/channel/UCOv0dX8-2WKj21xEKYmpr2A\n\nMusic tracklist: https://www.youtube.com/playlist?list=PLsTVaNk5lQHlq4hB124qTGlsrhyiAfqfR\n\nCommunity Captions\nCzech - adamira7390\nGreek - geg\nPortuguese (Brazil) - GuilhermeBR",
        "videoUrl": "https://www.youtube.com/watch?v=WOQil8pL0oU",
        "previewImgUrl": "https://img.youtube.com/vi/WOQil8pL0oU/hqdefault.jpg",
        "authorId": 53,
        "id": 244
    },
    {
        "title": "Bad Apple!! on a QR Code Generator",
        "description": "Behind the Scenes: https://youtu.be/R4p2OcRmTg4\n\nand with that, I'm back to uploading on a maybe-monthly basis.\ndon't hold me up to that though, that's just an estimate based on previous uploads.",
        "videoUrl": "https://www.youtube.com/watch?v=dWkTWwRKUZ4",
        "previewImgUrl": "https://img.youtube.com/vi/dWkTWwRKUZ4/hqdefault.jpg",
        "authorId": 175,
        "id": 245
    },
    {
        "title": "Bad Apple in space but bitrate doesn't get destroyed pt.1",
        "description": "Best viewed at 1/4 resolution, the technique and video are blurry from origin oops...",
        "videoUrl": "https://www.youtube.com/watch?v=ND__alj5F9k",
        "previewImgUrl": "https://img.youtube.com/vi/ND__alj5F9k/hqdefault.jpg",
        "authorId": 156,
        "id": 246
    },
    {
        "title": "Bad Apple but in Apex Legends",
        "description": "Playing Bad Apple from Touhou in modded Apex Legends, R5Reloaded.\n\nThe code can be found here: https://github.com/mostlyfireproof/R5RVideoPlayer\n\nHuge thanks to Treyzania for his code for making this in Minecraft: https://gitlab.com/delbonis/rottenplayer\n\n#R5Reloaded #Apex #ApexLegends",
        "videoUrl": "https://www.youtube.com/watch?v=q6AvpuOgAvw",
        "previewImgUrl": "https://img.youtube.com/vi/q6AvpuOgAvw/hqdefault.jpg",
        "authorId": 212,
        "id": 247
    },
    {
        "title": "Developing a roguelike, but instead Bad Apple",
        "description": "Making a roguelike with godot engine, but got distracted and made Bad Apple instead. Productive procrastination.",
        "videoUrl": "https://www.youtube.com/watch?v=mxk49FsDRg8",
        "previewImgUrl": "https://img.youtube.com/vi/mxk49FsDRg8/hqdefault.jpg",
        "authorId": 213,
        "id": 248
    },
    {
        "title": "Bad Apple on a GPS",
        "description": "Bad Apple playing back on a GPS, might not be as exciting as running an specifically made app for the purpose or a demo, but it's still Bad Apple running on a GPS.\n\nThe model of this GPS is the Mio C250. Has been unlocked to run u-boot and has been patched to run any software. specifications are shown in the video but I'll put them here too.\n\nSamsung SMC3440A CPU\n32MB of RAM\n256MB of internal storage\nSD Card slot with support up to 2GB\n320x240 TFT display with a resistive touch screen\nNo network at all\nWindows CE Core 5.0\n\nHad to make the player run faster than usual because if playing back at 100% speed, it would run a bit slower than normal, so I set it to somewhere around 103%",
        "videoUrl": "https://www.youtube.com/watch?v=_xxaEBYWxFk",
        "previewImgUrl": "https://img.youtube.com/vi/_xxaEBYWxFk/hqdefault.jpg",
        "authorId": 214,
        "id": 249
    },
    {
        "title": "Bad Apple on Chiseled Bookshelf",
        "description": "Bad Apple animation on the Chiseled Bookshelf added in snapshot 22w46a, implemented using a data pack and a custom python script. The video plays in realtime, but audio was added afterwards as it doesn't use a resource pack.\n\nSource code and datapack download (in releases):\nhttps://github.com/kasamikona/BadAppleBookshelf\n\nThis video uses the music \"Bad Apple!!\" by Alstroemeria records in the spirit of creative parody. The original song is from Touhou Project and belongs to ZUN, and is used fairly under ZUN's fan-content terms of use (https://touhou-project.news/guidelines_en/).",
        "videoUrl": "https://www.youtube.com/watch?v=v6e8hrWweEY",
        "previewImgUrl": "https://img.youtube.com/vi/v6e8hrWweEY/hqdefault.jpg",
        "authorId": 215,
        "id": 250
    },
    {
        "title": "Bad Apple!! played in Team Fortress 2 using VScripts",
        "description": "2 days ago Valve (or who ever pulls the strings for TF2) added a new beta branch to TF2 that adds the VScript functionality that other games, like L4D2 and CS:GO had. One of my first ideas was to play Bad Apple in TF2 using this, and here we are.\n\nThe footage is in real time and the audio is being played from the game itself. No editing was done except to overlay the original video for comparison.\n\nDownload on the Workshop: https://steamcommunity.com/sharedfiles/filedetails/?id=2885420762 (Higher resolution here!)",
        "videoUrl": "https://www.youtube.com/watch?v=06M4dEJ0CAI",
        "previewImgUrl": "https://img.youtube.com/vi/06M4dEJ0CAI/hqdefault.jpg",
        "authorId": 216,
        "id": 251
    },
    {
        "title": "Bad Apple!! but it's youtube ambient mode",
        "description": "",
        "videoUrl": "https://www.youtube.com/watch?v=4I2TrlyMQJU",
        "previewImgUrl": "https://img.youtube.com/vi/4I2TrlyMQJU/hqdefault.jpg",
        "authorId": 217,
        "id": 252
    },
    {
        "title": "Bad Apple but it's a minecraft panda",
        "description": "original:\nhttps://www.youtube.com/watch?v=UkgK8eUdpAo\n\naddon:\nhttps://github.com/Heisengrind/bad-apple-but-panda",
        "videoUrl": "https://www.youtube.com/watch?v=9N0Sx5ZppUE",
        "previewImgUrl": "https://img.youtube.com/vi/9N0Sx5ZppUE/hqdefault.jpg",
        "authorId": 218,
        "id": 253
    },
    {
        "title": "Bad Apple but it's Played on a Discord Status",
        "description": "As you can tell, I am a very serious engineer \ud83d\ude0e\ud83d\ude0e\n\n\nThis video is sped up a lot since the fastest I could get each frame to play consistently was 1 every 5 seconds (0.2 fps). The entire time-lapse took about 4 hours to complete. Disregarding the fact that the playback on the bot status is super small meaning I couldn't get a lot of detail in, I think it turned out pretty great.\n\nIf you wanna take a look at the spaghetti code I made, here you go:\nText Frame Code: https://github.com/LucientZ/YouTube-Frame-Ripper\nBot Code: https://github.com/LucientZ/DiscordPyBot\n\n#badapple #discord #discordbot",
        "videoUrl": "https://www.youtube.com/watch?v=HWIbUDLiNBs",
        "previewImgUrl": "https://img.youtube.com/vi/HWIbUDLiNBs/hqdefault.jpg",
        "authorId": 219,
        "id": 254
    },
    {
        "title": "it had to be done.",
        "description": "o_O\n\nbad apple with the new chiseled bookshelves feature.",
        "videoUrl": "https://www.youtube.com/watch?v=RlckY0MB7G8",
        "previewImgUrl": "https://img.youtube.com/vi/RlckY0MB7G8/hqdefault.jpg",
        "authorId": 220,
        "id": 255
    },
    {
        "title": "Bad Apple but its ROBLOX - Rate My Avatar",
        "description": "I injected and executed a script that uses black and white emoji's to generate this animation, I did not make the animation. This was all done in a game called Rate My Avatar where you have booths and people can make  the topic of their booth anything they want.\n\nSCRIPT PASTEBIN: https://pastebin.com/2FfQEmzp",
        "videoUrl": "https://www.youtube.com/watch?v=MHH7SkuLxnc",
        "previewImgUrl": "https://img.youtube.com/vi/MHH7SkuLxnc/hqdefault.jpg",
        "authorId": 221,
        "id": 256
    },
    {
        "title": "Bad apple but if you pause you cant see (Remaster)",
        "description": "Thank you all for 1 Million views!\nThis was one of my biggest projects and it is very inspiring to know what can happen with enough time and effort.\n\nhello rob",
        "videoUrl": "https://www.youtube.com/watch?v=Myeatl2Q3wM",
        "previewImgUrl": "https://img.youtube.com/vi/Myeatl2Q3wM/hqdefault.jpg",
        "authorId": 222,
        "id": 257
    },
    {
        "title": "Bad Apple, but it's Minecraft shader",
        "description": "PLEASE READ BEFORE DOWNLOADING THE SHADER\nThis shader contains a lot of data. The game may take a long time to load it or even crash. On my computer, it takes about 25 minutes.\nUPD: The shader may not work at all, it depends on your hardware(\n\nShader (Bad Apple version) - https://drive.google.com/file/d/1ouetxaLzkX7CJ05DMWtbZ85i5F1IOWmj/view?usp=share_link\nShader (Template version) https://drive.google.com/file/d/1KPMHSAPANHp1qUr4M_QKPPk7A11FuSq7/view?usp=share_link\nSecondary channel - https://www.youtube.com/channel/UC24i4QcRIFBwV7BECJZoC5w",
        "videoUrl": "https://www.youtube.com/watch?v=fnH2Lt6KPkU",
        "previewImgUrl": "https://img.youtube.com/vi/fnH2Lt6KPkU/hqdefault.jpg",
        "authorId": 223,
        "id": 258
    },
    {
        "title": "xTATTEREDx Apple (Bad Apple in Dwarf Fortress)",
        "description": "Bad Apple!! remade in Dwarf Fortress using DFHack in Real Time\nBad Apple!!: https://youtu.be/FtutLA63Cp8\n\nI guess this is also my 100 sub special\nMany, many thanks to Fleeting Frames on the Dwarf Fortress Discord!\nSource code: https://pastebin.com/5FZgxZ8K",
        "videoUrl": "https://www.youtube.com/watch?v=nT7I3ZbMBWc",
        "previewImgUrl": "https://img.youtube.com/vi/nT7I3ZbMBWc/hqdefault.jpg",
        "authorId": 224,
        "id": 259
    },
    {
        "title": "Bad apple but you have to look at it from far away (headache warning)",
        "description": "Read this: please stop commenting you can\u2019t see it. Instead, read what other people have done to see the video\n\nYou can also cross your eyes or slant the screen sideways or shake your head or the phone or take off your glasses\n\nPls don\u2019t get upset if you can\u2019t see it\n\n#touhou #badapple #touhouproject",
        "videoUrl": "https://www.youtube.com/watch?v=NDn5WltHBkA",
        "previewImgUrl": "https://img.youtube.com/vi/NDn5WltHBkA/hqdefault.jpg",
        "authorId": 225,
        "id": 260
    },
    {
        "title": "Bad Apple but the \"Bad\" of the Apple plays it",
        "description": "I got inspired by this video: https://www.youtube.com/watch?v=VSWKOw2aSv4\n\nThe brown part is supposed to be a apple that is a bit rotten, idk how to make it look better...",
        "videoUrl": "https://www.youtube.com/watch?v=x-9CVOgtTcg",
        "previewImgUrl": "https://img.youtube.com/vi/x-9CVOgtTcg/hqdefault.jpg",
        "authorId": 226,
        "id": 261
    },
    {
        "title": "Bad Apple!! but it's made in My Singing Monsters Composer Island",
        "description": "I made (1/4 of) the Bad Apple music video in Composer Island, will make the rest soon if there's some interest.\nFriend code: 4001383150JI (Steam)\n\nThis took unbelievably long.\n\nEDIT: Wow, this blew up, holy crap. Thanks for all the support! Also thanks for getting my island to top 10, wow!",
        "videoUrl": "https://www.youtube.com/watch?v=OnKin9H3bCM",
        "previewImgUrl": "https://img.youtube.com/vi/OnKin9H3bCM/hqdefault.jpg",
        "authorId": 227,
        "id": 262
    },
    {
        "title": "Bad Apple, but it's played on a beamer in heavy fog",
        "description": "Espeically at the end it looks amazing.\n\nYou should consider joining my discord. https://discord.gg/Qe8S4pgBJS",
        "videoUrl": "https://www.youtube.com/watch?v=ex-_7muq9MM",
        "previewImgUrl": "https://img.youtube.com/vi/ex-_7muq9MM/hqdefault.jpg",
        "authorId": 228,
        "id": 263
    },
    {
        "title": "Bad Apple but Played in Chess",
        "description": "Main Minecraft channel: @Sloimay \n\nI resized the video to a 32*24, took each pixel and converted them into chess pieces. The blacker, the bigger the black piece, the whiter, the bigger the white piece. The grayer the smaller the piece chosen is, with the smallest being the pawn!\n\nCool moments to check out:\n- 1:18 - Petals are white in the original, but aren't bright enough, so they're portrayed as changing black pieces instead\n- 1:48 - Fire!!\n- 1:57 - The sun creates a lot of in-between black and white pixels, making the piece gradient system really shine.\n- 3:18 - More petals and these look even better than the ones at 1:18 imo!\n- 3:55 - ;)\n\nThanks for watching!",
        "videoUrl": "https://www.youtube.com/watch?v=7_0IQfzoEPo",
        "previewImgUrl": "https://img.youtube.com/vi/7_0IQfzoEPo/hqdefault.jpg",
        "authorId": 202,
        "id": 264
    },
    {
        "title": "Bad Apple but Played On The New Copper Bulbs",
        "description": "*75K* Likes and I'll make a video on the entire process of making Bad Apple run on redstone! SUBSCRIBE!!\n\nOld like goal: 10K likes and I'll make Bad Apple run on actual redstone! HOW DID U GUYS HIT IT SO FAST\n\nMain Minecraft channel: @Sloimay \n\nThought I'd have some fun today and make use of the brand new copper bulb in Minecraft. Not sure how much it'll revolutionize as we have better ways of storing data, but since T-Flip-Flops are used everywhere, bulbs will at least make those contraptions smaller which is always nice!\n\nThanks for watching!",
        "videoUrl": "https://www.youtube.com/watch?v=9jW6WyRoDAQ",
        "previewImgUrl": "https://img.youtube.com/vi/9jW6WyRoDAQ/hqdefault.jpg",
        "authorId": 202,
        "id": 265
    },
    {
        "title": "Bad Apple - But Every FRAME is an AI generated Painting",
        "description": "I used stable diffusion + controlNet to make this video.\n4000 + AI generated frames, this took 9 hours to render.\n\nBig shoutout to KF2015 for the inspiration, his version of this is really good, I wanted to make a version that followed the outline of the characters and objects better.",
        "videoUrl": "https://www.youtube.com/watch?v=awY4v3TULFo",
        "previewImgUrl": "https://img.youtube.com/vi/awY4v3TULFo/hqdefault.jpg",
        "authorId": 229,
        "id": 266
    },
    {
        "title": "Bad Apple!! but played on coins in Super Mario Bros. Wonder",
        "description": "youtube fucked up the compression it wasnt me",
        "videoUrl": "https://www.youtube.com/watch?v=B1kfVGkBfvY",
        "previewImgUrl": "https://img.youtube.com/vi/B1kfVGkBfvY/hqdefault.jpg",
        "authorId": 230,
        "id": 267
    },
    {
        "title": "\u3010\u30b3\u30e1\u4ed8\u304d\u3011Bad Apple!! 100\u7a93",
        "description": "",
        "videoUrl": "https://www.youtube.com/watch?v=rwpJSIWafNo",
        "previewImgUrl": "https://img.youtube.com/vi/rwpJSIWafNo/hqdefault.jpg",
        "authorId": 231,
        "id": 268
    },
    {
        "title": "Danganronpa X Bad Apple [ENGLISH]",
        "description": "DISCLAIMER!\nI only put this video together. The VOCALS aswell as the VISUALS, DO NOT belong to me. Please check out the original creators and give them some support!\n-\nORIGINAL VISUALS:\nhttp://www.nicovideo.jp/watch/sm23159930\n-\nORIGINAL ENGLISH VOCALS:\nhttps://www.youtube.com/watch?v=rG-Fs7de_9o\n-\nORIGINAL JAPANESE VOCALS:\nhttps://www.youtube.com/watch?v=9lNZ_Rnr7Jc\n\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013~ \u2702Pinned Credit\u265a~\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\n\u2727Intro; Chewyminions AJ\u261a\n\u2727Music used in intro; GlitchXCity: Lavender Town Remix\u261a",
        "videoUrl": "https://www.youtube.com/watch?v=PPrUVLG_-MQ",
        "previewImgUrl": "https://img.youtube.com/vi/PPrUVLG_-MQ/hqdefault.jpg",
        "authorId": 232,
        "id": 269
    },
    {
        "title": "\u3010Multilanguage Cover\u3011Touhou: Bad Apple [Happy Eur. Day of Languages!] (Orchestral Ver.) \u3008Avl\u00f6nskt\u3009",
        "description": "Happy European Day of Languages!\nSequel with languages I don't speak: \u2013 https://youtu.be/zbcPEoUrCII \u2013\nA Cappella: \u2013 https://youtu.be/rdv_WzNokz4 \u2013\n\n\u2605 \u2193  MY LIFE AND CREDITS \u2193 \u2605\nI put a lot of tears into mixing this c':\n\nI haven't done a multilanguage cover in two years... I'm getting old. They were originally a subscriber milestone special thing, but then the last one never got finished rip\nAlas, this is a multilanguage cover I had planned two years ago the MOMENT I heard this arrangement, but again, never did :))) It's so pretty though, isn't it? aaaaa\nAnyway, I decided to finish it for today but I'm very tired, so instead of at noon, this is premiering in the evening cri\n\nThere are quite a few languages here to celebrate the day and showcase their poetic capabilities!\nJust a note: I have studied all of these languages myself, so I hope I haven't totally butchered them because that would be embarrassing oof but if you're wondering why any given language isn't here, it's because of limited lyrics space and the fact that I don't speak every single language in existence sdjfsldk sorry\n\nEnjoy!!\n\n\u2605 ORIGINAL CREDITS \u2605\n\u3009Original Song: ZUN\n\u300bbased on the Alstroemeria Records\u2019 arrangement\n\n\u2605 PRODUCTION \u2605\n\u3009Vocals, Mix, Video & English Translations: Avl\u00f6nskt\n\u3009Maps: \u2013 https://mapchart.net \u2013\n\u3009Instrumental: Cloudjumper\n\u300bOriginal Choir: Un3h\n\u300b\u2013 https://youtu.be/TxTprtLZurY \u2013 or with vocals \u2013 https://youtu.be/VBtTL_IsZ5k \u2013\n\u300b\u2013 https://bit.ly/iTunesCloudBadAppleInstru \u2013\n\u300b\u2013 https://bit.ly/GplayCloudBadAppleInstru \u2013\n\u300b\u2013 https://bit.ly/CloudBadAppleInstruSptfy \u2013\n\u300b\u2013 https://bit.ly/AmazonCloudBadAppleInstru \u2013\n\n\u2605 LYRICS \u2605\n\u3009Dutch Lyrics: Tsurin & Avl\u00f6nskt\n\u300bwritten for this video\n\u3009English Lyrics: Pat McCarthy\n\u300b\u2013 https://youtu.be/rG-Fs7de_9o \u2013\n\u3009Finnish Lyrics: Ronya\n\u300b\u2013 https://youtu.be/xDUoKk7xP5k \u2013\n\u3009French Lyrics: Akiro\n\u300b\u2013 https://youtu.be/x3Morn6ZXr4 \u2013\n\u3009German Lyrics: StrawbellyCake\n\u300b\u2013 https://youtu.be/qnWDB1vfFhA \u2013\n\u3009Hungarian Lyrics: TouHUN Project\n\u300b\u2013 https://youtu.be/LbKPJMw1gCE \u2013\n\u3009Japanese Lyrics: Haruka\n\u300b\u2013 https://youtu.be/2GIMgD_gShU \u2013\n\u3009Polish Lyrics: Alexis\n\u300b\u2013 https://youtu.be/Blk1dmycFqc \u2013\n\u3009Russian Lyrics: Lord_D, Ray\n\u300b\u2013 https://youtu.be/sxKVflJe0ac \u2013\n\u3009Slovene Lyrics: Ashucky\n\u300bwritten for this video\n\u3009Spanish Lyrics: Avl\u00f6nskt\n\u300bwritten for this video\n\u3009Ukrainian Lyrics: Hoshizora, Kallaider, \u041a\u0430\u0437\u043a\u0430\u0440 \u041c\u043e\u0444\u0456\n\u300b\u2013 https://youtu.be/-5WdPSAwdPY \u2013\n\n\u3009Script: \u2013 https://bit.ly/AvlMultiBadAppleLyrics \u2013\n\n\u2605 DOWNLOAD \u2605\n\u3009MP3: \u2013 https://bit.ly/AvlBadAppleMulti \u2013\n\n\u2605 OTHER MEDIA \u2605\n\u3009Ko-Fi: \u2013 https://ko-fi.com/thenightavl \u2013\n\u3009PayPal: \u2013 https://bit.ly/paypavl \u2013\n\u3009Tumblr: \u2013 https://thenightavl.tumblr.com \u2013\n\u3009Twitter: \u2013 https://twitter.com/thenightavl \u2013\n\n\u2605 DISCLAIMER \u2605\nI own nothing but my voice. The orchestral arrangement was purchased from Cloudjumper for use in this cover.\n\n#badapple #touhou #\u0432\u043e\u0432\u044c\u0435\u043a",
        "videoUrl": "https://www.youtube.com/watch?v=HUPiIyz8xuU",
        "previewImgUrl": "https://img.youtube.com/vi/HUPiIyz8xuU/hqdefault.jpg",
        "authorId": 233,
        "id": 270
    },
    {
        "title": "Bad Apple!! - Full Version w/video [Lyrics in Romaji, Translation in English]",
        "description": "I did a montage of the video \"Bad Apple!!\" to go with the full version. The song is sang by Nomico and made by Alstroemeria Records.\n\nAt some places, it's not lag. It's just the video that is slow down.\n\n==How to see the subtitles (updated on July 3rd, 2020)==\nThose who are not familiar with the YouTube Captions, you just have to press the settings button and go to \"Subtitles/CC\", it will give you those options:\n- \"English - Translation in English\" - Turn on the English Captions\n- \"Japanese - Romaji\" - Turn on the Romaji Captions\n-  Off\nI hope that was helpful. :)\n\n==Various Description Edits==\nEdit 28-12-2012: 1,000,000 views to end the year! I never thought that the video will actually have a million views. Thanks everyone! :)\n\nEdit 13-11-2013: Wow, 2,000,000 views! That's so incredible!!!  :D\n\nEdit 27-03-2018: Anyone mentioning \"Undertale\" in the comments gets filtered.\n\nEdit 03-07-2020: 27 million views. Wow. I still can't believe an edit of the original Bad Apple!! video that I made when I was 15 years old got this many views.",
        "videoUrl": "https://www.youtube.com/watch?v=9lNZ_Rnr7Jc",
        "previewImgUrl": "https://img.youtube.com/vi/9lNZ_Rnr7Jc/hqdefault.jpg",
        "authorId": 234,
        "id": 271
    },
    {
        "title": "Bad Apple!! (Shadow-Art vs. 3D Models) Side-By-Side Comparison",
        "description": "Disclaimer: I DID NOT MAKE EITHER ONE OF THIS. I SIMPLY PUT THEM SIDE BY SIDE. ALL CREDIT GOES TO THE ORIGINAL CREATORS. \n\nI just put them together for people who would like to see what an excellent job the MMD modelers/posers did in syncing the MMD version to the original shadow-art video.\n\nBad Apple comparison video, Left is the original shadow-art, right is the updated 3d model one using MikuMikuDance (which is an amazing program). Also, I apologize because the encoding seems to have left some flickering artifacts at the bottom of the screen, but there seems to be nothing I can do about that aside from upgrading to a better computer which can handle video editing better.\n\nOriginal 3D Version Video: [6th MMD Cup entry]\non niconico: http://www.nicovideo.jp/watch/sm13595028\non youtube: http://www.youtube.com/watch?v=40gxJPLezQ0\ufeff",
        "videoUrl": "https://www.youtube.com/watch?v=XXQqJDHzcHg",
        "previewImgUrl": "https://img.youtube.com/vi/XXQqJDHzcHg/hqdefault.jpg",
        "authorId": 235,
        "id": 272
    },
    {
        "title": "5 Levels of Bad Apple: Noob to Epic",
        "description": "For more poor cosplay, watch the 6 Best TouHou Songs: https://youtu.be/CA8kRBtgR8o\n\n\u2b50 SUBSCRIBE: http://bit.ly/SubscribeRLM\n\u2b50 NOTIFICATIONS ON \ud83d\udd14\n\u2b50 BUSINESS INQUIRIES \ud83d\udce7 booking@roblandesmusic.com\n\u2b50 LEARN TO PLAY \ud83c\udfbb  https://trala.onelink.me/R2SX/roblandes\n\u2b50 MERCH \ud83d\udc55 http://bit.ly/RobsMerch\n\u2b50 SHEET MUSIC \ud83c\udfbc https://goo.gl/shnDY9\n\u2b50 TIK TOK @Rob_Landes",
        "videoUrl": "https://www.youtube.com/watch?v=BgrEa6-IP34",
        "previewImgUrl": "https://img.youtube.com/vi/BgrEa6-IP34/hqdefault.jpg",
        "authorId": 236,
        "id": 273
    },
    {
        "title": "[Beat Saber] Bad Apple!! (EXPERT+)",
        "description": "Thank you for English subtitles, MuLyer!\nThis is a really amazing map. I've changed many settings for 4K resolution\n... Why does my pc smell like it's burning\n\nThank you for watching!\n\nDiscord: https://discord.gg/makeumove\r\n\r\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\r\nMusic: Bad Apple!!\r\n\r\nBeatmap: Core Pee\n\nSubtitles: MuLyer\nhttps://www.youtube.com/channel/UCgMFQ_omEwVLjBVjCcwHeIg\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -",
        "videoUrl": "https://www.youtube.com/watch?v=sgtpr5vFacw",
        "previewImgUrl": "https://img.youtube.com/vi/sgtpr5vFacw/hqdefault.jpg",
        "authorId": 237,
        "id": 274
    },
    {
        "title": "\u3010BadApple!!\u3011\u50b7\u6797\u679c \u3010ShouRinka\u3011",
        "description": "from Niconico douga\u3000http://www.nicovideo.jp/watch/sm15183453\r\n\r\n\r\nTouhou BGM played in a traditional Japanese Instruments sound on tradtional stage. \r\n\r\nShamisen1: Nami Kineie [http://www.kineienami.jp] \r\nShamisen2: Sakurako Satoh\r\nKoto: Nahoko Ohata [http://music.geocities.jp/mizukawatoshiya/profile1.html]\r\nShakuhachi1: Makoto Takei [http://www.takeimakoto.com] \r\nShakuhachi2: Toshiya Mizukawa [http://music.geocities.jp/mizukawatoshiya] \r\nDrums: Keiko Tada [http://blog.livedoor.jp/tara8/]\r\n\r\nArrangement: Yorihide Fukushima [http://www.fukushima-yorihide.com]\r\nRecorded and mixed by: Toshiya Mizukawa [http://music.geocities.jp /mizukawatoshiya]\r\nCalligraphy: Jiro Shirosuzu [http://siroisuzu.web.fc2.com/]\r\nPhotography, Editing: Ikiro P [http://www.voiceblog.jp/johson/]\r\nHead: Kohtaro Fujiyama [http://www.wazuma.jp]\r\n\r\nOriginal: BadApple!! [ZUN ~Team Shanghai Alice~] [Toho Gensokyo ~Stage 3]",
        "videoUrl": "https://www.youtube.com/watch?v=dx76YPgZviE",
        "previewImgUrl": "https://img.youtube.com/vi/dx76YPgZviE/hqdefault.jpg",
        "authorId": 238,
        "id": 275
    },
    {
        "title": "Bad Apple   Undertale   English version",
        "description": "",
        "videoUrl": "https://www.youtube.com/watch?v=1tQ3ZbuABcQ",
        "previewImgUrl": "https://img.youtube.com/vi/1tQ3ZbuABcQ/hqdefault.jpg",
        "authorId": 239,
        "id": 276
    },
    {
        "title": "KIRA - Bad Apple!! (German Version) ft. Akarui Kouki [GERMAN VCV TEST COVER]",
        "description": "NO COPYRIGHT INFRINGEMENT INTENDED\n------------------------------------------------------------\n\nHello! This is a test of Kouki's German VCV voicebank. I made the reclist myself and it is still a work in progress, but I plan on releasing the list and bank once they are done!\n\nPS: a new song is coming in a few days so I hope you can enjoy this cover until then! \u2764\n\n------------------------------------------------------------\n\nVOICEBANK DOWNLOADS AVAILABLE ON THEIR SITE: http://akarui.utau.us/\n\nSupport me on Patreon and get cool rewards! https://www.patreon.com/kiraproductions\n\n!Shoutout to my Patrons!\n\nEltair\nTrue Blackychan\nDan Balasescu\nCody Brocious\nKogekuma\nFaustly\nCalne Ca\nCarrie McEwan\n\n------------------------------------------------------------\n\nSoundCloud Link: https://soundcloud.com/kira_productions/akarui-kouki-bad-apple-german-vcv-test\n\n------------------------------------------------------------\n\nOriginal song by Masayoshi Minoshima (sm8628149)\nGerman Translyrics by StrawbellyCake\nCover & Voicebank by KIRA\nIllustration by seica\nUST by peachbite1 (edits by me)\n\n------------------------------------------------------------\n\nFollow us!\n\n- Me (Kira) -\n\nTwitter: http://bit.ly/2FRRYTJ\nSoundcloud: http://bit.ly/2pmlDy1\n\n- seica -\n\nTwitter: https://bit.ly/2JTXFmI\n\n- Echo/Ekko -\n\nTwitter: https://bit.ly/2cA0JUb\nInstagram: http://bit.ly/2E26zv5\nYouTube: http://bit.ly/1IpjD9t",
        "videoUrl": "https://www.youtube.com/watch?v=1pUXLuIBCKQ",
        "previewImgUrl": "https://img.youtube.com/vi/1pUXLuIBCKQ/hqdefault.jpg",
        "authorId": 240,
        "id": 277
    },
    {
        "title": "Touhou - Bad Apple [English vocal by Cristina Vee]",
        "description": "A fanmade mix by me with the original Bad Apple video and the English version performed by Cristina Vee (lyrics by Pat McCarthy).\n\n\nGo to her channel and tell her how awesome she is: http://www.youtube.com/user/ValliereVee\n\nLyrics:\nEver on and on I continue circling\nWith nothing but my hate in a carousel of agony\nTill slowly I forget and my heart starts vanishing\nAnd suddenly I see that I can't break free--I'm\nSlipping through the cracks of a dark eternity\nWith nothing but my pain and the paralyzing agony\nTo tell me who I am, who I was\nUncertainty enveloping my mind\nTill I can't break free, and\n\nMaybe it's a dream; maybe nothing else is real\nBut it wouldn't mean a thing if I told you how I feel\nSo I'm tired of all the pain, of the misery inside\nAnd I wish that I could live feeling nothing but the night\nYou can tell me what to say; you can tell me where to go\nBut I doubt that I would care, and my heart would never know\nIf I make another move there'll be no more turning back\nBecause everything will change, and it all will fade to black\n\nWill tomorrow ever come? Will I make it through the night?\nWill there ever be a place for the broken in the light?\nAm I hurting? Am I sad? Should I stay, or should I go?\nI've forgotten how to tell. Did I ever even know?\nCan I take another step? I've done everything I can\nAll the people that I see I will never understand\nIf I find a way to change, if I step into the light\nThen I'll never be the same, and it all will fade to white\n\nEver on and on I continue circling\nWith nothing but my hate in a carousel of agony\nTill slowly I forget and my heart starts vanishing\nAnd suddenly I see that I can't break free--I'm\nSlipping through the cracks of a dark eternity\nWith nothing but my pain and the paralyzing agony\nTo tell me who I am, who I was\nUncertainty enveloping my mind\nTill I can't break free, and\n\nMaybe it's a dream; maybe nothing else is real\nBut it wouldn't mean a thing if I told you how I feel\nSo I'm tired of all the pain, of the misery inside\nAnd I wish that I could live feeling nothing but the night\nYou can tell me what to say; you can tell me where to go\nBut I doubt that I would care, and my heart would never know\nIf I make another move there'll be no more turning back\nBecause everything will change, and it all will fade to black\n\nIf I make another move, if I take another step\nThen it all would fall apart. There'd be nothing of me left\nIf I'm crying in the wind, if I'm crying in the night\nWill there ever be a way? Will my heart return to white?\nCan you tell me who you are? Can you tell me where I am?\nI've forgotten how to see; I've forgotten if I can\nIf I opened up my eyes there'd be no more going back\n'Cause I'd throw it all away, and it all would fade to black",
        "videoUrl": "https://www.youtube.com/watch?v=rG-Fs7de_9o",
        "previewImgUrl": "https://img.youtube.com/vi/rG-Fs7de_9o/hqdefault.jpg",
        "authorId": 241,
        "id": 278
    },
    {
        "title": "MMD Bad Apple!! Now in 3D with more Color~",
        "description": "The newer version of MMD\u30e2\u30c7\u30eb\u3067\u5f71\u7d75Bad Apple!!\u3092\u9006\u8f38\u5165 with more nico nico.\r\n\r\nOriginal: http://www.nicovideo.jp/watch/sm13595028\r\nPrevious version: http://www.youtube.com/watch?v=yMuXMkrWnDY",
        "videoUrl": "https://www.youtube.com/watch?v=uOyaCOViAPA",
        "previewImgUrl": "https://img.youtube.com/vi/uOyaCOViAPA/hqdefault.jpg",
        "authorId": 242,
        "id": 279
    },
    {
        "title": "Touhou Project (OST) [Bad Apple] Alstroemeria Records & Nomico RUS song #cover",
        "description": "Radiant Records \u2014 [Jully] \u0413\u043d\u0438\u043b\u043e\u0435 \u044f\u0431\u043b\u043e\u043a\u043e \nOriginal: Alstroemeria Records & Nomico \u2014 Bad Apple \nSource: \u041f\u0440\u043e\u0435\u043a\u0442 \u0412\u043e\u0441\u0442\u043e\u043a \nVocals: Jully \nSound Production: Radiant, Felya \nLyrics: Lord_D, Ray \nVideo: Misaki (subtitles), Polka, Radiant .\n\nHelp us to make more new videos. Donate: http://paypal.me/Radiantoid\n~~~~~~~~~~~~~~~~\nhttp://RadiantRecords.ru\n~~~~~~~~~~~~~~~~\n\u0421\u0441\u044b\u043b\u043a\u0438:\n\nRadiantRecords Jully_RR",
        "videoUrl": "https://www.youtube.com/watch?v=sxKVflJe0ac",
        "previewImgUrl": "https://img.youtube.com/vi/sxKVflJe0ac/hqdefault.jpg",
        "authorId": 243,
        "id": 280
    },
    {
        "title": "Bad Apple MV [Electro Swing Remix (ft. Adrisaurus & The Musical Ghost)]",
        "description": "I hope you enjoyed our cover of Bad apple~\n\nCheck out Adrisaurus\nhttps://www.youtube.com/channel/UCAHPCNxU4A-TUV-lnu7u4tA\nCheck out The Musical Ghost\nhttps://www.youtube.com/channel/UCqeHbI0rfexnHhhEgrg8Exg\n\nVideo by Corey Dyer \n\n\n~GET IN STORES~\nITUNES: https://apple.co/2XZl8IQ\nGOOGLE PLAY: https://bit.ly/2LuXbHp\nAMAZON: https://amzn.to/2ysrOVt\nSPOTIFY: https://spoti.fi/30HjyNo\nAPPLE MUSIC: https://apple.co/2JF2AcG\n\n#badapple #electroswing #or3o\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\nFOLLOW ME HERE o('\u03c9')o\n\n\u2605 Instagram \u2605 https://bit.ly/2Wn9bfV\n\u2605 Twitter \u2605 https://bit.ly/2vzdid5\n\u2605 Twitch \u2605 https://bit.ly/2VFVED8\n\u2605 TikTok \u2605 https://bit.ly/3jwuHgS\n\u2605 Discord server \u2605 https://bit.ly/2ZQaJkK\n\u2605 Spotify \u2605 https://spoti.fi/2JckofA\n\u2605 Soundcloud \u2605https://bit.ly/2WkyUpm\n\u2605 One time donations\u2605https://bit.ly/2UVtCzc\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
        "videoUrl": "https://www.youtube.com/watch?v=EYXR5DT2IbY",
        "previewImgUrl": "https://img.youtube.com/vi/EYXR5DT2IbY/hqdefault.jpg",
        "authorId": 244,
        "id": 281
    },
    {
        "title": "\u300eRockleetist\u300f Bad Apple!! - English \u300eAshe\u300f",
        "description": "Rockleetist approached me a while ago in the hopes of doing this song and I admit that it took me a while, but I'm actually glad it took me so long. My mic quality and vocal quality have both improved since then. Some of you might remember that I did this song a few years back. But I'm glad to have gotten the chance to do this with such an influential singer. Thanks, Rachel! \n\nLyrics by Pat McCarthy (Please do not ask to use them. I cannot give you permission for that):\n\nEver on and on I continue circling\nWith nothing but my hate in a carousel of agony\nTill slowly I forget and my heart starts vanishing\nAnd suddenly I see that I can't break free--I'm\nSlipping through the cracks of a dark eternity\nWith nothing but my pain and the paralyzing agony\nTo tell me who I am, who I was\nUncertainty enveloping my mind\nTill I can't break free, and\n\nMaybe it's a dream; maybe nothing else is real\nBut it wouldn't mean a thing if I told you how I feel\nSo I'm tired of all the pain, of the misery inside\nAnd I wish that I could live feeling nothing but the night\nYou can tell me what to say; you can tell me where to go\nBut I doubt that I would care, and my heart would never know\nIf I make another move there'll be no more turning back\nBecause everything will change, and it all will fade to black\n\nWill tomorrow ever come? Will I make it through the night?\nWill there ever be a place for the broken in the light?\nAm I hurting? Am I sad? Should I stay, or should I go?\nI've forgotten how to tell. Did I ever even know?\nCan I take another step? I've done everything I can\nAll the people that I see I will never understand\nIf I find a way to change, if I step into the light\nThen I'll never be the same, and it all will fade to white\n\nEver on and on I continue circling\nWith nothing but my hate in a carousel of agony\nTill slowly I forget and my heart starts vanishing\nAnd suddenly I see that I can't break free--I'm\nSlipping through the cracks of a dark eternity\nWith nothing but my pain and the paralyzing agony\nTo tell me who I am, who I was\nUncertainty enveloping my mind\nTill I can't break free, and\n\nMaybe it's a dream; maybe nothing else is real\nBut it wouldn't mean a thing if I told you how I feel\nSo I'm tired of all the pain, of the misery inside\nAnd I wish that I could live feeling nothing but the night\nYou can tell me what to say; you can tell me where to go\nBut I doubt that I would care, and my heart would never know\nIf I make another move there'll be no more turning back\nBecause everything will change, and it all will fade to black\n\nIf I make another move, if I take another step\nThen it all would fall apart. There'd be nothing of me left\nIf I'm crying in the wind, if I'm crying in the night\nWill there ever be a way? Will my heart return to white?\nCan you tell me who you are? Can you tell me where I am?\nI've forgotten how to see; I've forgotten if I can\nIf I opened up my eyes there'd be no more going back\n'Cause I'd throw it all away, and it all would fade to black\n\nmp3: https://www.box.com/s/fyhrywcqa2u4bl0ytcag\nhttp://www.mediafire.com/?ecqbi4vyjs9jsf3\n\nhttp://twitter.com/rockleetist\nhttp://twitter.com/ashestoashesjc\nhttp://rockleetist.tumblr.com\nhttp://ashestoashesjc.tumblr.com\n\nDonations (if you feel so inclined): http://tinyurl.com/nz9x8dp",
        "videoUrl": "https://www.youtube.com/watch?v=kPLxGctIQJE",
        "previewImgUrl": "https://img.youtube.com/vi/kPLxGctIQJE/hqdefault.jpg",
        "authorId": 245,
        "id": 282
    },
    {
        "title": "BAD APPLE!! || METAL COVER by RichaadEB ft. Cristina Vee",
        "description": "THE TIME HAS FINALLY COME\n\n\u301aTOUHOU || BAD APPLE!!\u301b\n\n\u2192AVAILABLE ON THE ALBUM \"BULLET HELL\" \u2190 \n\ud83c\udfb5 iTunes: https://apple.co/2ZAgcf6\n\ud83c\udfb5 Google Play: http://bit.ly/2M4uFN3 \n\ud83c\udfb5 Amazon: https://amzn.to/2M6RQ9A\n\ud83c\udfb5 Spotify: http://spoti.fi/2E9lv9W\n\ud83c\udfb5 Deezer: http://bit.ly/2M68JkU\n\n\u27a1\ufe0f GET THE REMASTERED VERSION ON BULLET HELL II \u2b05\ufe0f\n\ud83c\udfb5 Spotify: https://spoti.fi/2Of9AyM\n\ud83c\udfb5 Apple Music: https://apple.co/38Si8VK\n\ud83c\udfb5 Google Play: https://bit.ly/3iNpcr8\n\ud83c\udfb5 Amazon: https://amzn.to/2Oa43JI\n\ud83c\udfb5 Deezer: https://bit.ly/3gJMr3u\n\n\ud83c\udfb5 INSTRUMENTAL: https://apple.co/33fSWVV\n\n\ud83d\udcbf PHYSICAL CDs HERE: http://www.richaadeb.com/merch \ud83d\udcbf\n\nYo HUUUUGE shoutout to Cristina Vee for agreeing to reprise her role for this video - she absolutely killed it! If you're not familiar with her work, you can it out over at her channel:\n\n\u25ba https://www.youtube.com/user/ValliereVee\n\nSUBSCRIBE FOR MORE:  https://www.youtube.com/richaadeb?sub_confirmation=1\n\n\u2192 FOLLOW ME \u2190\nTWITTER: https://twitter.com/richaadeb/\nMERCHANDISE: http://www.richaadeb.com/merch\nDISCORD SERVER: https://discord.gg/NAc6MzU\u200b\nFACEBOOK: https://www.facebook.com/RichaadEB\nPATREON: https://www.patreon.com/RichaadEB\nINSTAGRAM: https://www.instagram.com/richaadeb/\n\nCREDITS:\n__________\nOriginal Composition - Jun'ya Ota & Masayoshi Minoshima\nVocals - Cristina Vee\nLyrics - Pat McCarthy and Cristina Vee\nCinematography - NotRachelable & Nathan Sharp\nEditing - NotRachelable\nVocal Mixing - Shawn Christmas & Jonathan Young\nEverything Else - me\n\n[LYRICS in the closed captions]\n\n- Filmed on location at Villainous Media -",
        "videoUrl": "https://www.youtube.com/watch?v=9Xz4NV0zsbY",
        "previewImgUrl": "https://img.youtube.com/vi/9Xz4NV0zsbY/hqdefault.jpg",
        "authorId": 246,
        "id": 283
    },
    {
        "title": "\u3010Touhou\u3011 -Bad Apple!!- (Orchestral Arrangement) feat. Un3h",
        "description": "Maybe it's a dream; maybe nothing else is real.\n\u25baListen to the instrumental: https://youtu.be/TxTprtLZurY\nDownload:\n\u25baiTunes: http://bit.ly/iTunesBadApple\n\u25baGoogle Play: http://bit.ly/GPlayBadApple\n\u25baSpotify: http://bit.ly/SpotifyBadApple\n\u25baAmazon: http://bit.ly/AmazonBadApple\n\u25baSoundcloud: http://bit.ly/SCBadApple\n\nI am SO excited to finally be able to release this song to you guy, it's a track that has been in development hell for almost over a year but it is finally ready to be released and I could not be happier!\n\nFirst of all I have to give a HUGE thanks to Un3h for providing her amazing vocals to this song, it truly brought it to life in a way I could never have imagined. Make sure you all go check out her channel for some amazing vocal covers!\nUn3h's channel: http://bit.ly/Un3hYouTube\n\nI also have to give a huge thanks to Xandu who managed to make the best animation I've ever had on this channel, I love how the video turned out so much and I am so thankful that he always steps up to make such beautiful animations to my videos! \nPlease check him out as well for some really heavy hitting metal remixes and amazing vocal covers!\nXandu's channel: http://bit.ly/XanduYT\n\nAnd last but not least, thank you iRA for making the beautiful artwork for the video, it wouldn't have turned out as great as it did if it wasn't for your amazing art!\nFollow iRA on twitter: https://twitter.com/BladeChro\n\nAnd finally I have to thank you all for sticking by me and listening to my music, your support truly means the world to me, thank you!\n\nFollow me on social media:\nhttps://twitter.com/Cloudjumper__\nSoundcloud: http://bit.ly/2qoPcRm\n\n--CREDITS--\nOriginal Song by: Zun\nBased on arrangement by: Alstroemeria Records\nArrangement, mix and master: Cloudjumper\nVocals and choir: Un3h\nArtwork by: iRA\nVideo: Xandu",
        "videoUrl": "https://www.youtube.com/watch?v=VBtTL_IsZ5k",
        "previewImgUrl": "https://img.youtube.com/vi/VBtTL_IsZ5k/hqdefault.jpg",
        "authorId": 247,
        "id": 284
    },
    {
        "title": "\u2727Nightcore - Bad Apple {Switching Vocals} (lyrics)",
        "description": "\u223dSupport me\u223d\n\u27a5Second channel \u2192 http://bit.ly/2kdewm0\n\u27a5Facebook \u2192 http://bit.ly/2kbDC9I\n\u27a5Twitter \u2192 http://bit.ly/2kQBFNb\n\u27a5Instagram \u2192 http://bit.ly/2kdawBY Thank you so much for listening! \u2661\n\nLyrics in video\u221a\nNightcored by me\u221a\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\u27a5Song: Bad Apple\n\u27a5Original artist: Touhou\n\u27a5Cover/remix by: Rockleetist x Ashe\n\n\u2192Anime/Visual novel: Mirai Nikki\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\u223dSupport Rockleetist\u223d\n\u25b7https://www.youtube.com/user/rockleetist/featured\n\u25b7https://soundcloud.com/rockleetist\n\u25b7https://twitter.com/rockleetist\n\n~Support Ashe~\n\u25b7https://www.youtube.com/channel/UCpxuU8Cb3U9A_lRQ_yrjdGw\n\u25b7http://www.facebook.com/ashestoashesjc\n\u25b7https://twitter.com/#!/ashestoashesjc\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\u223dSupport me\u223d\n\u27a5Subscribe \u2192 http://bit.ly/2l1XKdU\n\u27a5Second channel \u2192 http://bit.ly/2kdewm0\n\u27a5Facebook \u2192 http://bit.ly/2kbDC9I\n\u27a5Donate \u2192 http://bit.ly/2rfJLlD\n\u27a5Twitter \u2192 http://bit.ly/2kQBFNb\n\u27a5Instagram \u2192 http://bit.ly/2kdawBY\n\n\u2022Contact me\u2022\n\u25c7NightcoreWolfie@outlook.com\n\u25c7Skype: NightcoreWolfieYT\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nPLEASE READ:\nI do not own the copyright of the music and picture! I just use it for recreation. This is fair use! All the credits go to the respective owners. \n\nFAIR USE:\n\"Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for \"fair use\" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.\"\n\n*If you're an artist and don't want your content on my channel, please contact me and I will remove it.",
        "videoUrl": "https://www.youtube.com/watch?v=ndsdZkHzSwE",
        "previewImgUrl": "https://img.youtube.com/vi/ndsdZkHzSwE/hqdefault.jpg",
        "authorId": 248,
        "id": 285
    },
    {
        "title": "Bad Apple Mirror Dance",
        "description": "",
        "videoUrl": "https://www.youtube.com/watch?v=JgeQPTq2xqk",
        "previewImgUrl": "https://img.youtube.com/vi/JgeQPTq2xqk/hqdefault.jpg",
        "authorId": 249,
        "id": 286
    },
    {
        "title": "BAD APPLE!! - Piano Tutorial",
        "description": "\u25b6 SUBSCRIBE for more awesome piano videos!\n\u25b6 Get COOL extras! https://www.patreon.com/sheetmusicboss\n\u25b6 Learn piano with flowkey! https://go.flowkey.com/sheetmusic\nSpotify: https://open.spotify.com/artist/3637OEmwj1q0HinT4YIx5f\nDiscord: https://discord.gg/MJbY7YE\nMerch: https://smb-shop.fourthwall.com/\n\nSUBSCRIBE for a new piano tutorial every day from Sheet Music Boss: https://bit.ly/subtoSMB\n\nTV & Movie Soundtrack Piano Tutorials \u27a4 https://bit.ly/33Ky8bL\nImpossible Piano Tutorials from Sheet Music Boss  \u27a4 https://bit.ly/SMBimpossible\nHard Piano Tutorials from Sheet Music Boss  \u27a4 https://bit.ly/SMBhard\nMedium Piano Tutorials from Sheet Music Boss  \u27a4 https://bit.ly/SMBmedium\nEasy Piano Tutorials from Sheet Music Boss  \u27a4 https://bit.ly/SMBeasy\n\nGet the newest sheets:\n\u25b6 Musicnotes: https://tinyurl.com/smb-musicnotes\n\u25b6 Gumroad: https://gumroad.com/sheetmusicboss\n\u25b6 Sheet Music Plus: https://tinyurl.com/smb-sheet-music\n\nLearn Bad Apple!! by ZUN on piano with this tutorial! Please enjoy!\n\nArranged by Andrew Wrangell\nEdited by Samuel Dickenson\n\nFollow Sheet Music Boss!\n\u25b6 https://sheetmusicboss.com/\n\u25b6 https://www.facebook.com/SheetMusicBoss/\n\u25b6 https://www.twitter.com/SheetMusicBoss/\n\u25b6 https://sheetmusicboss.tumblr.com/\n\nBad Apple!! is a track by ZUN (featuring Nomico) for the game series Touhou Project. The games are bullet hell shooters made by Team Shanghai Alice, who is a single person, ZUN, who creates all aspects of the game. Bad Apple!! is one of the most popular tracks that appear in Touhou Project. Since its release it has been the subject of countless Black MIDI creations and arrangements, so we thought we ought to make a playable version for all of you! This piano arrangement is tricky but rewarding to learn, so if you love Bad Apple!! you'll love this!",
        "videoUrl": "https://www.youtube.com/watch?v=tW3oXdl1E64",
        "previewImgUrl": "https://img.youtube.com/vi/tW3oXdl1E64/hqdefault.jpg",
        "authorId": 250,
        "id": 287
    },
    {
        "title": "Bad Apple!! (English Remaster)",
        "description": "Provided to YouTube by Soundrop\n\nBad Apple!! (English Remaster) \u00b7 RichaadEB\n\nBullet Hell II\n\n\u2117 2020 RichaadEB\n\nReleased on: 2020-07-10\n\nFeatured  Artist: Cristina Vee\nAdapter: ZUN (Jun'ya Ota)\n\nAuto-generated by YouTube.",
        "videoUrl": "https://www.youtube.com/watch?v=jxEigw8RQ5k",
        "previewImgUrl": "https://img.youtube.com/vi/jxEigw8RQ5k/hqdefault.jpg",
        "authorId": 251,
        "id": 288
    },
    {
        "title": "BAD APPLE!! / NEG\u30ca\u30b9 & Project Epsilon\u3010 Hardstyle Remix \u3011",
        "description": "WARNING!! : VIDEO CONTAINS FLASHING IMAGERY. PLEASE EXERCISE CAUTION BEFORE VIEWING \n\n\u3059\u3079\u3066\u5909\u3048\u308b\u306e\u306a\u3089\u9ed2\u306b\u306a\u308c\uff01\uff01\n-------------------------------------------------------------------------\nI sang NOMICO's Bad Apple!! , featuring a GORGEOUS Hardstyle instrumental by Epsilon!! \n\nHe worked very hard to produce an absolute BANGER, and I cannot overstate how much I love it. He was incredibly easy to work with.\n\nInstrumental version on Epsi's channel : https://www.youtube.com/watch?v=Ach0PTz_jZg \n\nCredits : \nVideo + Vocals + Illustration  :  NEG \u30ca\u30b9 \nTwitter : https://twitter.com/__negg ) \n\nMix & Mastering + Instrumental Arrange : Epsilon\nTwitter : https://twitter.com/EpsilonRemixes\nYoutube : https://www.youtube.com/c/Epsilon9/\n\nOriginal song by NOMICO & ZUN\n https://twitter.com/nomico_honey (NOMICO)\nhttps://twitter.com/korindo (ZUN) \n\n\n\n-------------------------------------------------------------------------\nIt's been awhile since my solo cover, hasn't it? \n\nLife's been REAL busy since I started getting the whole vtuber thing going, but I hope to be back on schedule for my regular Vsinger uploads too!  I learnt a whole bunch of new tricks for this video (illustration AND editing-wise), so I hope you enjoyed ! \n-------------------------------------------------------------------------\nTrim Path + Repeater \u21d1\u21d3\n\n#\u6b4c\u3063\u3066\u307f\u305f \uff03NEG\u30ca\u30b9 \uff03BadApple!!",
        "videoUrl": "https://www.youtube.com/watch?v=u_sFgInK90w",
        "previewImgUrl": "https://img.youtube.com/vi/u_sFgInK90w/hqdefault.jpg",
        "authorId": 252,
        "id": 289
    },
    {
        "title": "HIKAKIN? vs Only HIKAKIN? \u30dc\u30a4\u30d1\u5bfe\u6c7a Bad Apple!!",
        "description": "\u2193\u30d2\u30ab\u30ad\u30f3\u4f5c\u8005\u3000\u307e\u3060\u304f\u3089\u3055\u3093\nhttps://www.youtube.com/channel/UC3N7lv3zpXkc0bMjC2BYbRw\n\n\u2193Ugly H(Messiah H)\nhttps://youtu.be/Lms3iLBf0LU\n\n\u2193HIKAKIN & Daichi\nhttps://youtu.be/2OK7TQol7kQ\n\n\u2193Various H\nhttps://youtu.be/Oe87yBwLcKY\n\n#\u97f3MAD\n#\u30dc\u30a4\u30d1\u5bfe\u6c7a",
        "videoUrl": "https://www.youtube.com/watch?v=gpAv7J8EAbc",
        "previewImgUrl": "https://img.youtube.com/vi/gpAv7J8EAbc/hqdefault.jpg",
        "authorId": 253,
        "id": 290
    },
    {
        "title": "\u9752\u5f71\u672cvs\u3050\u308b\u305f\u307f\u3093  \u30dc\u30a4\u30d1\u5bfe\u6c7aBad Apple!!",
        "description": "\u6771\u65b9\u597d\u304d\u306e\u308c\u3093\u3055\u3093\u306e\u30ea\u30af\u30a8\u30b9\u30c8",
        "videoUrl": "https://www.youtube.com/watch?v=t6xfWpz6uwU",
        "previewImgUrl": "https://img.youtube.com/vi/t6xfWpz6uwU/hqdefault.jpg",
        "authorId": 254,
        "id": 291
    },
    {
        "title": "\u3010\u6771\u65b9Vocal\u3011 Bad Apple!! feat.nomico (Nhato Remix) \u300cAlstroemeria Records\u300d \u3010Subbed\u3011",
        "description": "\u2606\u30df Title\uff1a Bad Apple!! feat.nomico (Nhato Remix)\n\u2606\u30df Album\uff1a 10th Anniversary Bad Apple!! feat.nomico\n\u2606\u30df Circle\uff1a Alstroemeria Records \u300c\u30a2\u30eb\u30b9\u30c8\u30ed\u30e1\u30ea\u30a2\u30ec\u30b3\u30fc\u30ba\u300d\n\n\u2605\u5f61 Original Title\uff1a Bad Apple!! \uff0f Stage 3 Theme\n\u2605\u5f61 Source\uff1a \u6771\u65b9\u5e7b\u60f3\u90f7\u3000\uff5e Lotus Land Story \uff08Touhou Gensoukyou, meaning \"Fantastic Land of the East\".\uff09\n\n\u266c\u266a\u266b \u30df Vocal\uff1a Nomico\n\u266c\u266a\u266b \u30df Lyrics\uff1a Haruka\n\u266c\u266a\u266b \u30df Remix\uff1a Nhato\n\u266c\u266a\u266b \u30df Arrangement\uff1a Masayoshi Minoshima \u300c\u7b95\u5cf6\u30de\u30b5\u30e8\u30b7\u300d\n\u266c\u266a\u266b \u30df Original Composer\uff1a ZUN \u300c\u4e0a\u6d77\u30a2\u30ea\u30b9\u5e7b\u6a02\u56e3\u300d\n\n\u2727\u5f61 Event\uff1a Hakurei Shrine Reitaisai 14 \u300c\u535a\u9e97\u795e\u793e\u4f8b\u5927\u796d\uff11\uff14\u300d\n\u2727\u5f61 Release Date\uff1a May 07, 2017\n\u2727\u5f61 Website\uff1a http://alst.net/2017/05/03/arcd0056-10th-anniversary-bad-apple/\n\u2727\u5f61 Album Genre\uff1a Dance, Trance, House, EDM, Electronic\uff06Electro House \u2014 Touhou Vocal Arrangement Album.\n\n\u273f\u5f61 Picture Artist\uff1a \u52a0\u80fd \uff08Kanou\uff09\n\u273f\u5f61 Artist's Pixiv Page\uff1a https://www.pixiv.net/member.php?id=7204265\n\u273f\u5f61 Illustration Source\uff1a https://www.pixiv.net/member_illust.php?mode=medium&illust_id=59555608\n\u273f\u5f61 Character\uff1a Elly \u300c\u30a8\u30ea\u30fc\u300d\n\nI think this is by far one of the best remixes I have ever listened that's made for this song. The other remixes in this album were already good but Nhato's remix was on a whole new level. I quite enjoyed this album. I mean c'mon regardless of how many times you listen this song, no matter how much you loop it, it doesn't change the fact that this is one of these songs that never gets old. And lastly it's been 10 years since this song released and this album was perfect way to celebrate it. \n\nSo in short Happy anniversary BAD APPLE!! (\u2267\u25e1\u2266) \u2661\n\nEnjoy\uff01(\u3063\u02d8\u03c9\u02d8\u03c2 ) \u266c\u266a\u266b \n\n10th Aniversary Bad Apple!! feat.nomico is doujin album which is mainly focused on Bad Apple!! remixes from various Touhou doujin music artist. The album released by Alstroemeria Records back in on Reitaisai 14 (2017-05-07).\n\n\u2727 Buy the album here\uff1a\n\u4e00 https://diverse.direct/alstroemeria-records/arcd0055/\n\u4e00 http://www.tanocstore.net/shop/shopdetail.html?brandcode=000000001184\n\n\uff0a Translated by \"kafka-fuura\"\uff1a \n\n\u4e00 https://kafkafuura.wordpress.com/2009/06/29/bad-apple-lyrics-and-rambling/\n\nPlease turn on captions in order to view kanji, romaji and English translated lyrics in this video\uff01\n\nThanks in advance and (\u30fe(\u00b4\uff65\u03c9\uff65\uff40)\u266a  Enjoy\uff01\n\n\u30fb\u30fb\u30fb\u30fb\u30fb\u30fb\u30fb\u30fb\u30fb\u30fb\u30fb\u30fb\u30fb\u30fb\u30fb\u30fb\u30fb\u30fb\u30fb\u30fb\n\n\u2193Disclaimer!\u2193\n\u2193\u79c1\u306f\u3053\u306e\u52d5\u753b\u3067\u4f7f\u308f\u308c\u3066\u3044\u308b\u97f3\u697d\u3068\u80cc\u666f\u306e\u8457\u4f5c\u6a29\u306e\u6240\u6709\u8005\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u2193\n\nI don't own anything in this video, including the audio and picture. The credits goes their respective owners. This video is purely fan-made, and will not be used for profit or illegal sharing!\n\n\u79c1\u306e\u30d3\u30c7\u30aa\u306f\u53ce\u76ca\u5316\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002\u3042\u306a\u305f\u306f\u6b4c\u306e\u6240\u6709\u8005\u3092\u3057\u3066\u3044\u308b\u3057\u3001\u3053\u3053\u304b\u3089\u524a\u9664\u3057\u305f\u3044\u5834\u5408\u306f\u79c1\u306b\u9023\u7d61\u3057\u3066\u304f\u3060\u3055\u3044\uff01\u79c1\u306f\u5373\u5ea7\u306b\u30d3\u30c7\u30aa\u3092\u524a\u9664\u3057\u307e\u3059\u3002\n\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3057\u305f\uff01\n\nPlease contact me if you're the owner of this song and want to remove it from this channel! \nI will instantly delete the video.\n\nContact me via e-mail or leave me message in the comment section below\uff1a nitorikappashiro@gmail.com\n\nThank you!",
        "videoUrl": "https://www.youtube.com/watch?v=SfnbdZR2KOo",
        "previewImgUrl": "https://img.youtube.com/vi/SfnbdZR2KOo/hqdefault.jpg",
        "authorId": 255,
        "id": 292
    },
    {
        "title": "Bad Apple!!! (feat. Rena) \u3010Intense Symphonic Metal Cover\u3011",
        "description": "\u25b7 SUBSCRIBE FOR MORE \u25ba http://bit.ly/FalKKonE_SUB \u25c4\nA remake of my old Intense Symphonic Metal Cover of Bad Apple!!  \n\nTouhou hou hou\n\nEncore! Metalcore! Applecore! \n\nThe extra exclamation notes the upgrade \ud83c\udf4e\n\n\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727 CREDITS \u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\n\nOriginal music: \n\u25ba Alstroemeria Records - Bad Apple!!\nby Masayoshi Minoshima, Haruka & nomico \n\nTranscribed, arranged and produced by Micha\u0142 \"FalKKonE\" Soko\u0142owski. \n\nVocals performed and recorded by Rena.\nhttps://www.youtube.com/user/yandeiNSaNiTYiSSaNE/\n\nPicture by Rena.\nhttps://www.patreon.com/TsundeRena\n\n\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727 LINKS \u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\n\n\u25b7 PLAYLIST:\n\u25ba http://bit.ly/FalKKonE_Touhou    \n\n\ud83c\udfb5  GET IT ON SPOTIFY, iTUNES & MORE:\n\u25ba https://www.falkkone.com/releases/badapple\n\n\u25b7 FOLLOW ME:\n\u25ba FACEBOOK http://bit.ly/FalKKonE_FB\n\u25ba TWITTER https://twitter.com/FalKKonE\n\u25ba INSTAGRAM http://bit.ly/FalKKonE_Insta  \n\n\u25b7 SUPPORT ME:\n\u25ba https://www.youtube.com/falkkone/join\n\n\u25b7 JOIN DISCORD SERVER:\n\u25ba https://discord.gg/VCHAufr \n\n\u25b7 MERCH:\n\u25ba http://www.falkkone.com/merch \n\n\u25b7 Using my music FAQ:\n\u25ba https://www.falkkone.com/faq\n\n\u25b7 Distribute your covers legally with Soundrop:\n\u25ba http://bit.ly/sellcovers\n\n\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726 \n\n#Touhou #Cover #BadApple #MetalCover #SymphonicMetal",
        "videoUrl": "https://www.youtube.com/watch?v=5dAjvRcFo1A",
        "previewImgUrl": "https://img.youtube.com/vi/5dAjvRcFo1A/hqdefault.jpg",
        "authorId": 256,
        "id": 293
    },
    {
        "title": "Bad Apple Bottom Jeans - Flo Rida \u00d7 Alstroemeria Records",
        "description": "Inspired by @Triple-Q: https://www.youtube.com/watch?v=4u2nNWgnXxA\n\nAlso on SoundCloud: https://soundcloud.com/pluffaduff/bad-apple-bottom-jeans\n\n\u25c4 Baby I'm Back IV \u25ba\n\nSpotify: https://open.spotify.com/album/30cL9OxEzd4eSUXC6nnm2G\n\nTwitter: https://twitter.com/pluffaduff\nPatreon: https://www.patreon.com/pluffaduff\nDiscord: http://discord.gg/Q4ZvPUe\n\nA very special thanks to this month's Patrons\n\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25bc\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\nAnonymous\navery\nCarico\nCarlton Gray\nElliot Waugh\nGreySkale\nKryptoDigital\nMystman64\nNickolas Hacker\nPopeSalty\nReese Frederick Herber\nRobert\nSeb\nSmash Inspector\nTheArkaneFennec\nZeb",
        "videoUrl": "https://www.youtube.com/watch?v=92Gq_mG-cQY",
        "previewImgUrl": "https://img.youtube.com/vi/92Gq_mG-cQY/hqdefault.jpg",
        "authorId": 257,
        "id": 294
    },
    {
        "title": "BAD APPLE!! (Japanese) || METAL COVER by RichaadEB & Cristina Vee",
        "description": "Y'all asked for it... The Japanese Version of Bad Apple!! (Remastered!)\n\n\u301aTOUHOU || BAD APPLE!!\u301b\n\n\u27a1\ufe0f GET THIS COVER ON BULLET HELL II \u2b05\ufe0f\n\ud83c\udfb5 Spotify: https://spoti.fi/2Of9AyM\n\ud83c\udfb5 Apple Music: https://apple.co/38Si8VK\n\ud83c\udfb5 Google Play: https://bit.ly/3iNpcr8\n\ud83c\udfb5 Amazon: https://amzn.to/2Oa43JI\n\ud83c\udfb5 Deezer: https://bit.ly/3gJMr3u\n\n(The updated English Remaster is on the album as well!!)\n\nSUBSCRIBE TO CRISTINA VEE:\n\u25bahttps://www.youtube.com/c/CristinaVeeMusic/\n\nSUBSCRIBE FOR MORE:  https://www.youtube.com/richaadeb?sub_confirmation=1\n\n\u2192 FOLLOW ME \u2190\nTWITTER: https://twitter.com/richaadeb/\nMERCHANDISE: http://www.richaadeb.com/merch\nDISCORD SERVER: https://discord.gg/NAc6MzU\u200b\nFACEBOOK: https://www.facebook.com/RichaadEB\nPATREON: https://www.patreon.com/RichaadEB\nINSTAGRAM: https://www.instagram.com/richaadeb/\n\nCREDITS:\n__________\nCinematography, Art, Animation and Editing -  @NotRachelable  \nOriginal Composition - Jun'ya Ota (ZUN)\nVocals - @Cristina Vee \nVocal Mix - Shawn Christmas and Myself\nBased on Arrangement and Lyrics by  Masayoshi Minoshima & Nomico\nEverything Else - RichaadEB (me)\n\n#touhou #BulletHell #BadApple",
        "videoUrl": "https://www.youtube.com/watch?v=ZhClc6X1NIQ",
        "previewImgUrl": "https://img.youtube.com/vi/ZhClc6X1NIQ/hqdefault.jpg",
        "authorId": 246,
        "id": 295
    },
    {
        "title": "SFM/FNAF| Two Faced Purity |Bad Apple - Roux (Alma-Gemea Remix)",
        "description": "!!!STORY!!! - Charlie forgot what happened on that day when she had changed. Throughout the years she tried to remember who she was and what happened to her. She was hiding from a  monster and following the shadows, but she didn't know that the monster was the reflection of her anger and guilt. When she accepted herself and stopped hiding, she could finally remember what happened to her on that day when she lost her old self.\n\nHere is the Full story of the Afton Family - https://www.quotev.com/story/11436648/The-Destroyed-Happiness\n\nSo as some may know, I have made straw poll about the next song to animate! (Here it is if you want to vote for it! (or you can go straight to my \"community\" posts) - https://www.youtube.com/user/XboxGamerK/community?view_as=subscriber)\n\nI WILL ANIMATE BEHIND THE MASK! I am just waiting for some things to be done. Then I will continue it! (Hopefully it will be done this year)\n\nAnd yes, I know that there is no intro. YouTube started for some reason copyright my whole video because of it. So I will change the intro soon. (Hopefully)\n\nIf people are still going to complain about Face flexes, I won't care anymore. They are cool and you cannot change my mind lol. (Don't push your \"right\" agenda on anyone, everyone has their own truth)\n\n\ud83c\udf10 My Social Media / Sites \ud83c\udf10\n\ud83c\udf80FaceBook: https://www.facebook.com/Xboxgamerk-111000877384031/\n\ud83c\udf80Instagram: https://www.instagram.com/xboxgamerk/\n\ud83c\udf80Twitter: https://twitter.com/kravale_katrina\n\ud83c\udf80TikTok: https://vm.tiktok.com/ZSae3FKU/\n\ud83c\udf80Steam: https://steamcommunity.com/id/xboxgamerk/\n\ud83c\udf80Twitch: https://www.twitch.tv/xboxgamerk\n\ud83c\udf80DA: http://xboxgamerk.deviantart.com/\n\ud83c\udf80VK: https://vk.com/katrinakr\n\ud83d\udeabI DO NOT\ud83d\udeab own any groups anymore, so please, be careful for fake ones!!!\n\n\ud83d\udeabDO NOT RE-UPLOAD!\ud83d\udeab You can do something creative out of it. If you want to use it full then please contact me on YouTube.\n\n\u25a0REMIX USED IN THE VIDEO\u25a0 by Roux (Alma-Gemea Remix) - https://youtu.be/ectGpHA54Rs\n\n\u25a0ORIGINAL SONG\u25a0 (the original original one is in the description of this video) - https://youtu.be/UkgK8eUdpAo\n\n\u25a0Outro song\u25a0 Ahxello - Forever\n\nAll models and stuff DON'T belong to me even the music, only my efforts in this animation! \n\n\u25a0Models\u25a0 by: \nSpringbonnie - Failz\nCrying kids - Coolioart\nPurple guy - Derpity Ellis\nNight Guard (Michael) - Victor Lazo \nWithered Freddy / Chica / Foxy / Bonnie, Toy Freddy / Chica / Bonnie, Mangle - Ports from the game (FNAF VR: Help Wanted)\nSecurity Puppet V5 - NadoRenders\nStylized Security Puppet - Luiz_Craf327\nOlivia - Crazyb2000\nMolten Freddy - FriskYT\nNightmare Puppet - CortezAnimations\nLefty - nathanzicaoffiial\n\n\u25a0 In intro / outro \u25a0 Plushy / organic (anthro) Nightmerinas (Bears) - CortezAnimations\nPokemon version (Weesnaaw) - SammyTFM\n\n\u25a0Maps\u25a0 \nFNAF 2 map\nFNAF6 map (Private?)\n\u25a0NOTE\u25a0 - Some scenes I was building from props!\n\n\u25a0PROGRAMS\u25a0 I used: \nSFM Source Filmmaker\nClip Studio Paint EX for redoing pictures\nVegas Pro 16 Edit Steam Edition for montage all parts together\n\nTHIS WAS MADE IN 26 DAYS (~183 hours in total)\n~Enjoy!~\n\n\n#SFM #XboxGamerK #Animations\nJOIN VSP GROUP PARTNER PROGRAM: https://yoola.app/r/6115825201790",
        "videoUrl": "https://www.youtube.com/watch?v=Kjf-u2dJZIg",
        "previewImgUrl": "https://img.youtube.com/vi/Kjf-u2dJZIg/hqdefault.jpg",
        "authorId": 258,
        "id": 296
    },
    {
        "title": "(No Gear) Roblox RoBeats - Bad Apple (Hard) [34] A+ / 97.17% / 7 misses / 2297x",
        "description": "I don't play this game much anymore, but if you enjoyed, please subscribe! Thanks ^^\n\u2b50Star Code : Signicial\n\ud83d\udd14Turn on ALL NOTIFICATION to get all my video updates!\n\n\ud83d\udcac Here's my Social Medias, Join and follow to catch up!\n\u25baTwitter : https://www.twitter.com/signicialyt\n\u25baTwitch : https://www.twitch.tv/signupredir111\n\u25baDiscord Server :  https://discord.gg/UtdE7yC5ws\n\n\ud83c\udfae Here's me on Roblox :\n\u25baProfile : https://www.roblox.com/users/938606704/profile\n\u25baGroup : https://www.roblox.com/groups/9140600/Signicials\n\n\u26a0\ufe0f No offense to anyone, do not harass anyone who appear in the video!\nThanks for watching! :DDD\n\n#roblox #robeats #signicial\n\n\ud83c\udfaeMore Details :\n\u25ba\u27282nd Channel : https://www.youtube.com/c/laicingis\n\n(NOTE : This is description rework, details for the link mentioned in the video might be missing!)\n\nCurrently Setting for RoBeats (As of 1/2/2023) :\n\n\u3010Keybind\u3011\n\u27a4Key 1 : Z\n\u27a4Key 2 : X\n\u27a4Key 3 : Comma ,\n\u27a4Key 4 : Period .\n\n\u3010About Speed\u3011\n\u27a4Speed : x2.05 (82)\n\u27a4Display Mode = Default (3D)\n\n\u3010About Timing\u3011\n\u27a4Note Offset : +0 ms \u2b50Star Code : Signicial\n\ud83d\udd14Turn on ALL NOTIFICATION to get all my video updates!\n\n\ud83d\udcac Here's my Social Medias, Join and follow to catch up!\n\u25baTwitter : https://www.twitter.com/signicialyt\n\u25baTwitch : https://www.twitch.tv/signupredir111\n\u25baDiscord Server :  https://discord.gg/UtdE7yC5ws\n\n\ud83c\udfae Here's me on Roblox :\n\u25baProfile : https://www.roblox.com/users/938606704/profile\n\u25baGroup : https://www.roblox.com/groups/9140600/Signicials\n\n\u26a0\ufe0f No offense to anyone, do not harass anyone who appear in the video!\nThanks for watching! :DDD\n\n#roblox #robeats #signicial\n\n\ud83c\udfaeMore Details :\n\u25ba\u27282nd Channel : https://www.youtube.com/c/laicingis\n\n(NOTE : This is description rework, details for the link mentioned in the video might be missing!)\n\nCurrently Setting for RoBeats (As of 1/2/2023) :\n\n\u3010Keybind\u3011\n\u27a4Key 1 : Z\n\u27a4Key 2 : X\n\u27a4Key 3 : Comma ,\n\u27a4Key 4 : Period .\n\n\u3010About Speed\u3011\n\u27a4Speed : x2.05 (82)\n\u27a4Display Mode = Default (3D)\n\n\u3010About Timing\u3011\n\u27a4Note Offset : +0 ms",
        "videoUrl": "https://www.youtube.com/watch?v=u2sAqlBuTQM",
        "previewImgUrl": "https://img.youtube.com/vi/u2sAqlBuTQM/hqdefault.jpg",
        "authorId": 259,
        "id": 297
    },
    {
        "title": "Bad Apple!! [Electro Swing Remix (ft. OR3O & adrisaurus)] (English/Japanese)",
        "description": "Yooo! It's finally here. We've been wanting to upload this for a while now. I'm so happy with this project. It's my first time making a Touhou remix and first remix that has Japanese in it. Big thanks to OR3O and adrisaurus for the awesome vocals. Please check their channels out! Also, watch out for the music video of this song on OR3O's channel.\n\nOR3O: https://www.youtube.com/channel/UCTAyRNwgMv_vvM8Z9UvKKEg\nadrisaurus: https://www.youtube.com/user/adrisaurus\n\nAmazing artwork by: https://twitter.com/Burfabutt\n\n- - - - - - - - - - - - - - - - - - - - - - - - - - - \n\nMUSIC VIDEO: https://www.youtube.com/watch?v=EYXR5DT2IbY\niTunes/Spotify: https://spoti.fi/30HjyNo\nInstrumental version: https://youtu.be/VJx2d40kT78\n\nFree download/Listen on Soundcloud: https://soundcloud.com/the-musical-ghost/bad-apple-electro-swing-ft-or3o-adrisaurus\n\nTempo: 128 BPM\nGenre: Electro Swing\n\nSample used: Sidney Bechet - Polka Dot Rag \n\n- - - - - - - - - - - - - - - - - - - - - - - - - - - \n\nSpecial thanks to my lovely patrons! \u2665\n\nBrandon Chevalier \nEbonpyre \nFinn Cyriax \nHenning (silversparker) \nJake McGee \nLaurin \nNatalie Ng \nofek oren \nRussell Heal \nSamuel Page \nSirKit \nVoid2.0\n\n\n- - - - - - - - - - - - - - - - - - - - - - - - - - - \n\nDiscord server: https://discord.gg/u2jyjtE\nInstagram: https://www.instagram.com/the.musical.ghost/\nSpotify: https://open.spotify.com/artist/5NCTflTCAp9FUqwYRz6N9n\nPatreon: https://www.patreon.com/TheMusicalGhost\nSoundcloud: https://soundcloud.com/the-ghost-that-haunts-your-house\nTwitch: https://www.twitch.tv/themusicaldevil (Gaming)\nTwitter: https://twitter.com/TheMusicalGhost",
        "videoUrl": "https://www.youtube.com/watch?v=j8wZXyR2SUM",
        "previewImgUrl": "https://img.youtube.com/vi/j8wZXyR2SUM/hqdefault.jpg",
        "authorId": 260,
        "id": 298
    },
    {
        "title": "Bad Apple!! But Evangelion",
        "description": "Bad Apple with shadows from Neon Genesis Evangelion. \n\u5f71\u7d75\u306eBad Apple!!\u304c\u516c\u958b\u3055\u308c\u3066\u304b\u3089\u4eca\u65e5\u306710\u5e74\u306a\u306e\u304b\u2026\n\nI've seen Cruel Angel Thesis x Touhou but I've not seen Bad Apple x Evangelion. \nShowcasing characters from the original NGE and EOE (unfortunately none from the Rebuild movies so no  Makinami Mari et al. here).\n\n\n---------------------------------------------\n\nA week or two ago, I decided to make this after I had found out about the then upcoming decade anniversary of the Bad apple shadow PV. I also set out to post it on the day 26 Oct local time (timezones might put me off by a day to the exact anniversary date but close enough)\n\nIt ended up being a rushed tribute. Drawings got ZUN'd and animation got Hidekicked. Hence, some parts may be unsatisfactory. Accuracy to original designs and canon not guaranteed. Some parts may just be my headcanon.\n\nThe Shadow PV video as forementioned. The animation is still legendary.\nhttps://www.nicovideo.jp/watch/sm8628149\n\nAudio Source:\n\nSong: \"Bad Apple!! feat nomico\"\nAlbum: Lovelight\nFrom Alstroemeria Records\n--------------------------------------------------------------\nOriginal music: \"Bad Apple\"\nElly's theme from Touhou's Lotus Land Story\nOriginal Artist: ZUN\n\u6771\u65b9/ Touhou Project belongs to ZUN/Team Shanghai Alice\n\n\nVideo footage:\n\nCharacters are from Neon Genesis Evangelion and End of Evangelion \nThey belong to Anno Hideki/ Studio Khara.\n\n\n#Evangelion #BadApple #Touhou\n#sm8628149 #\u30cb\u30b3\u30cb\u30b3\u52d5\u753b #\u30a8\u30f4\u30a1\u30f3\u30b2\u30ea\u30aa\u30f3",
        "videoUrl": "https://www.youtube.com/watch?v=DblL71oP6QY",
        "previewImgUrl": "https://img.youtube.com/vi/DblL71oP6QY/hqdefault.jpg",
        "authorId": 261,
        "id": 299
    },
    {
        "title": "Bad Apple!! [8 Bit Tribute to Nomico] - 8 Bit Universe",
        "description": "8 Bit version of Bad Apple!!, a tribute to Nomico\n*LOOKING TO USE 8BU CONTENT?? Email us at 8bituniversemusic@gmail.com and someone can help you out!* \nAlso check out 8 Bit Universe on:\niTunes - http://tinyurl.com/iTunes8BIT\nAmazon - http://tinyurl.com/qgfwkav\nSpotify - http://tinyurl.com/8BitIfy\nGooglePlay - http://tinyurl.com/GPLAY8Bit\n \nClick to subscribe - http://ow.ly/uhDIr\n \nAnd remember to follow us on:\nFacebook - http://tinyurl.com/p9pcah8\nTwitter - https://twitter.com/the8bituniverse",
        "videoUrl": "https://www.youtube.com/watch?v=ncRL9Wk0jfA",
        "previewImgUrl": "https://img.youtube.com/vi/ncRL9Wk0jfA/hqdefault.jpg",
        "authorId": 262,
        "id": 300
    },
    {
        "title": "[Project Diva] Bad Apple!!",
        "description": "Watch in Project Diva: http://www.youtube.com/watch?v=o2nd90Q3R20",
        "videoUrl": "https://www.youtube.com/watch?v=F_TJDFmue7E",
        "previewImgUrl": "https://img.youtube.com/vi/F_TJDFmue7E/hqdefault.jpg",
        "authorId": 263,
        "id": 301
    },
    {
        "title": "[Wishlist] Bad Apple!! (Roselia Ver.) | Super Smash Bros. Ultimate",
        "description": "Music: Bad Apple!! (Roselia Ver.)\nSource: BanG Dream! Girls Band Party\nComposition: ZUN, Masayoshi Minoshima\n\nComposition Copyright Team Shangai Alice\nArrangement Copyright Bushiroad Inc., Alstroemeria Records\n\n\nPlaylists:\nTouhou Project music: https://www.youtube.com/playlist?list=PLNae9YXxEFDPwHADZIxRExIDZD-1R_SnF\n\nCredit to 31 Horas Music for the format (thumbnail design and description layout)\n\n(also this isn't real if you didn't somehow know that yet)",
        "videoUrl": "https://www.youtube.com/watch?v=fiNyEW7m-e8",
        "previewImgUrl": "https://img.youtube.com/vi/fiNyEW7m-e8/hqdefault.jpg",
        "authorId": 264,
        "id": 302
    },
    {
        "title": "\u300aFULL\u300b Bad Harmony \u300aBad Apple\u2192MLP:FiM\u300b",
        "description": "To clear up confusion: the video is not by me! It is by Farionelle. After seeing it I was inspired to try and write lyrics based around MLP. I did not have any part of the video in mind as I was writing though, so that's why it doesn't really match up. The lyrics are based around the Discord arc, from Twilight's perspective.\n\nPlease also remember that we are beginners here, we're not trying to be professional or compete with the original. Just having a little fun!\n\nMP3: http://www.mediafire.com/?h66t35t30z0mmi5\nLyrics: http://freetexthost.com/aznip4ehrk\n\nHope you enjoy!\n\nVocals and lyrics by me.\nVideo by Farionelle\nhttp://www.youtube.com/user/Farionelle\nSubtitles by Adidaas\nhttp://www.youtube.com/user/Adidaas\nMy Little Pony belongs to Hasbro, etc.\nThis version of Bad Apple is by Masayoshi Minoshima and originally sung by nomico.",
        "videoUrl": "https://www.youtube.com/watch?v=eXlCDgTvs0k",
        "previewImgUrl": "https://img.youtube.com/vi/eXlCDgTvs0k/hqdefault.jpg",
        "authorId": 265,
        "id": 303
    },
    {
        "title": "(SFM/FNAF) [ BAD APPLE ]",
        "description": "Hey everyone! Thank you so much for watching! \n\nIf you like what you saw, \nwhy not leave a like or comment below to see more like these!\n\nIf you like everything you see here, why not SUBSCRIBING to my channel to see more! \n\nFor your entertainment! \n\nHer channel: https://www.youtube.com/channel/UCvNx-G0MVzeAwQa7NrWwfiQ\n\nMusic: https://www.youtube.com/watch?v=ectGpHA54Rs\n\n-------------------------------------------------------------------------------------------------------------\nTwitter: https://twitter.com/RaggedyCargo652\n\nPatreon: https://www.patreon.com/RaggedyCargo652",
        "videoUrl": "https://www.youtube.com/watch?v=NAkuudYgbh0",
        "previewImgUrl": "https://img.youtube.com/vi/NAkuudYgbh0/hqdefault.jpg",
        "authorId": 266,
        "id": 304
    },
    {
        "title": "Fnati 2-bad apple",
        "description": "",
        "videoUrl": "https://www.youtube.com/watch?v=FB6dI2FKLr8",
        "previewImgUrl": "https://img.youtube.com/vi/FB6dI2FKLr8/hqdefault.jpg",
        "authorId": 267,
        "id": 305
    },
    {
        "title": "\u767d\u4e0a\u30d5\u30d6\u30ad(Shirakami Fubuki) -  Bad Apple!!",
        "description": "Shirakami Fubuki's channel : https://www.youtube.com/channel/UCdn5BQ06XqgXoAxIhbqw5Rg\nhttps://www.instagram.com/_l9990929/",
        "videoUrl": "https://www.youtube.com/watch?v=ViWqb64ZRm8",
        "previewImgUrl": "https://img.youtube.com/vi/ViWqb64ZRm8/hqdefault.jpg",
        "authorId": 268,
        "id": 306
    },
    {
        "title": "Bad Apple{League of Legends]Parody",
        "description": "Hallo Leute ein neues video :D\n\nkurz knappund knackig von League of Legends :D\n\nViel Spa\u00df :D",
        "videoUrl": "https://www.youtube.com/watch?v=Ww44dxTGSIw",
        "previewImgUrl": "https://img.youtube.com/vi/Ww44dxTGSIw/hqdefault.jpg",
        "authorId": 269,
        "id": 307
    },
    {
        "title": "Bad Apple!! but it's actually sad and emotional",
        "description": "This is my piano improvisation of \"Bad Apple!!\" from Touhou Project. Sad and emotional as always.                                                          \n                                                                                                            \n                                                                                                            \n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _  \n\nMidi:\nFor patrons only (https://www.patreon.com/pianodeuss)\n\nSheet Music (transcribed by Alex Palmer): \nhttps://tinyurl.com/chfbcf62\n\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \n\nFacebook: https://www.facebook.com/PianoDeuss-1...\u200b\nSheet Music: https://www.musicnotes.com/sheet-musi...\u200b\nMy website: http://bartlomiejorlik.000webhostapp.com\u200b\nPatreon: https://www.patreon.com/pianodeuss\u200b\nSpotify: https://open.spotify.com/artist/3PAed...\u200b\niTunes: https://music.apple.com/us/artist/pia...\u200b\nDeezer: https://www.deezer.com/pl/artist/8640...\u200b\nNapster: https://us.napster.com/artist/pianodeuss\u200b\nTidal: https://listen.tidal.com/artist/18429899\u200b\nAmazon: https://www.amazon.com/s?k=PianoDeuss...\u200b\n\nBusiness inquiries:\npianodeusss@gmail.com\n\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _  \n\nIf you want to use my music in your projects - feel free with it. Of course, credits to my channel would be nice ; )\n\nBut also, you must to know that my covers are in Content ID, so If you will use them in your videos - you won't be able to monetize these productions (you will get copyright claims).\n\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _  \n\nPiano Arrangement by PianoDeuss (2020)\n\nGame(s): Touhou Project\nOriginal song: Bad Apple!!\nComposer: ZUN (1998)\n\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _  \n\n                                               \u2646 \ud835\udc0f\ud835\udc22\ud835\udc1a\ud835\udc27\ud835\udc28\ud835\udd6f\ud835\udd8a\ud835\udd9a\ud835\udd98\ud835\udd98 \u2646                                           \n\u2502\u258c\u2502\u258c\u258c\u2502\u258c\u258c\u258c\u2502\u258c\u258c\u2502\u258c\u258c\u258c\u2502\u258c\u258c\u2502\u258c\u258c\u258c\u2502\u258c\u258c\u2502\u258c\u258c\u258c\u00ad\u2502\u258c\u258c\u2502\u258c\u258c\u258c\u2502\u258c\u258c\u2502\u258c\u258c\u258c\u2502",
        "videoUrl": "https://www.youtube.com/watch?v=24m6MiF6MNc",
        "previewImgUrl": "https://img.youtube.com/vi/24m6MiF6MNc/hqdefault.jpg",
        "authorId": 270,
        "id": 308
    },
    {
        "title": "Bad Apple!! - Touhou Project [Minecraft Noteblocks]",
        "description": "You wouldn't believe how difficult it was to find information on this song.\nSo, despite there being at least 3 other songs by other artists called \"Bad Apple,\" I finally managed to track down this song. It was created by ZUN for Touhou Project's \"Lotus Land Story\" game. It is sung by Nomico and was made popular by Shadow Art putting it to Anime-styled silhouettes.\nDue to being stressed over moving (of which I am in the middle of during this song's initial release) and finding it difficult to create said silhouettes as pixel art, Chase and I opted to go with a simple black and white backdrop and just let you enjoy the song.\nTune in next Friday for the start of my \"Twitch Sub's Choice\" of songs during the month of August! Since there were only 4 Subs back when I asked them for their songs, I am starting us out with a song I've been really wanting to do for some time now.\n\n\nFeel free to follow me on Twitter where I sometimes post about things I'm working on.\nhttps://twitter.com/Talon1017\n\nI sometimes stream Noteblocks and Pokemon stuff on Twitch;\nhttps://www.twitch.tv/talon1017\n\nJoin fellow Noteblockers in The Noteblock Corner Discord;\nhttps://discord.gg/z9YvuKJ\n\n====================\nCheck out my Disney Noteblock Playlist;\nhttps://www.youtube.com/playlist?list=PLdt8boB7MzFhhZcD8lmEGsH4Cf7SzPbBC\n\nCheck out my Movie Noteblock Playlist;\nhttps://www.youtube.com/playlist?list=PLdt8boB7MzFh13GXXQHPdGII-vF6TE2F-\n\nCheck out my Pok\u00e9mon Noteblock Playlist;\nhttps://www.youtube.com/playlist?list=PLdt8boB7MzFjQqc9M-k4r8soNLh84ygCK\n\n\nAs usual, credit is given in the beginning of the video.\n\n====================\nSpecial Thanks to Deamon, Yari, Chase, Spirit and Havier for pushing me to continue making these songs. They also help inspire and implement the ideas for the extra builds to accompany the songs.\n\n\nPlease go bug them on their own channels and tell them Talon sent you :D\n\nDeamon: https://www.youtube.com/user/bradleyismad\nYari: https://www.youtube.com/channel/UCl3ZecqVH1imLWH-R2DM4YQ\nHavier: https://www.youtube.com/channel/UCyVhAJyRJoPNsPAlbhXNe2A\n\n====================\nAlso, an additional Easter Egg has been added to some of my videos.\nThe Minecraft Heads of my Twitch Mods and Subs.\n\nThank you for helping out:\nSara863g\nRottarez\nTicklesTheShook\nAzormik\n\nAnd thank you for supporting me on Twitch:\nSplitLocked\nCactusPuppy\nKeriPotter\nChioxinValderin\nWoodlandWarrior\nRose\nDaniodle\nCorslio\nAllon_The_Cookie_Dragon\n\n====================\n\nInclude \u201cMaybe nothing else is real!\u201d in your comment if you read the description! :D\n\n#MinecraftNoteblockMusic #TheNoteblockLizard #BadApple!! #NoteBlocks",
        "videoUrl": "https://www.youtube.com/watch?v=HsCuBbIqRmE",
        "previewImgUrl": "https://img.youtube.com/vi/HsCuBbIqRmE/hqdefault.jpg",
        "authorId": 271,
        "id": 309
    },
    {
        "title": "[Black MIDI] Bad Apple!! 8.49 (7.67) Million | NO LAG",
        "description": "Made by: TheSuperMarioBros2, TrollfacepalmAcer78 and Gingeas\n\n-------------------------------------------------------------------------\nTechnical Information:\n\nMIDI Filename: Bad Apple Acer Variation.mid\nMIDI Size: 58.6 MB\nMIDI Note Count: 7.679.881 notes\n-------------------------------------------------------------------------\nSoundfont: Korg + xp50houz\nSynth: CoolSoft VirtualMIDISynth 1.10.1\nMIDI Player: PFA 1.1.0 x64\n\n#blackmidi\n#impossibleremix",
        "videoUrl": "https://www.youtube.com/watch?v=NQPfYx0utvM",
        "previewImgUrl": "https://img.youtube.com/vi/NQPfYx0utvM/hqdefault.jpg",
        "authorId": 272,
        "id": 310
    },
    {
        "title": "Bad Apple [Eldarya]",
        "description": "",
        "videoUrl": "https://www.youtube.com/watch?v=9eltnAJbVAg",
        "previewImgUrl": "https://img.youtube.com/vi/9eltnAJbVAg/hqdefault.jpg",
        "authorId": 273,
        "id": 311
    },
    {
        "title": "Dr. Gnoose Sings Bad Apple",
        "description": "Voice Used: Akarui Kouki/TaI Suki",
        "videoUrl": "https://www.youtube.com/watch?v=JNzTyMVrPSo",
        "previewImgUrl": "https://img.youtube.com/vi/JNzTyMVrPSo/hqdefault.jpg",
        "authorId": 274,
        "id": 312
    },
    {
        "title": "Bad Apple!! - Touhou Cover (feat. FamilyJules7x, MaximumHamburgers, and Mklachu)",
        "description": "A very special thank you to the amazing familyjules7x (guitar/bass), Maximumhamburgers (drums), and mklachu (violin) for lending their time and talents for this video. Go subscribe to their channels for some excellent music!\n\n familyjules7x - http://youtube.com/familyjules7x\n\nmaximumhamburgers - http://youtube.com/maximumhamburgers\n\nmklachu - http://youtube.com/mklachu\n\nAudio mixed and mastered by familyjules7x\nVideo Editing by David Erick Ramos (Docjazz4)\n------------------------------------------------------------------------------\n\nFacebook - http://facebook.com/docjazz4\n\nTwitter -  http://twitter.com/docjazz4\n\nInstagram - http://instagram.com/docjazz4 \n\nWebsite - http://docjazz4.com\n\nCover songs and Original Music: http://youtube.com/docjazz4\n\nMailbag, Tutorials, and Reviews: http://youtube.com/docjazz5\n\nOcarina Guide ebook: http://ocarinaguide.com\n\nOcarina T-shirts: http://ocarina.spreadshirt.com\n\nSend me stuff!\nDocjazz4\nPO Box 780415\nSan Antonio, TX 78278",
        "videoUrl": "https://www.youtube.com/watch?v=lyjpeSsARjM",
        "previewImgUrl": "https://img.youtube.com/vi/lyjpeSsARjM/hqdefault.jpg",
        "authorId": 275,
        "id": 313
    },
    {
        "title": "Bad Apple HD by Lucy, MotionRide & JAC! - Atari 8-bit Demo (2018) | Demoscene",
        "description": "Released at the Silly Venture 2018 demoparty in the Atari XL/XE Demo compo.\n\nNote: Due to the copyright music, YouTube may display ads on this video.\n\nBad Apple demoscene productions -\nhttps://www.youtube.com/playlist?list=PLHDxrzOvt6kSppRIlqZBQxpPud_nn16uz\n\nDiscover more about this production - https://demozoo.org/productions/195226\n\n#demoscene #atari \n\nSubscribe to Demoscene: http://bit.ly/2CWmIEo\n\nMore from Demoscene TV:\nTwitter: https://twitter.com/DemosceneTeeVee\nSoundCloud: https://soundcloud.com/DemosceneTeeVee",
        "videoUrl": "https://www.youtube.com/watch?v=nMsMypjnI3Q",
        "previewImgUrl": "https://img.youtube.com/vi/nMsMypjnI3Q/hqdefault.jpg",
        "authorId": 276,
        "id": 314
    },
    {
        "title": "BAD APPLE!! - EPIC ORCHESTRAL COVER (Japanese Ver. \u65e5\u672c\u7248)",
        "description": "I apologise for any mistranslation with the Japanese intro titles. Enjoy!\n\nVOCALS\nYuri Tsukito\nhttps://www.youtube.com/channel/UC0NJU1K-_S1EKYzTHFb0_dg\n\nArietta\nhttps://www.youtube.com/user/labulabu725\n\nInstrumentals by me!",
        "videoUrl": "https://www.youtube.com/watch?v=x7VkyIBK6rU",
        "previewImgUrl": "https://img.youtube.com/vi/x7VkyIBK6rU/hqdefault.jpg",
        "authorId": 277,
        "id": 315
    },
    {
        "title": "Bad Apple/Touhou Cover en Espa\u00f1ol - Undertale Version Kira0loka",
        "description": "\ud83d\udc96 \u00a1Contactame en mis redes sociales!\ud83d\udc96\n\n\u2765Facebook: http://www.facebook.com/kira0loka\n\u2765 Twitter: http://twitter.com/kira0loka\n\u2765 Instagram: https://www.instagram.com/kira0loka/\n\u2765 Tumblr: https://www.tumblr.com/blog/kira0loka\n\u2765 YOUNOW! https://www.younow.com/Kira0Loka\n\u2765Soundcloud: https://soundcloud.com/kira0loka\n\u2765Tiktok: https://www.tiktok.com/@kirazeroloka\n\n\"visitame en mi comunidad de amino echa por fans para fans\"\nhttp://aminoapps.com/c/kira0loka-fans/\n\ncontacto para empresas o negocios:\nkirazeroloka@hotmail.com\n\n\u2570\u2606\u256e\u2570\u2606\u256e\u2570\u2606\u256e\u2570\u2606\u256e\u2570\u2606\u256e\u2570\u2606\u256e\u2570\u2606\u256e\u2570\u2606\u256e\u2570\u2606\u256e\u2570\u2606\u256e\u2570\u2606\u256e\n\nV\u00eddeo original - wolhet:\nhttps://www.youtube.com/watch?v=OVHSozctpK8\nadaptaci\u00f3n Emmanuel CG:\nhttps://www.youtube.com/user/EmmanuKing\ninstrumental y master CrimsonStudio:\nhttps://www.youtube.com/channel/UCSMkbRav15C9cUDks5zt9hg\nimagen de portada la tome de aqui:\nhttp://aminoapps.com/page/undertale/1914955/two-sides-to-every-story-a-bad-apple-comic\n\nmp3 esta en la descripcion leanla:\nhttps://goo.gl/7E28pq\n\nsin mas que decir me retiro XD! sigo mal de la muela, no pod\u00eda editar esto porque me dol\u00eda el o\u00eddo cuando me pon\u00eda a tratar de editar y lo deje a medias, pero hoy que me sent\u00eda mejor me puse a terminarlo, espero les guste, :D si ya se que la original es de touhou blah, blah etc etc, esta canci\u00f3n salio en mis tiempos cuando tenia como 2 a\u00f1os en el fandub, siempre quise hacerla pero nunca la hice hasta hoy, huee muchas gracias al Jesus por su ayuda con la instrumental como siempre :D VAYAN Y SUSCRIBANSE A SU CANAL! chauuu!!\n\nletra:\nEl tiempo ces\u00f3 su labor de ser eterno \ny se evapor\u00f3 \ncomo agua por entre mis dedos \n\nEste coraz\u00f3n ha vivido en cautiverio \nsi es que late a\u00fan, es un gran misterio \n\nSolo se que o\u00ed que es el tiempo y no perdona \nmueres por vivir \npero hasta tu suerte te questiona\n\nA mi alrededor desconozco qu\u00e9 sucede \nsolo yo estoy, frente a la muerte \n\nQuiero despertar \nde este sue\u00f1o sin final \nrecibir una se\u00f1al \ny volver a respirar \n\nSolo quiero regresar \nde este infierno escapar \ny pensar que este final\nnunca fue ni es real \n\nAunque trates de gritar \nlo que anhelo escuchar \nyo se qu\u00e9 mi corazon\nno te escuchar\u00e1 jam\u00e1s \nSi mi propia voluntad  \nse volviera realidad \nsin dudar acabar\u00eda con esta tortura ya \n\nUn futuro para mi \nme pregunto si habr\u00e1 \n\u00bfVale la pena seguir \ncaminando en soledad? \n\nEsta muda oscuridad \nentristece, \u00bfno es verdad? \nel estar en un lugar \nsin saber de nada m\u00e1s \nya no aguanto m\u00e1s as\u00ed \nno lo puedo resistir \nsiento que mi alrededor \ntodo es t\u00e1n ins\u00f3lito \n\nY si alguien como yo \nconsiguiera al fin cambiar \nme pregunto si cambiaria todo lo dem\u00e1s \n\nEl tiempo ces\u00f3 su labor de ser eterno \ny se evapor\u00f3 \ncomo agua por entre mis dedos \n\nEste coraz\u00f3n ha vivido en cautiverio \nsi es que late a\u00fan, es un gran misterio \n\nSolo se que o\u00ed \nque es el tiempo y no perdona \nmueres por vivir \npero hasta tu suerte te questiona\n\nA mi alrededor desconozco qu\u00e9 sucede \nsolo yo estoy, frente a la muerte \n\nQuiero despertar \nde este sue\u00f1o sin final \nrecibir una se\u00f1al \ny volver a respirar \n\nSolo quiero regresar \nde este infierno escapar \ny pensar que este final\nnunca fue ni es real \n\nAunque trates de gritar \nlo que anhelo escuchar \nyo se qu\u00e9 mi corazon \nno te escuchar\u00e1 jam\u00e1s \n\nSi mi propia voluntad \nse volviera realidad \nsin dudar acabar\u00eda con esta tortura ya \n\nSi lo pudiera lograr,Si lo pudiera lograr\ntodo acabar\u00eda ya, todo acabar\u00eda ya\n\nesta pena sin fina, esta pena sin final\nmatar\u00e1 mi coraz\u00f3n, a la vez que mi raz\u00f3n \n\nYa no supe m\u00e1s de t\u00ed \na\u00fan no s\u00e9 nada de t\u00ed \nya no s\u00e9 nada de m\u00ed \nnada m\u00e1s sabr\u00e9 al fin \n\nSi mi propia voluntad se volviera realidad \nmatar\u00eda este dolor, \u00a1todo acabar\u00eda ya!",
        "videoUrl": "https://www.youtube.com/watch?v=xABb5iWV-AA",
        "previewImgUrl": "https://img.youtube.com/vi/xABb5iWV-AA/hqdefault.jpg",
        "authorId": 278,
        "id": 316
    },
    {
        "title": "More 3AM SUMMONED Villains Sing Bad Apple!",
        "description": "",
        "videoUrl": "https://www.youtube.com/watch?v=h3WsOiHOnSc",
        "previewImgUrl": "https://img.youtube.com/vi/h3WsOiHOnSc/hqdefault.jpg",
        "authorId": 279,
        "id": 317
    },
    {
        "title": "Bad apple | MAP | Complete!",
        "description": "\u041a\u0445\u0435\u043c... \u041d\u0443 \u0447\u0442\u043e \u044f \u0432\u0430\u043c \u0441\u043a\u0430\u0436\u0443 - \u043c\u043e\u044e \u0437\u0430\u0434\u0443\u043c\u043a\u0443 \u0441 \u0442\u0435\u043c \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u043b\u043e\u0436\u0438\u0442\u044c \u043a\u0430\u0440\u043d\u0430\u0432\u0430\u043b \u0442\u0430\u043d\u0446\u0443\u044e\u0449\u0438\u0445 \u0441\u0435\u043a\u0440\u0435\u0442\u043e\u0432 \u0432 \u0434\u0435\u043d\u044c \u0425\u0435\u043b\u043b\u043e\u0443\u0438\u043d\u0430 \u043c\u044b \u0432\u0441\u0435 \u0434\u0440\u0443\u0436\u043d\u043e \u0437\u0430\u043f\u043e\u0440\u043e\u043b\u0438! \u0412\u0441\u0435 \u043c\u043e\u043b\u043e\u0434\u0446\u044b, \u043c\u043e\u0436\u0435\u043c \u0440\u0430\u0441\u0445\u043e\u0434\u0438\u0442\u0441\u044f \ud83d\udc4f\n\n\n\n\n\n\n\n\n\u041d\u0443 \u0430 \u0435\u0441\u043b\u0438 \u0441\u0435\u0440\u044c\u0435\u0437\u043d\u043e \u0442\u043e \u0441\u0435\u0439\u0447\u0430\u0441 \u0431\u0443\u0434\u0435\u0442 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0431\u043e\u043c\u0431\u0435\u0436\u0430, \u0430 \u043f\u043e\u0442\u043e\u043c \u044f \u0431\u0443\u0434\u0443 \u0432\u0430\u0441 \u0445\u0432\u0430\u043b\u0438\u0442\u044c, \u043e\u043a?\n\n\n\n\n\n\n\u0418\u0442\u0430\u043a... \u0417\u0430 \u044d\u0442\u0438 \u0434\u0432\u0430 \u043c\u0435\u0441\u044f\u0446\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u0430\u043c \u0431\u044b\u043b\u0438 \u0434\u0430\u043d\u044b \u043d\u0430 \u0442\u043e \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c 7-14 \u0421\u0415\u041a\u0423\u041d\u0414 \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u0438 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u043e \u043c\u043d\u043e\u0433\u043e \u0432\u0441\u0435\u0433\u043e \u0445\u043e\u0440\u043e\u0448\u0435\u0433\u043e \u0438 \u043f\u043b\u043e\u0445\u043e\u0433\u043e, \u043d\u043e \u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043c\u0441\u044f \u043d\u0430 \u0442\u043e\u043c \u0447\u0442\u043e \u0412\u0410\u041c \u0411\u042b\u041b\u041e \u0414\u0410\u041d\u041e \u0414\u0412\u0410 \u041c\u0415\u0421\u042f\u0426\u0410. \u0414\u0412\u0410. \u0427\u0401\u0420\u0422\u041e\u0412\u042b\u0425. \u041c\u0415\u0421\u042f\u0426\u0410. \n\u042f \u043a\u043e\u043d\u0435\u0447\u043d\u043e \u043f\u043e\u043d\u0438\u043c\u0430\u044e \u0447\u0442\u043e \u0432\u0441\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u0441 \u0440\u0430\u0437\u043d\u043e\u0439 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c\u044e, \u0438 \u0435\u0449\u0451 \u0431\u044b\u043b\u0430 \u0448\u043a\u043e\u043b\u0430, \u043d\u043e \u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u0442\u044c\u0441\u044f. \u042f \u0443\u0447\u0443\u0441\u044c \u0432 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0445\u0443\u0434\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u0448\u043a\u043e\u043b\u0435 \u0441 6 \u0440\u0430\u0431\u043e\u0447\u0438\u043c\u0438 \u0434\u043d\u044f\u043c\u0438 \u0438 7 \u0443\u0440\u043e\u043a\u0430\u043c\u0438 \u0432 \u0434\u0435\u043d\u044c, \u0435\u0445\u0430\u0442\u044c \u043c\u043d\u0435 \u0442\u0443\u0434\u0430 \u043d\u0430 \u0442\u0440\u0438\u043c\u0430\u0432\u0430\u0435 \u0438 \u043f\u043b\u044e\u0441 \u043a \u0434\u043e\u043c\u0430\u0448\u043a\u0430 \u043f\u043e \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u043c \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430\u043c - \u0434\u0432\u0430 \u0440\u0438\u0441\u0443\u043d\u043a\u0430 (\u0436\u0438\u0432\u043e\u043f\u0438\u0441\u044c \u0438 \u0433\u0440\u0430\u0444\u0438\u043a\u0430) \u0438 \u043e\u043a\u043e\u043b\u043e 7 \u043d\u0430\u0431\u0440\u043e\u0441\u043a\u043e\u0432 \u043b\u044e\u0434\u0435\u0439 \u0432 \u043d\u0435\u0434\u0435\u043b\u044e, \u0430 \u0435\u0449\u0451 \u0432 \u043f\u0440\u043e\u0442\u044f\u0436\u0435\u043d\u0438\u0438 \u0432\u0441\u0435\u0439 \u0447\u0435\u0442\u0432\u0435\u0440\u0442\u0438 \u043d\u0443\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438 (\u041e\u0434\u0438\u043d \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0440\u0438\u0441\u0443\u043d\u043e\u043a \u0430\u043a\u0432\u0430\u0440\u0435\u043b\u044c\u044e, \u0434\u0432\u0430 \u0438\u043b\u0438 \u0447\u0435\u0442\u044b\u0440\u0435 \u043f\u043e \u043c\u0435\u043d\u044c\u0448\u0435 \u0430\u043a\u0432\u0430\u0440\u0435\u043b\u044c\u044e \u0438 \u043a\u0430\u0440\u0430\u043d\u0434\u0430\u0448\u043e\u043c \u0438 \u0441\u043a\u0443\u043b\u044c\u043f\u0442\u0443\u0440\u0430 \u0438\u0437 \u043f\u043b\u0430\u0441\u0442\u0438\u043b\u0438\u043d\u0430).\n\u041d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u044f \u043a\u043e\u043d\u0435\u0447\u043d\u043e \u043d\u0435 \u0434\u0435\u043b\u0430\u044e, \u043d\u0435 \u0443\u0441\u043f\u0435\u0432\u0430\u044e \u0438\u043b\u0438 \u043b\u0435\u043d\u044e\u0441\u044c, \u043d\u043e \u0432\u0441\u0451 \u0436\u0435 \u044d\u0442\u043e \u041a\u041e\u0420\u041e\u0422\u041a\u041e\u0415 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043c\u043e\u0435\u0433\u043e \u0433\u0440\u0430\u0444\u0438\u043a\u0430. \u0418 \u0432\u043e\u0442 \u043f\u0440\u0438 \u0432\u0441\u0451\u043c \u044d\u0442\u043e\u043c \u044f \u0441\u0434\u0435\u043b\u0430\u043b\u0430 \u0441\u0432\u0435\u0440\u0438\u0442\u044c \u041c\u0410\u041f\u0430 ( \u0438\u043d\u0442\u0440\u043e \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c\u044e \u043f\u043e\u0447\u0442\u0438 \u043c\u0438\u043d\u0443\u0442\u0443 \u0438 5 \u0447\u0430\u0441\u0442\u0435\u0439)\n\u041a\u0430\u0436\u0434\u044b\u0439 \u0438\u0437 \u0432\u0430\u0441 \u0432\u0437\u044f\u043b \u043f\u043e \u043e\u0434\u043d\u043e\u0439-\u0434\u0432\u0443\u043c \u0447\u0430\u0441\u0442\u044f\u043c, \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u0434\u0435\u043b\u0430\u043b\u0438 \u0431\u044b\u0441\u0442\u0440\u043e,  \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u0435\u0435, \u043d\u043e \u0438\u0445 \u0441\u0438\u043b\u044c\u043d\u043e \u043f\u0438\u043d\u0430\u0442\u044c \u043d\u0435 \u043f\u0440\u0438\u0448\u043b\u043e\u0441\u044c, \u0430 \u0431\u044b\u043b\u0438 \u0442\u0435 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u044f \u043f\u0438\u0441\u0430\u043b\u0430 \u0438 \u043f\u0438\u043d\u0430\u043b\u0430, \u0438 \u0432\u0441\u0451 \u0436\u0435 \u043a \u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u043c\u0443 \u0434\u0435\u0434\u043b\u0430\u0439\u043d\u0430 \u043e\u043d\u0438 \u0443\u0441\u043f\u0435\u043b\u0438, \u043d\u0443 \u0438 \u0435\u0449\u0451 \u0431\u044b\u043b\u0438 \u0442\u0435 \u043a\u0442\u043e \u0441\u0434\u0430\u043b \u0447\u0430\u0441\u0442\u044c \u0437\u0430 \u043c\u0435\u0441\u044f\u0446, \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043d\u0435\u0434\u0435\u043b\u044c \u043f\u043e \u0442\u0435\u043c \u0438\u043b\u0438 \u0438\u043d\u044b\u043c \u043f\u0440\u0438\u0447\u0438\u043d\u0430\u043c. \u042d\u0442\u0438 \u043b\u044e\u0434\u0438 \u043c\u043e\u043b\u043e\u0434\u0446\u044b, \u043d\u043e \u0432\u0435\u0434\u044c \u0431\u044b\u043b\u0438 \u0438 \u0442\u0435 \u043a\u043e\u0442\u043e\u0440\u044b\u0435: \u043f\u0440\u043e\u0441\u0442\u043e \u043d\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u043b\u0438, \u0441\u0434\u0430\u0432\u0430\u043b\u0438 \u0432 \u0441\u0430\u043c\u044b\u0439 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u043a\u043e\u0433\u0434\u0430 \u044f \u0443\u0436\u0435 \u043f\u0438\u0448\u0443 \u0438\u043c \u0447\u0442\u043e \u0437\u0430\u0432\u0442\u0440\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u0448\u0430\u043d\u0441 \u0441\u0434\u0430\u0442\u044c \u0447\u0430\u0441\u0442\u044c, \u0438 \u0431\u044b\u043b\u0438 \u0442\u0435 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u0434\u0435\u043b\u0430\u043b\u0438 \u0447\u0430\u0441\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0441\u043b\u0435 \u0434\u0435\u0434\u043b\u0430\u0439\u043d\u0430.\n\u041f\u043e\u0447\u0435\u043c\u0443 \u0441\u0434\u0430\u0432\u0430\u0442\u044c \u0447\u0430\u0441\u0442\u0438 \u043f\u043e\u0441\u043b\u0435 \u0434\u0435\u0434\u043b\u0430\u0439\u043d\u0430 \u043d\u0435 \u0442\u0440\u0443\u0434\u043d\u043e \u0434\u043e\u0433\u0430\u0434\u0430\u0442\u044c\u0441\u044f, \u0432\u044b \u0438\u0442\u0430\u043a \u044d\u0442\u043e \u0437\u043d\u0430\u0435\u0442\u0435, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u044f \u0440\u0430\u0441\u0441\u043a\u0430\u0436\u0443 \u0432\u0430\u043c \u043e \u0442\u043e\u043c \u043f\u043e\u0447\u0435\u043c\u0443 \u043f\u043b\u043e\u0445\u043e \u043d\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u0442\u044c \u0430\u0432\u0442\u043e\u0440\u0443 \u041c\u0410\u041f\u0430, \u0438 \u043a\u0430\u043a \u044d\u0442\u043e \u043f\u043e\u043c\u0435\u0448\u0430\u043b\u043e \u0438\u043c\u0435\u043d\u043d\u043e \u044d\u0442\u043e\u043c\u0443 \u041c\u0410\u041f\u0443.\n\u0418\u0442\u0430\u043a \u043f\u0435\u0440\u0432\u0430\u044f \u0438\u0441\u0442\u043e\u0440\u0438\u044f (\u0434\u0430\u0438\u0445 \u0442\u0443\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e): \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u0432\u0437\u044f\u043b \u0447\u0430\u0441\u0442\u044c, \u0430 \u043f\u043e\u0442\u043e\u043c \u043d\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u043b \u043d\u0430 \u043c\u043e\u0438 \u043f\u0438\u043d\u043a\u0438 \u0438 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u043d\u0430 \u0441\u0447\u0451\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0447\u0430\u0441\u0442\u0438 \u0438 \u0432 \u0438\u0442\u043e\u0433\u0435 \u043e\u0431 \u044d\u0442\u043e\u043c \u0437\u0430\u0432\u043e\u043b\u043d\u043e\u0432\u0430\u043b\u0441\u044f \u043e\u0434\u0438\u043d \u043c\u0438\u043b\u0443\u043d \u0438 \u0441\u0434\u0435\u043b\u0430\u043b \u044d\u0442\u0443 \u0447\u0430\u0441\u0442\u044c \"\u043d\u0430 \u0432\u0441\u044f\u043a\u0438\u0439 \u0441\u043b\u0443\u0447\u0430\u0439\", \u0410\u043b\u044f \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u043a\u0430 \u0438 \u0432 \u0438\u0442\u043e\u0433\u0435 \u0432 \u044d\u0442\u043e\u043c \u041c\u0410\u041f\u0435 \u0432\u044b \u0443\u0432\u0438\u0434\u0435\u043b\u0438 \u043e\u0447\u0435\u043d\u044c \u043c\u0438\u043b\u043e\u0433\u043e \u0438 \u0441\u0430\u0441\u043d\u043e\u0433\u043e \u0414\u0430\u0441\u0442\u0430. \u0411\u044b\u043b\u0430 \u0435\u0449\u0451 \u043e\u0434\u043d\u0430 \u043f\u043e\u0445\u043e\u0436\u0430\u044f \u0438\u0441\u0442\u043e\u0440\u0438\u044f, \u0432\u0441\u0451 \u0431\u044b\u043b\u043e \u043f\u043e\u0447\u0442\u0438 \u0442\u0430\u043a \u0436\u0435 \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u043d\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u043b, \u044f \u0438 \u043c\u0438\u043b\u0443\u043d-\u0441\u0435\u043c\u043f\u0430\u0439 \u0437\u0430\u0432\u043e\u043b\u043d\u043e\u0432\u0430\u043b\u0441\u044f \u0438 \u0441\u0434\u0435\u043b\u0430\u043b \u0447\u0430\u0441\u0442\u044c \u0441 \u0413\u0435\u043d\u043e, \u043d\u043e \u043f\u043e\u0442\u043e\u043c \u0449\u0430 \u043f\u0430\u0440\u0443 \u0434\u043d\u0435\u0439 \u0434\u043e \u0434\u0435\u0434\u043b\u0430\u0439\u043d\u0430 \u043f\u0440\u043e\u0448\u043b\u044b\u0439 \u0432\u043b\u0430\u0434\u0435\u043b\u0435\u0446 \u044d\u0442\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 \u0442\u0430\u043a\u043e\u0439 \u0445\u043e\u0431\u0430: \"\u0421\u0430\u043c\u043e\u043b\u0451\u0442 \u043b\u0435\u0442\u0435\u043b \u043a\u043e\u043b\u0451\u0441\u0430 \u0442\u0451\u0440\u043b\u0438\u0441\u044f, \u0432\u044b \u043d\u0435 \u0436\u0434\u0430\u043b\u0438 \u043d\u0430\u0441 - \u0430 \u043c\u044b \u043f\u0440\u0438\u043f\u0451\u0440\u043b\u0438\u0441\u044f!\" \u0438 \u0432\u044b\u043b\u043e\u0436\u0438\u043b \u0447\u0430\u0441\u0442\u044c. \u0418 \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432\u044b\u0448\u043b\u043e \u0434\u0432\u0430 \u0413\u0435\u043d\u0430\u0434\u0438\u044f. \u041d\u0443 \u0430 \u0435\u0449\u0451 \u0431\u044b\u043b \u043e\u0434\u0438\u043d \u0437\u0430\u0431\u0430\u0432\u043d\u044b\u0439 \u0447\u0435\u043b \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0430\u043f\u0438\u0441\u0430\u043b \u043c\u043d\u0435 \u0447\u0442\u043e \u0445\u043e\u0447\u0435\u0442 \u0447\u0430\u0441\u0442\u044c, \u043d\u043e \u043d\u0435 \u043d\u0430\u043f\u0438\u0441\u0430\u043b \"\u0410\u043d\u0434\u0435\u0440\u0442\u0435\u0439\u043b \u0436\u0438\u0432!\" \u0438 \u044f \u0441\u043f\u0440\u043e\u0441\u0438\u043b\u0430 \u0443 \u043d\u0435\u0451 \u043a\u043e\u0434\u043e\u0432\u044b\u0435 \u0441\u043b\u043e\u0432\u0430, \u0430 \u043e\u043d\u0430 \u043d\u0435 \u043e\u0442\u0432\u0435\u0442\u0438\u043b\u0430, \u0438 \u043f\u043e\u0442\u043e\u043c \u0441\u043f\u0443\u0441\u0442\u044f \u043c\u0435\u0441\u044f\u0446 \u043e\u043d\u0430 \u043c\u043d\u0435 \u043d\u0430\u043f\u0438\u0441\u0430\u043b\u0430 \u0447\u0442\u043e \u0445\u043e\u0447\u0435\u0442 \u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0447\u0430\u0441\u0442\u044c :/\n\u041e\u043a\u0435\u0439, \u044f \u0431\u044b \u043a\u043e\u043d\u0435\u0447\u043d\u043e \u0435\u0449\u0451 \u043a\u043e\u0435 \u0447\u0442\u043e \u0434\u043e\u043f\u0438\u0441\u0430\u043b\u0430, \u0438 \u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0430 \u0431\u044b \u043c\u0430\u0442\u043e\u0432, \u043d\u043e \u0434\u0443\u043c\u0430\u044e \u0443\u0436\u0435 \u043f\u043e\u0440\u0430 \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 \u0445\u043e\u0442\u044f \u043d\u0435\u0442, \u0434\u0430\u0439\u0442\u0435 \u0440\u0430\u0441\u0441\u043a\u0430\u0436\u0443 \u0432\u0430\u043c \u0435\u0449\u0451 \u043e\u0434\u043d\u0443 \u0438\u0441\u0442\u043e\u0440\u0438\u044e:\n\u0424\u043b\u043e\u0440\u0430 \u0441\u0442\u0440\u0430\u0434\u0430\u043b\u0430 \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u0441\u0435\u0445 \u0442\u0430\u043a \u043a\u0430\u043a \u0443\u0447\u0438\u0442\u0441\u044f \u043e\u043d\u0430 \u0441\u043e \u043c\u043d\u043e\u0439 \u0432 \u043e\u0434\u043d\u043e\u0439 \u0448\u043a\u043e\u043b\u0435 (\u0442\u0430\u043a\u0430\u044f \u0436\u0435 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044f \u0438 \u0441 \u0413\u0435\u0440\u043c\u0430\u043d\u043e\u043c, \u043d\u043e \u0435\u0433\u043e \u044f \u043d\u0435 \u0442\u0440\u043e\u0433\u0430\u043b\u0430)\n\u0424\u043b\u043e\u0440\u0430: *\u043c\u0435\u0434\u043b\u0435\u043d\u043d\u043e \u0434\u0435\u043b\u0430\u0435\u0442 \u0447\u0430\u0441\u0442\u044c*\n\u042f: *\u0441\u043e\u0432\u0435\u0442\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0447\u0443\u0442\u044c \u0431\u044b\u0441\u0442\u0440\u0435\u0435*\n\u0424\u043b\u043e\u0440\u0430: *\u043c\u0435\u0434\u043b\u0435\u043d\u043d\u043e \u0434\u0435\u043b\u0430\u0435\u0442 \u0447\u0430\u0441\u0442\u044c*\n\u042f: *\u0441\u043e\u0432\u0435\u0442\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0447\u0443\u0442\u044c \u0431\u044b\u0441\u0442\u0440\u0435\u0435*\n\u0424\u043b\u043e\u0440\u0430: *\u043c\u0435\u0434\u043b\u0435\u043d\u043d\u043e \u0434\u0435\u043b\u0430\u0435\u0442 \u0447\u0430\u0441\u0442\u044c*\n\u042f: *\u0441\u043e\u0432\u0435\u0442\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0447\u0443\u0442\u044c \u0431\u044b\u0441\u0442\u0440\u0435\u0435*\n\u042f: *\u0432\u044b\u043f\u0443\u0441\u043a\u0430\u044e \u0447\u0430\u0441\u0442\u044c \u0441 \u041f\u0430\u043f\u0435\u0440\u0434\u0436\u0435\u043c\u043e\u043c*\n\u0424\u043b\u043e\u0440\u0430: \u0411\u043b\u0438\u043d, \u044d\u0442\u043e \u0448\u0435\u0434\u0435\u0432\u0440, \u0430 \u0443 \u043c\u0435\u043d\u044f \u0433\u0430\u0432\u043d\u043e \u043a\u0430\u043a\u043e\u0435-\u0442\u043e, \u044f \u0441\u0434\u0430\u043c \u0447\u0430\u0441\u0442\u044c \u043e\u0431\u0440\u0430\u0442\u043d\u043e.\n\u042f: *\u0441\u0436\u0438\u043c\u0430\u044e \u0435\u0451 \u043f\u043b\u0435\u0446\u0438 \u0434\u043e \u0445\u0440\u0443\u0441\u0442\u0430* \u041d\u0435\u0442, \u0441\u043a\u0430, \u0442\u044b \u0441\u0434\u0435\u043b\u0430\u0435\u0448\u044c \u044d\u0442\u0443 \u0447\u0430\u0441\u0442\u044c*\n\u0424\u043b\u043e\u0440\u0430: \u041e\u043a\u0435\u0439, \u043e\u043a\u0435\u0439 :'0\n\u0424\u043b\u043e\u0440\u0430: *\u043c\u0435\u0434\u043b\u0435\u043d\u043d\u043e \u0434\u0435\u043b\u0430\u0435\u0442 \u0447\u0430\u0441\u0442\u044c*\n\u042f: *\u0441\u043e\u0432\u0435\u0442\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0447\u0443\u0442\u044c \u0431\u044b\u0441\u0442\u0440\u0435\u0435*\n\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u0424\u043b\u043e\u0440\u044b: *\u041b\u0430\u043c\u0430\u0435\u0442\u0441\u044f*\n\u041d\u0443 \u0438 \u043a\u0430\u0440\u043e\u0447 \u0432 \u0438\u0442\u043e\u0433\u0435 \u043a\u043e\u0433\u0434\u0430 \u043e\u0442\u0440\u0435\u043c\u043e\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0435\u0439 \u0432\u0435\u0440\u043d\u0443\u043b\u0438 \u043f\u0440\u044f\u043c \u043f\u0435\u0440\u0435\u0434 \u0434\u0435\u0434\u043b\u0430\u0439\u043d\u043e\u043c, \u043e\u043d\u0430 \u0434\u043e\u0434\u0435\u043b\u0430\u043b\u0430 \u0447\u0430\u0441\u0442\u044c \u0437\u0430 \u043e\u0434\u0438\u043d \u0432\u0435\u0447\u0435\u0440, \u0438 \u043e\u0441\u0442\u0430\u043b\u0430\u0441\u044c \u0432 \u0447\u0438\u0441\u043b\u0435 \u0436\u0438\u0432\u044b\u0445. \n\n\u041b\u0430\u0434\u043d\u043e, \u0430 \u0442\u0435\u043f\u0435\u0440\u044c \u043e \u0445\u043e\u0440\u043e\u0448\u0435\u043c, \u0437\u0434\u0435\u0441\u044c \u044f \u0443\u0436\u0435 \u0431\u0443\u0434\u0443 \u0431\u043e\u043b\u0435\u0435 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u0430 \u0432 \u043f\u043b\u0430\u043d\u0435 \u0438\u043c\u0451\u043d \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432.\n\n\u0414\u0432\u0430 \u043f\u0435\u0440\u0432\u044b\u0445 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u044f \u0445\u043e\u0447\u0443 \u043f\u043e\u0445\u0432\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u043e \u043a\u043e\u043d\u0435\u0447\u043d\u043e \u0436\u0435 \u042f\u043d\u0434\u0435\u0440\u0435 (Blackberry kun) \u0438 \u0413\u0435\u0440\u043c\u0430\u043d (\u0420\u0430\u043d\u0435\u0435 \u0438\u0437\u0432\u0435\u0441\u0442\u0435\u043d \u043a\u0430\u043a Oshi, \u043d\u043e \u0441\u0435\u0439\u0447\u0430\u0441 \u043e\u043d Lu)\n\u042d\u0442\u0438 \u0434\u0432\u043e\u0435 \u0431\u0435\u0441\u043f\u043e\u043a\u043e\u0438\u043b\u0438\u0441\u044c \u0437\u0430 \u044d\u0442\u043e\u0442 \u041c\u0410\u041f \u0442\u0430\u043a \u0436\u0435 \u043a\u0430\u043a \u0438 \u044f, \u0435\u0441\u043b\u0438 \u043d\u0435 \u0431\u043e\u043b\u044c\u0448\u0435. \u042f\u043d\u0434\u0435\u0440\u0435 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u043f\u0438\u043d\u0430\u043b\u0430 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441\u043e \u043c\u043d\u043e\u0439 \u0438 \u0434\u0435\u043b\u0430\u043b\u0430 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0447\u0430\u0441\u0442\u0438, \u0430 \u0413\u0435\u0440\u043c\u0430\u043d \u0438\u043d\u0442\u0435\u043d\u0441\u0438\u0432\u043d\u043e \u0434\u0435\u043b\u0430\u043b \u0447\u0430\u0441\u0442\u0438 \u0438 \u0432 \u0438\u0442\u043e\u0433\u0435 \u0437\u0430\u0431\u0430\u0446\u0430\u043b \u0446\u0435\u043b\u044b\u0445 4 \u0447\u0430\u0441\u0442\u0438, \u0438 \u042f\u043d\u0434\u0435\u0440\u0435 \u043a\u0441\u0442\u0430\u0442\u0438 \u0442\u043e\u0436\u0435 4 \u0447\u0430\u0441\u0442\u0438 \u0441\u0434\u0435\u043b\u0430\u043b\u0430, \u043d\u043e \u0441 \u043e\u0434\u043d\u043e\u0439 \u0447\u0430\u0441\u0442\u044c \u043c\u044b \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u043b\u0430\u0436\u0430\u043b\u0438\u0441\u044c \u0438 \u0432 \u0438\u0442\u043e\u0433\u0435 \u0435\u0449\u0451 \u043e\u0434\u0438\u043d \u0413\u0435\u043d\u043e \u0441\u0442\u043e\u0438\u0442 \u0432 \u043a\u043e\u043d\u0446\u0435. \u042d\u0442\u0438 \u0434\u0432\u043e\u0435 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u043b\u0438 \u043c\u0435\u043d\u044f \u0438 \u043f\u043e\u043c\u043e\u0433\u0430\u043b\u0438 \u0432 \u043f\u0440\u043e\u0442\u044f\u0436\u0435\u043d\u0438\u0438 \u0432\u0441\u0435\u0433\u043e \u041c\u0410\u041f\u0430, \u0437\u0430 \u0447\u0442\u043e \u044f \u0438\u043c \u043e\u0447\u0435\u043d\u044c \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u043d\u0430. \u041e\u0442\u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u0438\u0442\u044c \u0432\u0430\u0441 \u0431\u043e\u043b\u044c\u0448\u0435 \u0438 \u0434\u0443\u0448\u0435\u0432\u043d\u043e\u0435 \u043c\u043d\u0435 \u043c\u0435\u0448\u0430\u0435\u0442 \u043b\u0438\u0448\u044c \u043c\u043e\u0451 \u043d\u0435\u043c\u043d\u043e\u0433\u043e\u0441\u043b\u043e\u0432\u0435\u043d, \u043d\u043e \u0432\u0441\u0451 \u0436\u0435 \u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u044d\u0442\u043e \u0441\u043a\u0430\u0437\u0430\u0442\u044c. \u0412\u042b \u0420\u0415\u0411\u042f\u0422\u0410, \u041f\u0420\u041e\u0421\u0422\u041e \u0412\u0415\u041b\u0418\u041a\u041e\u041b\u0415\u041f\u041d\u042b, \u041e\u0413\u0420\u041c\u041d\u042b\u0415 \u041c\u041e\u041b\u0414\u0426\u042b, \u0418 \u041f\u0423\u0421\u0422\u042c \u041c\u0414\u041e\u0425\u041d\u0415\u0422 \u0422\u041e\u0422 \u041a\u0422\u041e \u0421\u041a\u0410\u0416\u0415\u0422 \u041f\u0420\u041e \u0412\u0410\u0421 \u0425\u041e\u0422\u042c \u0427\u0422\u041e-\u0422\u041e \u041f\u041b\u041e\u0425\u041e\u0415 UWU\n\u0420\u0435\u0441\u043f\u0435\u043a\u0442 \u0432\u0430\u043c \u043a\u043e\u0440\u043e\u0447\u0435~\n\u042f\u043d\u0434\u0435\u0440\u0435 (Blackberry kun): https://youtu.be/AfYgo3TnnPM (\u0441\u043a\u0438\u043d\u0443\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u043a\u0430\u043d\u0430\u043b \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0434\u0430\u044e \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435 \u0432\u0438\u0434\u0435\u043e)\n\u0413\u0435\u0440\u043c\u0430\u043d. \u0423 \u043d\u0435\u0433\u043e \u0432\u043e\u0442 \u043a\u0430\u043a \u0440\u0430\u0437 \u0441\u043b\u0435\u0442\u0435\u043b \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u043a\u0430\u043d\u0430\u043b\u0430 \u0438 \u043e\u043d \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044f \u043d\u0430\u0447\u0430\u0442\u044c \u0432\u0441\u0451 \u0441\u043d\u0430\u0447\u0430\u043b\u0430, \u044d\u0442\u043e \u0432\u0435\u043b\u0438\u043a\u043e\u043b\u0435\u043f\u043d\u044b\u0439 \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u0438 \u0430\u043d\u0438\u043c\u0430\u0442\u043e\u0440 \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043f\u043e\u0434\u043f\u0438\u0448\u0438\u0442\u0435\u0441\u044c \u043d\u0430 \u0435\u0433\u043e \u043a\u0430\u043d\u0430\u043b \"Lu\" (\u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u043a\u0430\u043d\u0430\u043b \u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f, \u0430 \u0432\u0438\u0434\u0435\u043e \u0442\u0430\u043c \u0435\u0449\u0451 \u043d\u0435\u0442)\nhttps://youtu.be/OhCAzOXGiD4 - \u044d\u0442\u043e \u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0432\u0438\u0434\u0435\u043e \u0438\u0437 \u0441\u0442\u0430\u0440\u043e\u0433\u043e \u043a\u0430\u043d\u0430\u043b\u0430, \u043e\u0446\u0435\u043d\u0438\u0442\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u0438 UwU\n\u0415\u0449\u0451 \u0440\u0430\u0437 \u0441\u043a\u0430\u0436\u0443 \u0447\u0442\u043e \u0432\u044b \u043f\u0440\u0435\u043a\u0440\u0430\u0441\u043d\u044b, \u043e\u0431\u043e\u0438\u0445 \u0442\u0438\u0441\u043a\u0430\u044e \u0438 \u0443\u0445\u043e\u0434\u0443 \u0432 \u0437\u0430\u043a\u0430\u0442 OwQ\n\n\u0414\u043b\u044f \u0442",
        "videoUrl": "https://www.youtube.com/watch?v=EW3gbAqzsbQ",
        "previewImgUrl": "https://img.youtube.com/vi/EW3gbAqzsbQ/hqdefault.jpg",
        "authorId": 280,
        "id": 318
    },
    {
        "title": "Touhou - Bad Apple!! (Nardis Remix) (Two Faces Meme Song)",
        "description": "Back from vacation! Now I can do all of the suggestions that came in this week!\n\nThis song was suggested by: funtime spring\nhttps://www.youtube.com/channel/UCI7I19u66scEmQdp_rHKc-w\n\nSong: Touhou - Bad Apple!! (Nardis Remix)\nhttps://youtu.be/XerN8NfWOV8\n\nOriginal Meme:\nhttps://youtu.be/o-bpCrRtkYw\n\nMy Discord Server: https://discord.gg/GCJhezM\n\nAll credit goes to the original owners!\nWhen you decide to use this song give credit to the original owner(s)!\n\nAny copyright issues? Let me know in the comments! And I'll try to remove as quick as possible!\n\nWanna be featured in next video? Leave a suggestion in the comments and you might be shout outed in my next video!\n\nProgram(s) used:\nAvee  Player\nYouTube Converter \n\nThanks for watching and enjoy your day!\n\n\u00a9\ufe0f Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for \"fair use\" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.\n\n#MemeSong #ChillBeatzNation",
        "videoUrl": "https://www.youtube.com/watch?v=f5z1iK-GMcI",
        "previewImgUrl": "https://img.youtube.com/vi/f5z1iK-GMcI/hqdefault.jpg",
        "authorId": 281,
        "id": 319
    },
    {
        "title": "Friday Night Funkin' - Perfect Combo - Bad Apple Mod [HARD]",
        "description": "Awesome chart with some awesome Touhou music! Mom and BF were supposed to be black as well, but no matter what I did it never worked unfortunately.. Hope you guys still enjoy!\nLink to mod: https://gamebanana.com/gamefiles/14191\n\n\n\nSupport the developers!\nhttps://ninja-muffin24.itch.io/funkin \u200e\n\u200e\n\u200e \u200e\n\u200e\n\u200e\nChannel Info:\nThis channel consists of videos about modifications to a rhythmic video game (some of which I personally worked on) that range from slightly difficult to very hard for most players. Four arrows fly towards the screen forcing you to press them at the right time to the music. Hitting all the arrows in a song counts as a \"Full Combo\", which is very hard to do and takes a lot of time and practice to be able to do consistently and is the main gimmick of my channel, which I showcase in each video. I also include secrets and extra content that might\u2019ve been undiscovered and show them off through instructional and entertaining ways that can be used as guides, as well as occasionally adding my own input on things happening in the video, all done through my creative editing style that focuses on being concise and transformative. In the descriptions I give my in-depth opinion on the video game as well as timestamps for each part of the video. All the videos were played, recorded and edited by me. #FridayNightFunkin #FNF #Flippy",
        "videoUrl": "https://www.youtube.com/watch?v=tuCNlinWO2E",
        "previewImgUrl": "https://img.youtube.com/vi/tuCNlinWO2E/hqdefault.jpg",
        "authorId": 282,
        "id": 320
    },
    {
        "title": "Bad Apple (AA EE OO cover)",
        "description": "",
        "videoUrl": "https://www.youtube.com/watch?v=J2Spv0Su144",
        "previewImgUrl": "https://img.youtube.com/vi/J2Spv0Su144/hqdefault.jpg",
        "authorId": 283,
        "id": 321
    },
    {
        "title": "\u3010Touhou Project\u3011Nine Bad Apple!! feat. nomico\u3010DarkGio-P's Version\u3011+MP3",
        "description": "This is my version of Nine Bad Apple!! \n\nThese are the songs that use: \n1.- Bad Apple!! Original Off-Vocal \n2.- Bad Apple!! feat.Error.ver \nhttp://www.nicovideo.jp/watch/sm14902773 \n3.- \u3010\u6771\u65b9\u3011Bad Apple!!\u3010\u5f26\u697d\u5408\u594f\u98a8\u3068\u30d4\u30a2\u30ce\u9023\u5f3e\u98a8\u3092\u5408\u308f\u305b\u3066\u307f\u305f\u3011 \nhttp://www.nicovideo.jp/watch/nm8750648 \n\nBased on this video:\nNine Bad Apples!!\nhttps://www.youtube.com/watch?v=z6T50hVImjY\nVideo made in VideoPad\n\n1A 1B 1C\n2A 2B 2C\n3A 3B 3C\n\n1A: \u3010\u6771\u65b9\u3011Bad Apple!!\u3000\uff30\uff36\u3010\u5f71\u7d75\u3011\u3000\u3067\u3000\u300c\u7802\u7d75\u300dhttp://www.nicovideo.jp/watch/sm8854710\n1B: Bad Apple!! feat.Error.ver\nhttp://www.nicovideo.jp/watch/sm14902773\n1C: \u3010Touhou\u3011Bad Apple!! (Orchestra Arrangement Mix)\u3010Border Version\u3011\nhttp://www.youtube.com/watch?v=rZHma0S5RW4\n\n2A: \u3010\u6771\u65b9\u3011Touhou Bad Apple!! PV \"MMD Reimport Shadow Art Style\"\nhttps://www.youtube.com/watch?v=PdFCRFdGqUY\n2B: Masayoshi Minoshima - Bad Apple!! feat. nomico - Touhou PV [iichan]\nhttps://www.youtube.com/watch?v=JvR3093LByw\n2C: Masayoshi Minoshima - Bad Apple!! feat. nomico - Touhou PV [iichan] ~ Inverso\n\n3A: [HQ] Touhou - Bad Apple!! (\uff30\uff36 Compilation)\nhttps://www.youtube.com/watch?v=6e7l2vjuOVA\n3B: \u3010Touhou\u3011Bad Apple!! Flash Animation\u3010PV\u3011\nhttps://www.youtube.com/watch?v=O9YT0BUV4xo\n3C: [Momi Cup 2] Touhou Dead Apple Part 2 (Bad apple) - Revised and Full version\nhttps://www.youtube.com/watch?v=gcLZrGGgOP0\n\nSong: Nine Bad Apple!! (Original x Windows Errors x Orchestra Arrangement Mix)\nAlstroemeria Records feat. \u304b\u3055 (LK704 + \u671d\u6bd4\u5948) & \u305b\u308c\u308d\u3093\nAlbum: DarkGio's Proyect 53 - Selections\nTrack 04\nMP3: https://mega.nz/#!EUtkBIAB!aBpg-28JHhQ1HxmZGdVXMkqz9FycMXp0IfeV0pPHsns",
        "videoUrl": "https://www.youtube.com/watch?v=1kQa1FfGOEc",
        "previewImgUrl": "https://img.youtube.com/vi/1kQa1FfGOEc/hqdefault.jpg",
        "authorId": 284,
        "id": 322
    },
    {
        "title": "Bad Apple But It's a Discord Message Scuffed?",
        "description": "sooo i was looking on yt and found Bad apple but its discord messages\nand i decided to attempt to recreate it.\nit's pretty bad \n\n original link: https://www.youtube.com/watch?v=PLP9c0Z4Q3Y\n\n#badapple #discord",
        "videoUrl": "https://www.youtube.com/watch?v=JaPOpIkJ7sI",
        "previewImgUrl": "https://img.youtube.com/vi/JaPOpIkJ7sI/hqdefault.jpg",
        "authorId": 285,
        "id": 323
    },
    {
        "title": "Bad Apple!! (PV ver) // Harpsichord Cover",
        "description": "I wanted to show some more on my recently bought Spinet Harpsichord so this came out I guess. Bad Apple nomico version.\n\nIt's a Sperrhake Passau spinet harpsichord. Some of the jacks and plectrums are a bit worn so there are some errors because of that where sometimes a note won't hit correctly because of that. I'm also still learning the feel of this keyboard since the harpsichord has almost no weight to the keys at all. It's very different from playing a piano.",
        "videoUrl": "https://www.youtube.com/watch?v=H0IFvF0i17s",
        "previewImgUrl": "https://img.youtube.com/vi/H0IFvF0i17s/hqdefault.jpg",
        "authorId": 286,
        "id": 324
    },
    {
        "title": "THE WORLD'S HIGHEST CHEER IN BAD APPLE ROBEATS (Roblox) | Bad apple (Hard) NEW BEST",
        "description": "You wont believe what I got in cheers :O\n\n|| Join our Epic discord server I guess?\nhttps://discordapp.com/invite/yqyC8v7\n\n|| Follow me on Twitter :D\nhttps://twitter.com/christsugaming\n\n|| Game Link - http://Robeats.net\n\nThx for watching! :D\n\n#roblox #robeats #chrisgaming",
        "videoUrl": "https://www.youtube.com/watch?v=3_mgiJgnieQ",
        "previewImgUrl": "https://img.youtube.com/vi/3_mgiJgnieQ/hqdefault.jpg",
        "authorId": 287,
        "id": 325
    },
    {
        "title": "Touhou Project Bad Apple CPU",
        "description": "",
        "videoUrl": "https://www.youtube.com/watch?v=h39xbVrGYGQ",
        "previewImgUrl": "https://img.youtube.com/vi/h39xbVrGYGQ/hqdefault.jpg",
        "authorId": 288,
        "id": 326
    },
    {
        "title": "[Beat Saber] Masayoshi Minoshima feat. nomico - Bad Apple!!",
        "description": "My PC(i9 + RTX2080) isn't enough to play this wall map \n\nMapped by Core Pee\nhttps://beatsaver.com/beatmap/b6cb\n\n_____________\n\nVR: HTC Vive + 3 Trackers+ Valve Index Controllers \nProgram for avatars: Virtual Motion Capture \nhttps://sh-akira.github.io/VirtualMotionCapture/\nAvatar: Mishe\nhttps://booth.pm/en/items/1256087\nCloth: Miko dress\nhttps://shisyo.booth.pm/items/1571976\nSaber: the B saber \nhttps://modelsaber.com/Sabers/?id=1584843878&pc\n_____________\n\nSong: [Alstroemeria Records]Bad Apple!! feat.nomico\nhttps://youtu.be/i41KoE0iMYU\n\nTwitter: https://twitter.com/ArtemisblueVR\nTwitch: https://www.twitch.tv/artemisblue",
        "videoUrl": "https://www.youtube.com/watch?v=36Gwp66z5ms",
        "previewImgUrl": "https://img.youtube.com/vi/36Gwp66z5ms/hqdefault.jpg",
        "authorId": 289,
        "id": 327
    },
    {
        "title": "Bad Apple FNaF Ultimate Custom Night",
        "description": "Another old project I'm finally uploading. \nI do not own anything in this, I just put everything together and edited some the voices slightly. Which voices you think fit their character the best?\n\nVoices:\nFreddy Fazbear: YV2/Yuuma\nBonnie: Yohioloid\nChica: Teto Kasane\nFoxy: Kaito\nToy Freddy: Kiyoteru Hiyama\nToy Bonnie: Fukase\nToy Chica: Tei Sukone\nMangle: Ruko Yokune Female\nBalloon Boy: Len Kagamine\nJJ: Rin Kagamine\nWithered Chica: Teto Kasane\nWithered Bonnie: Yohioloid\nPuppet: Momo Momone\nWithered Golden Freddy: King Harkinian\nSpringtrap: Ruko Yokune Male + Ritsu Namine\nPhantom Mangle: Defoko/Utane Uta\nPhantom Freddy: YV2/Yuuma\nPhantom Balloon Boy: Len Kagamine\nNightmare Freddy: Gakupo Kamui\nNightmare Bonnie: Rook\nNightmare Fredbear: Papa Macne\nNightmare: Slenderman\nJack-O-Chica: Meiji Gahata\nNightmare Mangle: Maiko Hakaine\nNightmarionne: Mayu\nNightmare Balloon Boy: Dell Honne/Len Kagamine\nOld Man Consequences: YV2/Yuuma + Kaito + Gakupo Kamui\nCircus Baby: SF-A2 Miki\nBallora: Meiko\nFuntime Foxy: Luka Megurine + Kaito\nEnnard: Yuki Kaai\nTrash and the Gang: Yuki Kaai\nHelpy: Ryuto Gachapoid\nHappy Frog: Gumi Megpoid\nMr. Hippo: Matsudappoiyo\nPigpatch: Ryuu Kagayaki\nNedd Bear: KaiKim\nOrville Elephant: Kiyoteru Hiyama\nRockstar Freddy: Gakupo Kamui\nRockstar Bonnie: Matsudappoiyo\nRockstar Chica: Lily\nRockstar Foxy: Rook\nMusic Man: Yohioloid\nEl Chip: KaiKim\nFuntime Chica: Gumi Megpoid\nMolten Freddy: Tai Suki\nScrap Baby: Miku Hatsune\nWilliam Afton: Ruko Yokane Male + Ritsu Namine\nLefty: Mayu\nPhone Guy: Kaito\nDee Dee: Rin Kagamine\nRWQFSFASXC: SeeU\nPlushtrap: Flower\nNightmare Chica: Meiji Gahata\nBonnet: Yukari Yuzuki\nMinireena: Nana Haruka\nLolbit: Galaco\nFredbear: Papa Macne",
        "videoUrl": "https://www.youtube.com/watch?v=_6gigmNUitk",
        "previewImgUrl": "https://img.youtube.com/vi/_6gigmNUitk/hqdefault.jpg",
        "authorId": 290,
        "id": 328
    },
    {
        "title": "\u3010\u7b2c7\u56deMMD\u676f\u672c\u9078\u3011Bad Apple!! feat.Miku Hatsune & Kasane Teto",
        "description": "Made by: Gtamatama-P (G\u305f\u307e(\u30cd\u30b3\u7cfb)P)\r\n\r\n\u3010\u7b2c7\u56deMMD\u676f\u672c\u9078\u3011BadApple!! feat.Miku\uff06Teto\r\nUploaded from Nico Nico Douga:\r\nhttp://www.nicovideo.jp/watch/sm15356011\r\n\r\nMMD CUP wiki\r\nhttp://www31.atwiki.jp/mmdcup/\r\n\r\n\r\nAlt tags: \u7b2c7\u56deMMD\u676f\u672c\u9078 \u6771\u65b9 Miku Hatsune Kasane Teto Touhou VOCALOID  MikuMikuDance MMD Cup 7 UTAU",
        "videoUrl": "https://www.youtube.com/watch?v=QhdPXL1cJq8",
        "previewImgUrl": "https://img.youtube.com/vi/QhdPXL1cJq8/hqdefault.jpg",
        "authorId": 8,
        "id": 329
    },
    {
        "title": "\u30107 VOCALOID A cappella\u3011BAD APPLE!! \u3010 \u30ab\u30d0\u30fc\u3011",
        "description": "READ MEH PLZ\nYes. It is what the title says. Bad Apple!! a cappella style using only Vocaloids. With Vocaloid beatboxing.\n\nMiku and Luka take the lead with Rin, Len, Gumi, Gakupo, and Kaito providing harmonies and instrumentals. This is actually a redo. I had a version of this up a long time ago but no... Just no. Never again. So I decided to make the full version and add some drum type thingies. (why not?) DOWNLOAD BELOW and answers to questions! Read before asking please :)\n\n*I own nothing but the video and vsq*\n*No copyright infringement intended. Plz don't sue*\n\n____________________________________________________\nUPDATE 12/4/14\nNever in a million years did I expect this to reach 100,000 views! Seriously I can't tell you how thankful I am for all the positive feedback I've received. ^_^ Thank you so much!\n\nUPDATE 6/7/14\n50,000 Views and over 1500 thumbs up. \n;_; I can't thank you all enough!\n____________________________________________________\n\nMP3: http://1drv.ms/1MsIwpb\nNico Nico Douga Mirror: http://www.nicovideo.jp/watch/sm21466109\nMy Nico Mylist: http://www.nicovideo.jp/mylist/38150894\n____________________________________________________\n\n\nFAQ\n\nQ: What is this I don't even...\nA: Vocaloid A cappella.\n\nQ: How'd you do this.\nA: Sleepless nights, back aches, tears... Sheet music helps :) The first version of this was taken straight from the sheets I had but for this full version I wrote a few parts myself.\n\nQ: How'd you make the beatbox?\nA: Gumi English. I just played around with the phonemes until I got a sound that I liked. Why English? More sounds. Why Gumi? Her inherent consonant choppiness made for a better drum set than Kaito or Luka.\n\nQ: I think you're lying. I hear cymbals!\nA: I discovered that by accident lol. It's really just a string of SHH,SHH,SHH,SHH. Seriously, every sound you hear in this video was made using VOCALOID.\n\nQ: How do video?\nA: The waveforms were done in Adobe After Effects. A few other minor editing things were done in Sony Vegas because my computer hates AAE with a burning passion. Actually my computer hates most things...\n\nQ: Can I use this for an AMV/dance/cover/etc...?\nA: Feel free! BUT PLEASE CREDIT. If you upload said thing somewhere please link back to this video. Also if you want, link me to your video. I want to see what you do :)\n\nQ: Can I has VSQ?\nA: No. Sorry, but you have no idea how much work was put into this ;_;\n\nQ: Can I upload this to other sites?\nA: No. It's already on NicoNicoDouga and just no to the other sites.\n\nQ: Meiko? Wut about Meiko? U no love Meiko?! WHERE'S MEIKOOOOOOO!?!?!?!111!!!\nA: I don't own Meiko....",
        "videoUrl": "https://www.youtube.com/watch?v=gLnPpnDTT60",
        "previewImgUrl": "https://img.youtube.com/vi/gLnPpnDTT60/hqdefault.jpg",
        "authorId": 291,
        "id": 330
    },
    {
        "title": "BAD APPLOVANIA (Bad Apple X Megalovania) Undertale/Touhou Remix",
        "description": "Want to have a Bad Apple? This was a personal project I had in the back of my mind for a while. Pretty crazy how I used to make YTPMVs of songs like this on YouTube 10 years ago, and here I am now :D\n\u25baSpotify: https://open.spotify.com/album/0FC15jqk36qsQ1tNsfJw19\n\u25baiTunes: https://music.apple.com/us/album/bad-applovania-single/1482681761\n\u25baOther stores: https://distrokid.com/hyperfollow/retrospecter1/bad-applovania\n\u25baCommissions open: http://bit.ly/2WeW57E \n\u25baStreaming channel: https://www.youtube.com/Kamtrostreams\n\u25baTwitch, Twitter, Spotify, etc: https://linktr.ee/RetroSpecter\n\u25baDiscord server: https://discord.gg/JQuQn48\n\u25baMP3 download: https://soundcloud.com/retro_specter/bad-applovania-bad-apple-x-megalovania-undertaletouhou\n\n\u25baI drew the video art and outro art this time :) \n\u25baRetro Intro VFX: https://twitter.com/ExodusArias\n\u25baRetro Intro Badge: https://twitter.com/anosofa\n\u25baRetro Corner Animation: https://twitter.com/acryptae\n\n#Undertale #Touhou #Megalovania #RetroSpecter #BadApple",
        "videoUrl": "https://www.youtube.com/watch?v=llnbsLNJpt8",
        "previewImgUrl": "https://img.youtube.com/vi/llnbsLNJpt8/hqdefault.jpg",
        "authorId": 292,
        "id": 331
    },
    {
        "title": "Geometry Dash \"Bad Apple\" Layout (Old Full gameplay)",
        "description": "",
        "videoUrl": "https://www.youtube.com/watch?v=xQZJzma_5KY",
        "previewImgUrl": "https://img.youtube.com/vi/xQZJzma_5KY/hqdefault.jpg",
        "authorId": 293,
        "id": 332
    },
    {
        "title": "Gabe the Dog - Bad Apple",
        "description": "Another Gabe the Dog remix.\n\nOriginal Music: Masayoshi Minoshima ft. nomico - Bad Apple!!\n\nSubscribe for more content, or you can follow on:\nTwitter: https://twitter.com/CompositeOnTW\nFacebook: https://www.facebook.com/CompositeonFaceB/\nDiscord: https://discord.gg/gqMJE2A\n\nGmail: composoite1618@gmail.com\n\nCopyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for \"fair use\" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use. This video was made for entertainment purposes. Bad Apple is owned by Alstroemeria Records.",
        "videoUrl": "https://www.youtube.com/watch?v=c6-QSfwRDDM",
        "previewImgUrl": "https://img.youtube.com/vi/c6-QSfwRDDM/hqdefault.jpg",
        "authorId": 171,
        "id": 333
    },
    {
        "title": "BAD APPLE UNDERTALE - \u0410\u041d\u0414\u0415\u0420\u0422\u0415\u0419\u041b \u0410\u041d\u0418\u041c\u0410\u0426\u0418\u042f \u041d\u0410 \u0420\u0423\u0421\u0421\u041a\u041e\u041c | \u0420\u0415\u0410\u041a\u0426\u0418\u042f",
        "description": "\u0420\u0435\u0430\u043a\u0446\u0438\u044f \u043d\u0430 BAD APPLE UNDERTALE - \u0410\u041d\u0414\u0415\u0420\u0422\u0415\u0419\u041b \u0410\u041d\u0418\u041c\u0410\u0426\u0418\u042f \u041d\u0410 \u0420\u0423\u0421\u0421\u041a\u041e\u041c \u043e\u0442 \u041c\u0430\u0439\u043d\u0438\nUndertale animation \u0410\u043d\u0434\u0435\u0440\u0442\u0435\u0439\u043b \u0410\u043d\u0438\u043c\u0430\u0446\u0438\u044f\n\n\ud83c\udfa5 \u0412\u0438\u0434\u0435\u043e \u0432 \u0440\u0435\u0430\u043a\u0446\u0438\u0438:\nhttps://goo.gl/pXfZVc\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n\u25ba \u0413\u0440\u0443\u043f\u043f\u0430 \u0412\u041a: https://goo.gl/gu5SZk\n\u25ba \u042f \u0432 \u0412\u041a: https://goo.gl/DNhyx5\n\u25ba \u0412\u0438\u0434\u0435\u043e \u043d\u0430 \u0440\u0435\u0430\u043a\u0446\u0438\u044e: https://goo.gl/NgY4x3\n\u25ba \u0420\u0415\u041a\u041b\u0410\u041c\u0410: https://goo.gl/HAkOI1\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n\n\u0412\u0438\u0434\u0435\u043e \u0432\u0437\u044f\u0442\u044b \u043b\u0438\u0448\u044c \u0434\u043b\u044f \u0446\u0435\u043b\u0438 \u043e\u0431\u0437\u043e\u0440\u0430. \u0418 \u043d\u0435\u0441\u0443\u0442 \u0441\u043e\u0431\u043e\u0439 \u043b\u0438\u0448\u044c \u0440\u0430\u0437\u0432\u043b\u0435\u043a\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440.\n\n\u041d\u0430 \u043a\u0430\u043d\u0430\u043b\u0435 \u041c\u0430\u0439\u043d\u0438 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0440\u0435\u0430\u043a\u0446\u0438\u0438 \u043d\u0430 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0432\u0438\u0434\u0435\u043e, RYTP, \u0420\u0418\u0422\u041f, \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u0438, \u0444\u0430\u043d \u0432\u0438\u0434\u0435\u043e \u043f\u043e \u0430\u043d\u0434\u0435\u0440\u0442\u0435\u0439\u043b\u0443 (Undertale). \u0422\u0430\u043a \u0436\u0435 \u0438\u0433\u0440\u043e\u0432\u044b\u0435 \u0432\u0438\u0434\u0435\u043e \u043f\u043e \u0410\u043d\u0434\u0435\u0440\u0442\u0435\u0439\u043b\u0443 \u0438 \u0434\u0440\u0443\u0433\u0438\u043c \u0438\u043d\u0434\u0438 \u0438\u0433\u0440\u0430\u043c. \u0418 \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u043d\u0434\u0438 :3",
        "videoUrl": "https://www.youtube.com/watch?v=r_77z_lcBSg",
        "previewImgUrl": "https://img.youtube.com/vi/r_77z_lcBSg/hqdefault.jpg",
        "authorId": 294,
        "id": 334
    },
    {
        "title": "[16-Bit;Genesis]Bad Apple!!(\ubc30\ub4dc\uc560\ud50c)",
        "description": "Remix Commission Guide : https://www.deviantart.com/jx444444/art/8-Bit-Request-Notice-Commission--814812269\n\nSprites : \nhttps://www.spriters-resource.com/pc_computer/sonicmania/\n\n\uc774 \ucc44\ub110\uc740 \ub808\ud2b8\ub85c \ube0c\uae08\uc744 \ub2e4\ub8e8\uba70 \uc790\uc138\ud55c \uc124\uba85\uc774 \uc544\ub9c8\ub3c4 \ud544\uc694\uc5c6\ub294 \ucc44\ub110\uc785\ub2c8\ub2e4. \n\ub2e4\ub8e8\ub294 \uc2a4\ud0c0\uc77c\uc740 \ub300\ub7b5 \uc544\ud0c0\ub9ac 5200,\ud328\ubbf8\ucef4,\uac8c\uc784\ubcf4\uc774,\uc288\ud37c\ud328\ubbf8\ucef4,\uba54\uac00\ub4dc\ub77c\uc774\ube0c,GBA\uc785\ub2c8\ub2e4.\n\uac00\ub054\uc529\uc740 \uc2ec\uc601 \ub9ac\ubbf9\uc2a4, \ubcf5\uc5b4 \ub9ac\ubbf9\uc2a4\ub3c4 \ub2e4\ub8e8\uace4 \ud569\ub2c8\ub2e4.\nMP3\ud30c\uc77c\uc740 \ubcc4\ub3c4\ub85c \uc81c\uacf5\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. NSF,SPC,VGM,SAP\ud30c\uc77c\ub9cc \uc81c\uacf5\ud569\ub2c8\ub2e4.\n\uadf8\ub9ac\uace0 NSF\ud30c\uc77c\ub4e4\uc740 \uac00\ub054 \ud55c \ubc88\uc529 \uc5c5\ub370\uc774\ud2b8\ub429\ub2c8\ub2e4.\n\uc800 JX\ub294 \ud55c\uad6d\uc778\uc785\ub2c8\ub2e4.\nThis channel deals with Retro BGM and probably does not require further explanation.\nThe styles I deal with are approximately Atari 5200, NES, Game Boy, SNES, Genesis, and GBA.\nIf you would like to apply for remix, please refer to the commission guide in the video description section.\nSometimes it also deals with meme remixes.\nMP3 files are not provided separately. Only NSF,SPC,VGM,SAP files are provided.\nAnd NSF files are updated once in a while.\nI'm Korean.\n\nDownload Area : \nhttps://drive.google.com/drive/folders/1hEjRT2P9590GGm09U6mBcK69m9mO3tA3?usp=sharing\n\n====General Info====\n\nUsing Program : Deflemask v0.12.1\nFacebook : https://www.facebook.com/jungjongsoo44\nDiscord : https://discord.gg/TURa9Q3\nTwitter : https://twitter.com/jungjongsoo_\nNaver Blog : https://blog.naver.com/jungjongsoo_\nNaver TV : https://tv.naver.com/jxchip\nTwitch : https://www.twitch.tv/jx_8bit\n\nthis remix can be used anywhere except reupload.\n\uc774 \ub9ac\ubbf9\uc2a4\ub294 \uc7ac\uc5c5\ub85c\ub4dc \ube7c\uace0 \uc4f0\uc154\ub3c4 \ub429\ub2c8\ub2e4.\n#BadApple #Touhou",
        "videoUrl": "https://www.youtube.com/watch?v=8XGJlvCOl50",
        "previewImgUrl": "https://img.youtube.com/vi/8XGJlvCOl50/hqdefault.jpg",
        "authorId": 295,
        "id": 335
    },
    {
        "title": "Big Ben - Bad Apple",
        "description": "Original Music:\nMasayoshi Minoshima ft. nomico - Bad Apple!!\n\nCopyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for \"fair use\" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use. This video was made for entertainment purposes, and is transformative in nature.",
        "videoUrl": "https://www.youtube.com/watch?v=KpMYs4jcVsI",
        "previewImgUrl": "https://img.youtube.com/vi/KpMYs4jcVsI/hqdefault.jpg",
        "authorId": 171,
        "id": 336
    },
    {
        "title": "South park anime - bad apple feat nomico",
        "description": "this was made in  flipnote *-* (not by me xD)",
        "videoUrl": "https://www.youtube.com/watch?v=cdWyKdud4NA",
        "previewImgUrl": "https://img.youtube.com/vi/cdWyKdud4NA/hqdefault.jpg",
        "authorId": 296,
        "id": 337
    },
    {
        "title": "The original \"Bad Apple!!\"",
        "description": "Straight from \u6771\u65b9\u5e7b\u60f3\u90f7 ~ Lotus Land Story, stage three, here's the original Bad Apple!!\n\nThe main purpose of this video is to show the music, but I guess some gameplay wouldn't hurt anyone(it would), so I left that in there.\n\nFM26 and FM86 versions are shown.\n\nThis video is made by 2230400180252469452.\nThis video is made for YouTube.\nI don't own most of the stuff in this video.\nIf anyone is offended, I am not liable.\nIf anything is broken/damaged, I'm not liable.\n\n5th generation video.",
        "videoUrl": "https://www.youtube.com/watch?v=axncIOAL39A",
        "previewImgUrl": "https://img.youtube.com/vi/axncIOAL39A/hqdefault.jpg",
        "authorId": 297,
        "id": 338
    },
    {
        "title": "\u3010\u6771\u65b9Medieval Folk\u3011 Bad Apple \u300cIdisi\u300d",
        "description": "\u2606\u30df Title\uff1a Bad Apple\n\u2606\u30df Album\uff1a Eiris Sazun\n\u2606\u30df Circle\uff1a Idisi\n\n\u2605\u5f61 Original Title\uff1a Bad Apple!! \uff0f Stage 3 Theme\n\u2605\u5f61 Source\uff1a \u6771\u65b9\u5e7b\u60f3\u90f7\u3000\uff5e Lotus Land Story \uff08Touhou Gensoukyou, meaning \"Fantastic Land of the East\".\uff09\n\n\u266c\u266a\u266b \u30df Arrangement\uff1a Idisi\n\u4e00 (Facebook)\u2192 https://www.facebook.com/pg/idisiband\n\u2662\u30df Bagpipes\uff0fVocal\uff1a Alena Boo\n\u2662\u30df Bagpipes\uff0fChants\uff1a Stasia\n\u2662\u30df Bagpipes\uff1a Katarina (Rapunzel)\n\u2662\u30df Drums\uff1a Alena El\n\u266c\u266a\u266b \u30df Original Composer\uff1a ZUN \u300c\u4e0a\u6d77\u30a2\u30ea\u30b9\u5e7b\u6a02\u56e3\u300d\n\n\u2727\u5f61 Release Date\uff1a November 4, 2016\n\u2727\u5f61 Website\uff1a https://idisi.bandcamp.com/\n\u2727\u5f61 Song Genre\uff1aFolk, Neo Medieval, Bagpipes\uff06Instrumental \u2014 Touhou Orchestral Arrangement.\n\n\u273f\u5f61 Picture Artist\uff1a \u3086\u304d\u3055\u3081 \uff08Yukisame\uff09\n\u273f\u5f61 Artist's Pixiv Page\uff1a http://www.pixiv.net/member.php?id=135302\n\u273f\u5f61 Illustration Source\uff1a https://www.pixiv.net/member_illust.php?mode=medium&illust_id=33169910\n\u273f\u5f61 Character\uff1a Kirisame Marisa \u300c\u9727\u96e8\u9b54\u7406\u6c99\u300d\n\n(\u30fe(\u00b4\uff65\u03c9\uff65\uff40)\u266a  Enjoy\uff01\n\nEiris sazun Idisi - once sat Idisi. There are the first lines of the old pagan incantation written in Old High German in IX-X c. So who are those Idisi? There are some different versions: they are either Norns, weaving the thread of Fate, or Valkyries, goddesses, sylphs, wooden spirits, daughters of well-born konungs and glorious heroes. But most of the versions agree that Idisi (or Dises) were highly respected feminine deities who were in charge of changing the outcome of wars.\n\nOnce five maidens from the Lands of Russia came together, took their bagpipes and drums and started to weave the canvas from harmonies and rhymes. They called themselves Idisi in the memory of those mythical creatures. And they went mounted the stage and started to fight Silence in the uphill battle.\n\nAnd so... if you dearly doujin music enthusiasts want to listen to more arrangements of this kind from foreign artists such as song artist of this arrange, Idisi or from other non-Japanese arrangers from all over the world who are contributing to Touhou music community ever stronger than as usual, then of course it is important to show your support and reward their hard work by purchasing their works online\uff01\n\nThe digital download of this instrumental folk album is available on a pay-what-you-like basis from Bandcamp. Which means it's possible to get your hands on high quality flac/mp3 digital copy of this album by going to following link provided below\uff1a\n\n\u4e00 https://idisi.bandcamp.com/album/eiris-sazun\n\nPS: Also here are couple of videos where they did they performed this arrange in live concert, festivals and occasionally as a street performance!\n\nhttps://twitter.com/keiryouki/status/856074561040687105\nhttps://www.youtube.com/watch?v=ZLIWzgdxb7s\nhttps://www.youtube.com/watch?v=UbC2nrq9fxc\nhttps://www.youtube.com/watch?v=oMo7q5SHuHk\n\n\u30fb\u30fb\u30fb\u30fb\u30fb\u30fb\u30fb\u30fb\u30fb\u30fb\u30fb\u30fb\u30fb\u30fb\u30fb\u30fb\u30fb\u30fb\u30fb\u30fb\n\n\u2193Disclaimer!\u2193\n\u2193\u79c1\u306f\u3053\u306e\u52d5\u753b\u3067\u4f7f\u308f\u308c\u3066\u3044\u308b\u97f3\u697d\u3068\u80cc\u666f\u306e\u8457\u4f5c\u6a29\u306e\u6240\u6709\u8005\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u2193\n\nI don't own anything in this video, including the audio and picture. The credits goes their respective owners. This video is purely fan-made, and will not be used for profit or illegal sharing!\n\n\u79c1\u306e\u30d3\u30c7\u30aa\u306f\u53ce\u76ca\u5316\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002\u3042\u306a\u305f\u306f\u6b4c\u306e\u6240\u6709\u8005\u3092\u3057\u3066\u3044\u308b\u3057\u3001\u3053\u3053\u304b\u3089\u524a\u9664\u3057\u305f\u3044\u5834\u5408\u306f\u79c1\u306b\u9023\u7d61\u3057\u3066\u304f\u3060\u3055\u3044\uff01\u79c1\u306f\u5373\u5ea7\u306b\u30d3\u30c7\u30aa\u3092\u524a\u9664\u3057\u307e\u3059\u3002\n\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3057\u305f\uff01\n\nPlease contact me if you're the owner of this song and want to remove it from this channel! I will instantly delete the video.\n\nContact me via e-mail or leave me message in the comment section below\uff1a nitorikappashiro@gmail.com\n\nThank you!",
        "videoUrl": "https://www.youtube.com/watch?v=FdshGIxR3x4",
        "previewImgUrl": "https://img.youtube.com/vi/FdshGIxR3x4/hqdefault.jpg",
        "authorId": 255,
        "id": 339
    },
    {
        "title": "[MMD] Bad apple! Luka Lily Miku Gumi",
        "description": "Lasers!! XD\nIts my first MMD and I think I messed it up. sorry about luka I still don't know how to adjust the camera panning XD\n\nI happen to stumble emmychansuper's video so I decided to give MMD a try well it worked out for so far. credits/kudos to her.\n\n\nyes, the vocals I mean the models they are all singing in this video though Meiko is not included.\n\nI hope you like it :D\n\nModels used\nLuka shorts by Reiimuu\nLili Version 1.1+\u03b1 by Foxeye \u300c\u72d0\u76ee\u300d\nMiku project diva version by mamama\nGumi by Mamama\n\nmme:\nVector Line DL:http://www1.axfc.net/uploader/Sc/so/165176&key=mme\n\nmodels, props, stages, effects and the likes.\nall of them came from or linked from here http://mikudance.info\n\nI do not own anything or \"anyone\" :D in this video. \nand AFAIK the characters are from Vocaloid.\nand\nBad Apple is the stage 3 theme of Lotus Land Story, which is the 4th game in the Touhou Project series.\n\nIt's got nothing to do with Vocaloid :D",
        "videoUrl": "https://www.youtube.com/watch?v=e6i0WrqtQ_0",
        "previewImgUrl": "https://img.youtube.com/vi/e6i0WrqtQ_0/hqdefault.jpg",
        "authorId": 298,
        "id": 340
    },
    {
        "title": "Bad Apple \u7df4\u7fd2\u7528\u93e1\u9762",
        "description": "\u795e\u66f2\u679c\u7136\u6709\u795e\u4eba\u7d1a\u7684\u96e3\u5ea6",
        "videoUrl": "https://www.youtube.com/watch?v=erhVzpbPYtA",
        "previewImgUrl": "https://img.youtube.com/vi/erhVzpbPYtA/hqdefault.jpg",
        "authorId": 299,
        "id": 341
    },
    {
        "title": "Bad apple (feat. Ricardo Milos)",
        "description": "\u0420\u0438\u043a\u0430\u0440\u0434\u043e \u041c\u0438\u043b\u043e\u0441 - \u043b\u0443\u0447\u0448\u0430\u044f \u0442\u043e\u0445\u043e\u0434\u0435\u0432\u043e\u0447\u043a\u0430",
        "videoUrl": "https://www.youtube.com/watch?v=7OjKNbba0Io",
        "previewImgUrl": "https://img.youtube.com/vi/7OjKNbba0Io/hqdefault.jpg",
        "authorId": 300,
        "id": 342
    },
    {
        "title": "Bad Apple!! [\u30d0\u30c3\u30c9\u30a2\u30c3\u30d7\u30eb] (feat nomico ver.) - Touhou [\u6771\u65b9] (Piano Synthesia)",
        "description": "Bad Apple was quite popular around 7-8 years ago, and imo the reasons are :\n1. It's simply catchy\n2. It's an EDM (Everyone simply loves EDM, moreover it's melodious~)\n3. The lyrics are surprisingly deep.\n4. Well, Touhou fandom was huge back then. I Dunno how's it going right now as I actually know almost nothing about Touhou (I only know the general knowledge about it) xD \n\n============================\n\nI've known this song since 6 years ago, just got into it 2 years ago, and finally decided to work on it 3 weeks ago. Making a piano arrangement out of this is simply is the hardest hurdle I've ever because this song is very repetitive, yet there's next to none to transcribe because it isn't that suitable for piano, which is very challenging. In this situation, I need to rely completely on my arranging skills which means I need to try everything I can think of to make it sound less repetitive and choose which one is the best, thus taking me 3 weeks to complete.\n\nLike I've said on my post before, working on it gave me lots of anxiety and fear as I think there are lots of posibilites to tackle this song, and I was afraid of choosing the wrong \"Arrangement decision\" that will turn my arrangement into something shit. Thanks to my friends who helped me to decide which route sounds the best~\n\n1. Raindeca\n2. Unknown Dere\n3. StringTheoryViolin / Dixie Ortiz\n4. CSMPiano\n5. Sayuri \n6. My sister \n7. 1 IRL friend\n8. 1 online friend\n\nI couldn't finish this without you guys. Once again, thank you very much!!! :D\n\n============================\n\nBtw, besides mine and Marasy's, I think there exist another way to properly tackle this song.\n\nSHEET / \u697d\u8b5c : \nhttps://www.mymusicsheet.com/MyReminiscence/25213\n\nHave a nice weekend and happy listening :D \n\nOriginal Composer : ZUN\nOriginal Re-arranger : Masayoshi Minoshima\nOriginal Artist : Nomico\n\n============================\n\nMcm9N9Vg8VSXsIvsQ\nreminiscence/id1172422256\n\n\n\n#BadApple #Touhou #\u6771\u65b9 #Synthesia #Piano #Nomico =\n\nListen and Follow me on Spotify : https://open.spotify.com/artist/7aebkMcm9N9Vg8VSXsIvsQ\nBuy my album on iTunes : https://music.apple.com/us/artist/myreminiscence/1172422256\nBe my Patron : https://www.patreon.com/MyReminiscence\nTwitter : https://twitter.com/MyRemiAp \nSubmit song request / recommendation : https://www.mymusicsheet.com/MyReminiscence?viewType=sheet-request",
        "videoUrl": "https://www.youtube.com/watch?v=rgeIOQTLLcc",
        "previewImgUrl": "https://img.youtube.com/vi/rgeIOQTLLcc/hqdefault.jpg",
        "authorId": 301,
        "id": 343
    },
    {
        "title": "Bad Apple!! (Touhou) feat. Lunacy \u3010Intense Symphonic Metal Cover\u3011",
        "description": "\u25b7 SUBSCRIBE FOR MORE \u25ba http://bit.ly/FalKKonE_SUB \u25c4\nIntense Symphonic Metal Cover of Bad Apple!! (Touhou remix song), in collaboration with Lunacy (vocals) and RusselZ (video)\n\nOk, soooooo. \nYeah. \n^^\n\n\u2727LUNACY!\nThose insanely sweet vocals! \nSounds so addictive actually :o\n\nStalk her channel for more of this pleasing feeling!\n(links below)\n\n\n\u2727 RUSSELZ!\nHis awesome animation \"League of Bad Apple!!\" fits more than perfectly to my arrangement! \n(Yup, it's the original video scenes reanimated with the League of Legend models)\n\nJust imagine the pain of making such perfect thing!\n\n\nHuge thanks to these two wonderful people!\n\n\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727 CREDITS \u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\n\nOriginal music: \n\u2726 Alstroemeria Records - Bad Apple!!\n\u2727 Arrangement: Masayoshi Minoshima\n\u2727 Lyrics: Haruka\n\u2727 Vocals: nomico \n\u25ba http://alst.net/\n\nWhich is based on\n\u2726 Touhou Project 4 ~ Lotus Land Story OST: Bad Apple!! (Stage 3 Theme) by ZUN\n\u25ba http://www16.big.or.jp/~zun/\n\n(I actually mixed melodies from both ^^)\n\nTranscribed, arranged and produced by Micha\u0142 \"FalKKonE\" Soko\u0142owski. \n\n\n\u2727 Vocals: Lunacy\n\u25ba https://www.youtube.com/user/LunaMoge\n\u25ba https://twitter.com/lunacyhime\n\nAlso check out her cute drawings! (like the one seen in the thumbnail/video end):\n\u25ba https://www.youtube.com/c/LunacyHime\n\n\n\u2727 Video: Courtesy of RusselZ\n\u25ba https://www.youtube.com/user/AznEntertainments\n\u25ba https://twitter.com/RusselRaZe\n\nThe video comparison between the original and LoL version:\n\u25ba https://www.youtube.com/watch?v=72a6AIAB87U\n\n\n\u2727 Lyrics and translation taken from:\n\u25ba http://touhou.wikia.com/wiki/Lyrics:_Bad_Apple!!\n\n\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727 LINKS \u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\n\n\u25b7 GET FULL TOUHOU ALBUM:\n\u25ba SPOTIFY http://spoti.fi/2ucnyK0\n\u25ba iTUNES https://itun.es/i6d75py\n\u25ba GOOGLE PLAY https://goo.gl/E1bHcK\n\u25ba DEEZER http://www.deezer.com/album/45478491\n\u25ba AMAZON http://a.co/dgJZ9nT\n\n\u25b7 PLAYLIST:\n\u25ba http://bit.ly/FalKKonE_Touhou\n\n\u25b7 SUPPORT ME:\n\u25ba PATREON http://www.patreon.com/falkkone\n\n\u25b7 FOLLOW ME:\n\u25ba FACEBOOK http://bit.ly/FalKKonE_FB\n\u25ba TWITTER https://twitter.com/FalKKonE\n\n\u25b7 GET MUSIC:\n\u25ba SPOTIFY http://bit.ly/FalKKonE_Spotify\n\u25ba iTUNES http://bit.ly/FalKKonE_iTunes\n\u25ba GOOGLE PLAY http://bit.ly/FalKKonE_GooglePlay\n\u25ba DEEZER http://bit.ly/FalKKonE_Deezer\n\u25ba AMAZON http://bit.ly/FalKKonE_Amazon\n\u25ba BANDCAMP https://falkkone.bandcamp.com\n\n\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726\u2727\u2726 \n\n#touhou #cover #badapple #metalcover #symphonicmetal",
        "videoUrl": "https://www.youtube.com/watch?v=wPcCDk3WeR0",
        "previewImgUrl": "https://img.youtube.com/vi/wPcCDk3WeR0/hqdefault.jpg",
        "authorId": 256,
        "id": 344
    },
    {
        "title": "Bad Apple Bottom Jeans On Drums!",
        "description": "This is a heck of a mashup. Definitely not two songs I thought I would ever hear put together... But here we are HAHA! Pluffaduff strikes again! Give them all the love!\n\nOG VID - https://www.youtube.com/watch?v=92Gq_mG-cQY\nPluffaduff - https://www.youtube.com/channel/UCF080GGiPwEoZBVSvXDMg5A\n---\nWATCH LIVE ON TWITCH!\nMon, Tues, Fri and Sat at 4:30 Eastern!\n\nGET CONNECTED!\nTwitch | https://www.twitch.tv/the8bitdrummer\nDiscord | https://discord.gg/the8bitdrummer\nTwitter | https://www.twitter.com/the8bitdrummer\nWebsite | https://www.the8bitdrummer.com\nMerch | https://www.designbyhumans.com/shop/The8BitDrummer/\nBusiness Email | the8bitdrummer@gmail.com\n\nBe sure to comment and let me know if you enjoyed watching! It really helps and I love hearing what y'all have to say! :D\n\nIf you would like more crazy drumming action, SUBSCRIBE! Join the Party!!!\n\nI really hope you enjoy the videos!\n\nGod bless! Take care! ROCK ON!!!",
        "videoUrl": "https://www.youtube.com/watch?v=rM5aNlvOnAM",
        "previewImgUrl": "https://img.youtube.com/vi/rM5aNlvOnAM/hqdefault.jpg",
        "authorId": 302,
        "id": 345
    },
    {
        "title": "\u3010\u6bd4\u8f03\u3011Bad apple!!  9\u7a2e\u6bd4\u8f03",
        "description": "Bad Apple!! (\u5f71\u7d75)\nhttps://youtu.be/FtutLA63Cp8\n\nBad Friends!! (\u3051\u3082\u306e\u30d5\u30ec\u30f3\u30ba)\nhttps://youtu.be/-GZosfl0WFg\n\nBad Apple!! MMD (\u8272\u4ed8\u304d)\nhttps://youtu.be/8LlJytwF6AM\n\nDuel Apple!! (\u904a\u622f\u738b)\nhttps://youtu.be/rSpZAPKrT34\n\nBad Apple!! Undertale version (\u30a2\u30f3\u30c0\u30fc\u30c6\u30fc\u30eb)\nhttps://youtu.be/OVHSozctpK8\n\nBad Apple!!\u3092\u3086\u3063\u304f\u308a\u3067\u3084\u3063\u3066\u307f\u305f (\u3086\u3063\u304f\u308a)\nhttps://youtu.be/WPAn0Mr58Gc\n\nMinecraft \u00d7 Bad Apple!! (\u30de\u30a4\u30f3\u30af\u30e9\u30d5\u30c8)\nhttps://youtu.be/ItnK9ha_ut4\n\nPink Ball!! (\u661f\u306e\u30ab\u30fc\u30d3\u30a3)\nhttps://youtu.be/CHbRTe0P9cs\n\nBad AApple!! (\u30a2\u30b9\u30ad\u30fc\u30a2\u30fc\u30c8)\nhttps://youtu.be/TvbU_9vFKbQ",
        "videoUrl": "https://www.youtube.com/watch?v=wzRg6EQSLtQ",
        "previewImgUrl": "https://img.youtube.com/vi/wzRg6EQSLtQ/hqdefault.jpg",
        "authorId": 303,
        "id": 346
    },
    {
        "title": "Ib - Bad Apple (Music Box)",
        "description": "Credit to xXSingMusic4everXx for the song\nI do NOT own anything of this video! Hope you enjoyed this video\n\nGame: Ib\nSong: Bad Apple (music Box Version)\nEnglish Lyrics: Cristina Vee\nPictures: Zerochan\n\nLyrics:\nEver on and on I continue circling\nWith nothing but my hate in a carousel of agony\nTill slowly I forget and my heart starts vanishing\nAnd suddenly I see that I can't break free--I'm\nSlipping through the cracks of a dark eternity\nWith nothing but my pain and the paralyzing agony\nTo tell me who I am, who I was\nUncertainty enveloping my mind\nTill I can't break free, and\nMaybe it's a dream; maybe nothing else is real\nBut it wouldn't mean a thing if I told you how I feel\nSo I'm tired of all the pain, of the misery inside\nAnd I wish that I could live feeling nothing but the night\nYou can tell me what to say; you can tell me where to go\nBut I doubt that I would care, and my heart would never know\nIf I make another move there'll be no more turning back\nBecause everything will change, and it all will fade to black\nWill tomorrow ever come? Will I make it through the night?\nWill there ever be a place for the broken in the light?\nAm I hurting? Am I sad? Should I stay, or should I go?\nI've forgotten how to tell. Did I ever even know?\nCan I take another step? I've done everything I can\nAll the people that I see I will never understand\nIf I find a way to change, if I step into the light\nThen I'll never be the same, and it all will fade to white\n\nEver on and on I continue circling\nWith nothing but my hate in a carousel of agony\nTill slowly I forget and my heart starts vanishing\nAnd suddenly I see that I can't break free--I'm\nSlipping through the cracks of a dark eternity\nWith nothing but my pain and the paralyzing agony\nTo tell me who I am, who I was\nUncertainty enveloping my mind\nTill I can't break free, and\nMaybe it's a dream; maybe nothing else is real\nBut it wouldn't mean a thing if I told you how I feel\nSo I'm tired of all the pain, of the misery inside\nAnd I wish that I could live feeling nothing but the night\nYou can tell me what to say; you can tell me where to go\nBut I doubt that I would care, and my heart would never know\nIf I make another move there'll be no more turning back\nBecause everything will change, and it all will fade to black\nIf I make another move, if I take another step\nThen it all would fall apart. There'd be nothing of me left\nIf I'm crying in the wind, if I'm crying in the night\nWill there ever be a way? Will my heart return to white?\nCan you tell me who you are? Can you tell me where I am?I've forgotten how to see; I've forgotten if I can\nIf I opened up my eyes there'd be no more going back\n'Cause I'd throw it all away, and it all would fade to black. \n\n-Requests? Leave them in the comments :)-",
        "videoUrl": "https://www.youtube.com/watch?v=fCqMGcrEgLo",
        "previewImgUrl": "https://img.youtube.com/vi/fCqMGcrEgLo/hqdefault.jpg",
        "authorId": 304,
        "id": 347
    },
    {
        "title": "Discord Whooves: Bad Apple [PMV]",
        "description": "A PMV for Discord Whooves \nhttp://askdiscordwhooves.tumblr.com/\n\nSong: http://www.youtube.com/watch?v=tbXDgAAXTG0\n\nCredit to\nhttp://askelra.tumblr.com/\nand a few of the many fan artists found here\nhttp://askdiscordwhooves.tumblr.com/fanart",
        "videoUrl": "https://www.youtube.com/watch?v=Wr_6LAivHdU",
        "previewImgUrl": "https://img.youtube.com/vi/Wr_6LAivHdU/hqdefault.jpg",
        "authorId": 305,
        "id": 348
    },
    {
        "title": "The Bad Apple Video But It's In Beat Saber",
        "description": "PlusOneRabbit Video: https://www.youtube.com/watch?v=aLqOUZPKuMA&ab_channel=Sky\n   Original Video Touhou Video: https://www.youtube.com/watch?v=9lNZ_Rnr7Jc&ab_channel=luigiman09\n       Download Map: https://bsaber.com/songs/11c79/\n            Discord: https://discord.gg/B8NGVB6\nPc Specs: Intel i9-9900 KF CPU 3.60GHz, 16GB RAM, Nvidia Geforce RTX 2080, HTC VIVE",
        "videoUrl": "https://www.youtube.com/watch?v=SLdD1ohHv1M",
        "previewImgUrl": "https://img.youtube.com/vi/SLdD1ohHv1M/hqdefault.jpg",
        "authorId": 306,
        "id": 349
    },
    {
        "title": "Bad Apples - Guns n' Roses guitar cover",
        "description": "Bad Apples - Guns n' Roses guitar cover\n\nHeyo! Alex here. Jamming one of my favorites, from my beloved GnR! \n\nVery important: I shook hands with Slash. \n\nCheck out my Instagram for the evidence. Follow me, like this video, and subscribe! \ninstagram.com/punk_plant/",
        "videoUrl": "https://www.youtube.com/watch?v=SpfEyLrmEPE",
        "previewImgUrl": "https://img.youtube.com/vi/SpfEyLrmEPE/hqdefault.jpg",
        "authorId": 307,
        "id": 350
    },
    {
        "title": "\u6771\u65b9vocalBGM-Bad Apple!! feat.nomico-",
        "description": "\u539f\u66f2\u300cBad Apple!! \u300d\r\n\u6b4c\u8a5e\u4ed8\u304d\uff01\r\n\u30b9\u30c6\u30ec\u30aa\u2193\r\nhttp://jp.youtube.com/watch?v=V0h0NPcyj9s&fmt=18",
        "videoUrl": "https://www.youtube.com/watch?v=V0h0NPcyj9s",
        "previewImgUrl": "https://img.youtube.com/vi/V0h0NPcyj9s/hqdefault.jpg",
        "authorId": 308,
        "id": 351
    },
    {
        "title": "Re:LLS Stage 3 Theme: Bad Apple!! (Jynx's Remaster)",
        "description": "\u266a Touhou  Gensoukyou ~ Lotus Land Story (\u6771\u65b9\u5e7b\u60f3\u90f7\u3000\uff5e Lotus Land Story) is the fourth game of the Touhou Project, which was released at Comiket 54 in the summer of 1998.  Released on December 24th 2012, features the Extra Stage with Mugetsu and Gengetsu and eleased on March 31st 2012, features Stage 6 with Yuuka Kazami \n\n\u266a Developer: Jynx\n\n\u266a Publisher:  Jynx\n\n\u266a Music: Jynx\n\n\u266a Title: Bad Apple!!",
        "videoUrl": "https://www.youtube.com/watch?v=i0ZutK3hXzA",
        "previewImgUrl": "https://img.youtube.com/vi/i0ZutK3hXzA/hqdefault.jpg",
        "authorId": 309,
        "id": 352
    },
    {
        "title": "~Bad Apple~ Candy Pop and April Fools",
        "description": "Original song cover of Bad Apple by Ashe and Rockleelist",
        "videoUrl": "https://www.youtube.com/watch?v=OVvCg197aVg",
        "previewImgUrl": "https://img.youtube.com/vi/OVvCg197aVg/hqdefault.jpg",
        "authorId": 310,
        "id": 353
    },
    {
        "title": "BAD APPLE!! (Instrumental) || METAL COVER by RichaadEB",
        "description": "instrumental version of my BAD APPLE!! cover by popular request!\n\n\u301aTOUHOU || BAD APPLE!! INSTRUMENTAL\u301b\n\n\u2192 BUY THIS COVER \u2190\n\ud83c\udfb5 iTunes: https://apple.co/33fSWVV\n\ud83c\udfb5 Google Play: http://bit.ly/2ORmOob\n\ud83c\udfb5 Amazon: https://amzn.to/2OSTEFf\n\ud83c\udfb5 Spotify: https://spoti.fi/2Hglx64\n\ud83c\udfb5 Deezer:  http://bit.ly/2Z3WBH2\n\n\u2192MY TOUHOU ALBUM \"BULLET HELL\" \u2190 \n\ud83c\udfb5 iTunes: https://apple.co/2ZAgcf6\n\ud83c\udfb5 Google Play: http://bit.ly/2M4uFN3 \n\ud83c\udfb5 Amazon: https://amzn.to/2M6RQ9A\n\ud83c\udfb5 Spotify: http://spoti.fi/2E9lv9W\n\ud83c\udfb5 Deezer: http://bit.ly/2M68JkU\n\nSUBSCRIBE FOR MORE:  https://www.youtube.com/richaadeb?sub_confirmation=1\n\n\u2192 FOLLOW ME \u2190\nTWITTER: https://twitter.com/richaadeb/\nMERCHANDISE: http://www.richaadeb.com/merch\nDISCORD SERVER: https://discord.gg/NAc6MzU\u200b\nFACEBOOK: https://www.facebook.com/RichaadEB\nPATREON: https://www.patreon.com/RichaadEB\nINSTAGRAM: https://www.instagram.com/richaadeb/\n\nCREDITS:\n__________\nOriginal Composition - Jun'ya Ota & Masayoshi Minoshima \nEditing - NotRachelable \nEverything Else - me\n\n-Edited on location at Villainous Media-",
        "videoUrl": "https://www.youtube.com/watch?v=H8vGAtgj82g",
        "previewImgUrl": "https://img.youtube.com/vi/H8vGAtgj82g/hqdefault.jpg",
        "authorId": 246,
        "id": 354
    },
    {
        "title": "\u300e Bad Apple! \u300fNeku Remix",
        "description": "",
        "videoUrl": "https://www.youtube.com/watch?v=DGf-COIelVo",
        "previewImgUrl": "https://img.youtube.com/vi/DGf-COIelVo/hqdefault.jpg",
        "authorId": 311,
        "id": 355
    },
    {
        "title": "SRXD Megacollab | Jerrystuff (Ro) & LiterallyNoOne - Bad Apple!! Fusion Collab",
        "description": "Before I delve into everything else, massive shout out to PickPig for providing me with the gameplay footage. Heck yeah.\n\nSo, one day we saw that 20/3 had released a Bad Apple chart. Then juch. did. Then PickPig did. Then I had an awful idea: You know that Bad Apple fusion collab? What if we charted it, but every time it changes styles, it changes charters? An awful idea, right?\n\n...So here's the Bad Apple fusion collab, and every time it changes styles, it changes charters. \n\nhttps://jerrystuff-ro.bandcamp.com/track/bad-apple-fusion-collab-rip\n\nA massive shout out to the charters, whose profile pictures appear in the background during their sections. In order of appearance: kaddalaug, Matt, illsian, TheWay123, PickPig, g4, imfallin, dinx, smb, Loosiano, Baby_Jimbo, Kali, Banda, Programmatic, juch., Slival, and HighCaliberTree.",
        "videoUrl": "https://www.youtube.com/watch?v=mWw5Jx0lz38",
        "previewImgUrl": "https://img.youtube.com/vi/mWw5Jx0lz38/hqdefault.jpg",
        "authorId": 312,
        "id": 356
    },
    {
        "title": "Bad Apple!! - Touhou (Rock/Dance) Guitar Cover | Gabocarina96",
        "description": "\u266b You can now listen to this song anywhere! \u266b\nApple Music: https://music.apple.com/us/album/vgm-covers-vol-3/1550031502\nSpotify: https://open.spotify.com/album/1bWXyunugbM8rtzZVf0cNU\nYouTube Music: https://music.youtube.com/browse/MPREb_gJVOUHIj0ZP\n\n\u2605 Support me on Patreon to download all my music, choose my next cover and even more!: https://www.patreon.com/gabocarina96\n\n--Follow me on\n\u2605 Twitter: https://twitter.com/gabocarina96\n\u2605 Instagram: https://www.instagram.com/gabocarina96/\n\u2605 Facebook: https://www.facebook.com/gabocarina96\n\u2605 Soundcloud (Original music) : https://soundcloud.com/gabocarina96\n\n\u2605 Twitch: http://www.twitch.tv/gabocarina96\n\nMy albums on: \n\u2605 iTunes: https://itunes.apple.com/ca/artist/gabocarina96/id941925908?l=en\n*****************\nHello everyone! :D Now this is something different.\n\nI've known this song for a very long time now and I always loved it. It's such a great catchy song that stays in your head forever once you hear it. I wanted to cover it at multiple occasions but never actually got to it as I thought there were already enough covers of it..! Bad reasoning I know but... I did it!!\n\nIt was recently requested on Patreon by Robbie and I figured it was finally time I have my take on this classic! I hope you like it and that the video doesn't confuse you too much. :'D\n\nThanks for watching, enjoy! See you next week!\n\n\nArranged & performed by: gabocarina96\n\nComposed by: Jun'ya Ota & Masayoshi Minoshima",
        "videoUrl": "https://www.youtube.com/watch?v=yoEYq1Flbjg",
        "previewImgUrl": "https://img.youtube.com/vi/yoEYq1Flbjg/hqdefault.jpg",
        "authorId": 313,
        "id": 357
    },
    {
        "title": "Touhou - Bad Apple - Banjo cover",
        "description": "Here's my cover of Touhou - Bad Apple on Banjo and Mandolin & flute... \nHey folks don't forget to leave a comment  (like letting me know what I should cover next)  and hit the like button, it helps more than you know nowadays with youtube's visibility algorithm & policies .\n------------------------------\n\u2705 To support the channel:\n- PATREON:  http://www.patreon.com/olonguet\n- YOUTUBE MEMBERSHIP: https://www.youtube.com/channel/UC5-umfrfqPvDvWCYHJGYtpA/join\n- UTIP: https://utip.io/banjoguyollie\n- SUBSCRBESTAR: https://www.subscribestar.com/banjoguyollie\n\n\u2705 BGO Merch stuff: https://teespring.com/stores/banjo-guy-ollie\n\n\u2705 Download music:\nBandcamp: http://banjoguyollie.bandcamp.com/\nitunes: https://itunes.apple.com/us/artist/banjo-guy-ollie/id916017582\nSpotify : https://open.spotify.com/artist/6R3R6tVH56qHctFHw6gBYS\nDeezer: https://www.deezer.com/en/artist/7442684\nGoogle Play : https://play.google.com/music/preview/Ar277vfndwxi5hetnpf5vnhckty?play=1&u=0 \n\n\u2705 Instrument Wishlist (more instruments: more music!!) : https://www.thomann.de/ie/wishlist_4u_e84c11c35c36.html\n\n\u2705 Social Media links:\nTwitch : https://www.twitch.tv/banjoguyollie\nFacebook : https://www.facebook.com/pages/Banjo-Guy-Ollie/231348140385889?ref=hl\nTwitter : https://twitter.com/BanjoGuyOllie\nInstagram : https://www.instagram.com/banjoguyollie/\nDiscord Channel : https://discord.gg/28RwgQx\n\n\n#touhou #badapple #bad #apple #banjocover",
        "videoUrl": "https://www.youtube.com/watch?v=BVbA2EKGYBs",
        "previewImgUrl": "https://img.youtube.com/vi/BVbA2EKGYBs/hqdefault.jpg",
        "authorId": 314,
        "id": 358
    },
    {
        "title": "Bad Apple - Sweet Melody Remix",
        "description": "A little melody (slow version) of Bad Apple (the remix version) I made. It's a simple music box like version, where at times some lovely strings will build up the song a bit (actually a water flute, but has a string feeling to it). You can download and support at:\n\nhttps://flandre-sdm.bandcamp.com/track/bad-apple-sweet-melody\n\nDownload for free (just type 0.00), or donate to desire, whatever you want. Your like and listen alone means a lot, thanks!\n\nhttps://soundcloud.com/flandre-sdm\n\nFeel free to use this song in your videos, or covers as well, with credits to me. Have fun!\n\nScarlet background can be found at :\n\nhttp://otakumode.com/pchw/suki/touhou...\n\n (all credits to tsurukame for such a beautiful image)\n\nMy goodness, I did not expect this many views/likes. I really appreciate all the views and comments you are all coming up with. Keep them going, you are all amazing!\n\nIt has come to my attention that I have actually received a couple small kind donations and I appreciate it very much. Anything helps me. I am not exactly a high techy equipped person to make these stuff, and I'm hoping one day I can have em and pump this out at a more amazing rate plus all the other work I make.",
        "videoUrl": "https://www.youtube.com/watch?v=EJTNMaHCgiM",
        "previewImgUrl": "https://img.youtube.com/vi/EJTNMaHCgiM/hqdefault.jpg",
        "authorId": 315,
        "id": 359
    },
    {
        "title": "Touhou - Bad Apple [Metal Remix by NyxTheShield]",
        "description": "Support me on Patreon! https://patreon.com/nyxtheshield\nArtwork by Jael Pe\u00f1aloza! https://www.youtube.com/Jakeihazen\n\nRemix by NyxTheShield\n\n#Touhou #BadApple #TouhouRemix",
        "videoUrl": "https://www.youtube.com/watch?v=gQte0E6psRE",
        "previewImgUrl": "https://img.youtube.com/vi/gQte0E6psRE/hqdefault.jpg",
        "authorId": 316,
        "id": 360
    },
    {
        "title": "\u3010SOUND VOLTEX\u3011Bad Apple!! feat. nomico [EXH]",
        "description": "from nicovideo",
        "videoUrl": "https://www.youtube.com/watch?v=O3_1ZusubqA",
        "previewImgUrl": "https://img.youtube.com/vi/O3_1ZusubqA/hqdefault.jpg",
        "authorId": 317,
        "id": 361
    },
    {
        "title": "[Deltarune Remix] Stormheart - Field of Bad Apples (Bad Apple x Field of Hopes and Dreams)",
        "description": "Hello friends, it's been a while (\uff62\uff65\u03c9\uff65)\uff62 I've not tried remixing Bad Apple since 2017 so I gave it another go and somehow I ended up with this uvu In total, this track took 11 hours and I had a lot of fun composing the chords and messing around with Bad Apple's bassline and of course Field of H & D's pretty melody o3o\n\nFun fact: this is actually my 61st upload to my channel which on its own might seem like a lot of music uploads until you learn I have 234 unfinished WIPs just sitting in a folder on my desktop (\u251b\u25c9\u0414\u25c9)\u251bI'm currently tinkering with a Pok\u00e9tale remix of Battle Tower from Sword & Sheild and Battle Against a True Hero as well as an original track for Underfresh so there's that to look forward to for 2020 (\uff89\u25d5\u30ee\u25d5)\uff89*:\uff65\uff9f\u2727\n\n\ud83e\udde1 Free Download \ud83e\udde1\n\u2605 https://soundcloud.com/stormheartotero/deltarune-remix-stormheart-field-of-bad-apples-bad-apple-x-field-of-hopes-and-dreams-1\n\n\ud83c\udfa8 Artwork Featured \ud83c\udfa8\n\u2605 https://chalaite.tumblr.com/post/179713136420\n\n\ud83c\udf38 Quick Search Tags \ud83c\udf38\n#deltarune #badapple #undertale #stormheartofficial",
        "videoUrl": "https://www.youtube.com/watch?v=4fKaoFrhfqA",
        "previewImgUrl": "https://img.youtube.com/vi/4fKaoFrhfqA/hqdefault.jpg",
        "authorId": 318,
        "id": 362
    },
    {
        "title": "Bad Apple - Expert | Beat Saber Mixed Reality",
        "description": "Today we are playing a song called Bad Apple. While I was playing the song I didnt know what the lyrics were saying but I thought they were interesting so I pinned them to the top comment!. Please help support the BLM moment here:\n\nBlack Lives Matter - https://blacklivesmatters.carrd.co/\nCan't donate? Watch this video! - https://youtu.be/bCgLa25fDHM\n\nMapper: redmagi - https://bsaber.com/songs/1573/\n\ud83d\udc9cOur shop - https://ihascupquake.com/\n\nCHECK OUT SOME MORE VIDEOS!\nLive Channel! \u25ba https://www.youtube.com/channel/UC1ory5ymKEudKTEXxnIZwaw/featured\nDraw My Life! \u25ba http://bit.ly/iHasCupquakeDrawMyLife (get to know me!)\nAnimated Shorts \u25ba http://bit.ly/iHasCupquakeAnimated\nAnimated Songs \u25ba http://bit.ly/iHasCupquakeAnimatedSongs\n\n\ud83d\udc9c Follow Me\n\u2b50 Instagram - http://instagram.com/tiffyquake\n\u2b50 Twitter - https://twitter.com/iHasCupquake\n\u2b50 Facebook - https://www.facebook.com/cupquake/\n\n\ud83d\udc96 Follow CupquakeHQ\n\u2b50 Instagram - https://www.instagram.com/cupquakehq\n\n\ud83d\udcf1 IOS Stickers: http://bit.ly/iHCStickers\n\ud83e\udd0d Check out my merch: http://bit.ly/iHCStore\n\u25ba Enjoy the music in this video? Try Epidemic out for 1 month Free Trial using my link: http://share.epidemicsound.com/Cupquake",
        "videoUrl": "https://www.youtube.com/watch?v=nKE_uzMCcLA",
        "previewImgUrl": "https://img.youtube.com/vi/nKE_uzMCcLA/hqdefault.jpg",
        "authorId": 319,
        "id": 363
    },
    {
        "title": "(Preview) [Bad Apple!! x SSB] Smash Apple!! (To Be Continued)",
        "description": "Guess which video of mine is getting a continuation? This one!\nHowever, it's still in the process of being made, as I still need to animate the other characters.\nIf you want to see how it's going, subscribe to my Patreon for only $2!:\n\nhttps://www.patreon.com/amazingartistyellow\n\n\n\nOtherwise, hang tight until the video is done. :)\n\n\n\nTwitter:\nhttps://twitter.com/AAnimatorYellow\n\n\nSong:\nhttps://www.youtube.com/watch?v=9Xz4NV0zsbY",
        "videoUrl": "https://www.youtube.com/watch?v=zGT841OS-8s",
        "previewImgUrl": "https://img.youtube.com/vi/zGT841OS-8s/hqdefault.jpg",
        "authorId": 320,
        "id": 364
    },
    {
        "title": "[English cover] Bad apple / Tra\u0301i ta\u0301o h\u01b0 (vietsub)",
        "description": "",
        "videoUrl": "https://www.youtube.com/watch?v=ZEZ4xJLey6g",
        "previewImgUrl": "https://img.youtube.com/vi/ZEZ4xJLey6g/hqdefault.jpg",
        "authorId": 321,
        "id": 365
    },
    {
        "title": "[Undertale x Touhou] Bad Apple + Bonetrousle",
        "description": "Music: https://soundcloud.com/tsuki17/bad-apple-bonetrousle\nArt made by Temmie Chang.",
        "videoUrl": "https://www.youtube.com/watch?v=luNTP5gTehs",
        "previewImgUrl": "https://img.youtube.com/vi/luNTP5gTehs/hqdefault.jpg",
        "authorId": 322,
        "id": 366
    },
    {
        "title": "Robeats - Bad Apple (Hard) 7 miss (with accuracy gear)",
        "description": "Thanks to MegMewtwoZ for hosting",
        "videoUrl": "https://www.youtube.com/watch?v=ejfkgU5oiGc",
        "previewImgUrl": "https://img.youtube.com/vi/ejfkgU5oiGc/hqdefault.jpg",
        "authorId": 323,
        "id": 367
    },
    {
        "title": "\u3010MMD\u3011Bad Apple!! (12 Languages ver.)\u3010Miku Teto/Luka Haku\u3011[4K]",
        "description": "Thank you for 150K Subscribers and over 30M views!!\ud83d\ude2d\n\ud83d\udeabDO NOT REUPLOAD AND EDIT!!\ud83d\udeab\nIf you like, pls\u300cLike\ud83d\udc4d\u300dand\u300cSubscribe(\u767b\u9332,\u8a02\u95b1)\u300dfor more videos!\nI created videos with a free application called 'MMD' (MikuMikuDance, it's not a game, only for PC)\n\u7981\u6b62\u8f49\u8f09\u3002https://space.bilibili.com/319681358\n\n\u2605Twitter\nhttps://twitter.com/niconicoMMD\n\n\u2605\u304a\u501f\u308a\u3057\u305f\u3082\u306e\u2605(\u656c\u79f0\u7565)\n\nMusic\uff1aBad Apple\n01. Spanish - https://youtu.be/yUh9HPeFpBk\n02. Portuguese - https://youtu.be/k5yKBEIsRjY\n03. English - https://youtu.be/rQg2qngyIZM\n04. Italian - https://youtu.be/tznHOane5b8\n05. German - https://youtu.be/qnWDB1vfFhA\n06. Russian - https://youtu.be/sxKVflJe0ac\n07. Korean - https://youtu.be/nd4hZ6xSRX0\n08. Malay - https://youtu.be/vpoRXv-pPTE\n09. Thai - https://youtu.be/a96l8cEwiOI\n10. Vietnamese - https://youtu.be/fv4dyLWpo9c\n11. Chinese - https://youtu.be/TFvw6OlTz3o\n12. Japanese - https://youtu.be/9lNZ_Rnr7Jc\n\nMotion\uff1a\u30cd\u30a4\nhttps://www.nicovideo.jp/watch/sm13266847\n\nModel\uff1aTheCrystalGeode\n\nCamera\uff1aUnknown, nico nico\n\nStage\uff1a\u9bd6\u7f36\n\nSkydome\uff1a\u602a\u7363\u5bfe\u82e5\u5927\u5c06P\n\nEffect\uff1aRui\u3001\u91dd\u91d1P\u3001\u305d\u307c\u308d\u3001\u304a\u305f\u3082\u3093\n\n#MMD #Miku #BadApple",
        "videoUrl": "https://www.youtube.com/watch?v=U4gBy1t7TYg",
        "previewImgUrl": "https://img.youtube.com/vi/U4gBy1t7TYg/hqdefault.jpg",
        "authorId": 324,
        "id": 368
    },
    {
        "title": "Bee Swarm Simulator (Bees) ~ Bad Apple (FINAL VERSION)",
        "description": "Finally, after hard work as well as delays because of other stuff and studying, this version should be even better than the two previous versions. But thank you guys for giving them a lot of attention, that means a lot to you guys! :D\n\nCredits:\nArts by T-Block\nOriginal Song by Alstroemeria Records (This song also belongs to Touhou)\nVoices used:\nBasic Bee: Rikiru Yokomane\nBomber Bee: Kamui Gakupo V4\nBrave Bee: Kaito\nBumble Bee: Kyousho Rakudaine\nCool Bee: Tai Suki\nHasty Bee: Kaoru Hibiki\nLooker Bee: Kamui Gakupo V4\nRad Bee: Okamine Tritone\nRascal Bee: Aoki Lapis\nStubborn Bee: Yohioloid \nBubble Bee: Yokune Ruko\nBucko Bee: Kamui Gakupo POWER\nCommander Bee: Kaito\nDemo Bee: Kagamine Rin V4\nExhausted Bee: Namine Ritsu\nFire Bee: VY2 (A.K.A Yuuma)\nFrosty Bee: Tai Suki\nHoney Bee: Yohioloid3\nRage Bee: Akaito\nRiley Bee: Merli\nShocked Bee: Fukase\nBaby Bee: Kagamine Rin (I know this sounds similar to Aoki)\nCarpenter Bee: Nagone Makoto\nDemon Bee: Kaito V3\nDiamond Bee: Meiko V3\nLion Bee: Kaito V3\nMusic Bee: Gahata Meiji\nNinja Bee: Hiyama Kiyoteru V2\nShy Bee: Miku V4\nBear Bee: Equinox (A.K.A Rayken)\nCobalt Bee: Kaito V3\nCrimson Bee: Kagamine Rin V4\nFestive Bee: Macne Nana\nGummy Bee: CRINA (Couldn't find any better voice)\nPhoton Bee: Kamui Gakupo POWER\nPuppy Bee: Kemonone Rou\nTabby Bee: Kasane Teto\nVicious Bee: Merli\nWindy Bee: Namine Ritsu",
        "videoUrl": "https://www.youtube.com/watch?v=jYXaG75KsW4",
        "previewImgUrl": "https://img.youtube.com/vi/jYXaG75KsW4/hqdefault.jpg",
        "authorId": 325,
        "id": 369
    },
    {
        "title": "Grief Seed - Madoka Bad Apple (Bad Apple audio)",
        "description": "UPDATED VERSION! https://youtu.be/N_Z8-HVXGGo\n\nWoo, it's done. Animation-wise at least.\n\nI don't follow Touhou, but Bad Apple to this date is one of my favorite songs and music videos. I've seen a lot of ideas bounced around about incorporating themes from it into other shows, so I took the initiative and made this for Madoka Magica. Hope you find the parallels between the two cool!\n\nNote: There's an audio cover coming that's specific to Madoka Magica, but that's taking a lot longer than expected, so I figured I'd post this now.\n\nDone in MMD, Blender, and After Effects.\n\nMadoka Magica is owned by Shaft, Inc.\nBad Apple was arranged by Masayoshi Minoshima. Lyrics by Haruka. Vocals by nomico",
        "videoUrl": "https://www.youtube.com/watch?v=JA3_jHwGnNQ",
        "previewImgUrl": "https://img.youtube.com/vi/JA3_jHwGnNQ/hqdefault.jpg",
        "authorId": 326,
        "id": 370
    },
    {
        "title": "Alstroemeria Records - Bad Apple!! (REDALiCE Remix)",
        "description": "Circle: Alstroemeria Records\nAlbum: Trois Noir\nArtist: Masayoshi Minoshima/REDALiCE\nLyricist: Haruka\nVocals: nomico \nEvent: Comiket 75\nBad Apple!! - \u6771\u65b9\u5e7b\u60f3\u90f7 \uff5e Lotus Land Story",
        "videoUrl": "https://www.youtube.com/watch?v=cNgqmzaoQVU",
        "previewImgUrl": "https://img.youtube.com/vi/cNgqmzaoQVU/hqdefault.jpg",
        "authorId": 327,
        "id": 371
    },
    {
        "title": "Bad Apple but with the Roblox death sound",
        "description": "Back from vacation.",
        "videoUrl": "https://www.youtube.com/watch?v=kUO9BbVMVOE",
        "previewImgUrl": "https://img.youtube.com/vi/kUO9BbVMVOE/hqdefault.jpg",
        "authorId": 171,
        "id": 372
    },
    {
        "title": "Bad Apple!! Traditional Japanese Version \u3010Hyuman Remix\u3011",
        "description": "Spotify: https://open.spotify.com/artist/2BGPkKIyJfHHriuGbXKl5a?si=7tdgt204QaSzaK7rEtlqeg\nInstagram: https://www.instagram.com/hyuman_exe",
        "videoUrl": "https://www.youtube.com/watch?v=4A77BcZFhC4",
        "previewImgUrl": "https://img.youtube.com/vi/4A77BcZFhC4/hqdefault.jpg",
        "authorId": 328,
        "id": 373
    },
    {
        "title": "[\u653e\u96fb\u6f14\u594fx\u30ec\u30fc\u30b6\u30fc] Bad Apple!! feat.nomico",
        "description": "Touchdesinger2\u3067\u5f71\u7d75\u6620\u50cf\u3092\u51e6\u7406\u3057\u3066\u3001\u30ec\u30fc\u30b6\u30fc\u3067\u51fa\u529b\u3055\u305b\u3066\u307e\u3059\u3002\n\n2\u91cd\u594f\uff06\u97f3\u30ba\u30ec\u4fee\u6b63\u7248\nhttps://www.youtube.com/watch?v=nNC6aTSKiwk\n\n\u8ffd\u8a18\uff1a\u30a8\u30f3\u30b3\u30df\u30b9\u3067\u97f3\u30ba\u30ec\u3057\u3066\u307e\u3059\u3002orz\n\n\n\u97f3\u697d\uff1aBad Apple !! feat.nomico\n\u539f\u66f2\uff1aBad Apple!! / \u6771\u65b9\u5e7b\u60f3\u90f7\n\u30b5\u30fc\u30af\u30eb\uff1aAlstroemeria Records\n\u30a2\u30ec\u30f3\u30b8\uff1aMasayoshi Minoshima\n\u6b4c\uff1anomico\n\u4f5c\u8a5e\uff1aHaruka\n\n\n#\u6771\u65b9#Badapple #\u7570\u8272\u6f14\u594f\u8005",
        "videoUrl": "https://www.youtube.com/watch?v=2P8Hg6LsPn0",
        "previewImgUrl": "https://img.youtube.com/vi/2P8Hg6LsPn0/hqdefault.jpg",
        "authorId": 121,
        "id": 374
    },
    {
        "title": "[Beat Saber] Bad Apple!! (First-person View)",
        "description": "4K\nPlayer: makeUmove\nValve Index\n\nmapped by Core Pee",
        "videoUrl": "https://www.youtube.com/watch?v=gqQwdPCnIY4",
        "previewImgUrl": "https://img.youtube.com/vi/gqQwdPCnIY4/hqdefault.jpg",
        "authorId": 329,
        "id": 375
    },
    {
        "title": "bad apple wip",
        "description": "something i was gonna post for sam's bday but couldn't finish cuz it was causing me a lot of stress\ni will still TRY to finish this but don't count on it\nalso im sorry if the german is wrong i don't speak german very well-- i'm still really early in learning\nthe second half of the video is storyboarded by nebulilac, thank you so much amber!!",
        "videoUrl": "https://www.youtube.com/watch?v=U7k4TwJI2y8",
        "previewImgUrl": "https://img.youtube.com/vi/U7k4TwJI2y8/hqdefault.jpg",
        "authorId": 330,
        "id": 376
    },
    {
        "title": "[Touhou Hardstyle] - Bad Apple (Shingo Dj remix)",
        "description": "\"Shingo Dj\" project as producer was take over with my other project \"Round Wave Crusher\".\nI hope you still support my develope as a Hardcore/Hardtek/Frenchcore producer.\n\nYou can support me on bandcamp: https://roundwavecrusher.bandcamp.com\nor Soundcloud: https://soundcloud.com/roundwavecrusher\n\n@roundwavecrusher in other social media.",
        "videoUrl": "https://www.youtube.com/watch?v=eU5SQAOdvIU",
        "previewImgUrl": "https://img.youtube.com/vi/eU5SQAOdvIU/hqdefault.jpg",
        "authorId": 331,
        "id": 377
    },
    {
        "title": "Bad Apple!! [7 Vocaloid Chorus]",
        "description": "Dedicated to : SweetSourSace of the VAA. ~ Here you are. You gave me the idea to do this. =P\r\n\r\nMessy and annoying. Haha, but I love it. =3.\r\n\r\nTook me 11 hours total. GASP. =o.\r\n\r\n6 hours for the mixing and 5 hours for the video. The video was driving me crazy T_T.\r\n\r\nAnyway, hope you guys like it.\r\n\r\nVocaloid Singers (Left - Right)\r\nKaito\r\nMegurine Luka\r\nRin Kagamine\r\nGumi\r\nLen Kagamine\r\nMeiko\r\nHatsune Miku\r\n\r\nMp3 if anyone wants? Razz\r\nhttp://www.4shared.com/audio/Opgy41mA/Bad_Apple_7_Vocaloid_Chorus.html\r\n\r\nMixing and Video by : Takeshi19 (Icon095)\r\n\r\nI don't own the song, I only compiled all the versions into one. =3. The animating of the pictures is by me, but the music video is from the original.",
        "videoUrl": "https://www.youtube.com/watch?v=KgdtB8xq6Ms",
        "previewImgUrl": "https://img.youtube.com/vi/KgdtB8xq6Ms/hqdefault.jpg",
        "authorId": 332,
        "id": 378
    },
    {
        "title": "Bad Apple but its Bad Apple",
        "description": "I got bored so i remixed Bad Apple with itself so here i guess\n\nEdit: hi wow this is really blowing up a year later... heh ^^\ncheck out some other mashes I've done if you wish https://youtube.com/playlist?list=PL9KSIlltWJSTbNxQk_dY_3mULFoBN_Dyi",
        "videoUrl": "https://www.youtube.com/watch?v=Z4Oh2EfArpw",
        "previewImgUrl": "https://img.youtube.com/vi/Z4Oh2EfArpw/hqdefault.jpg",
        "authorId": 333,
        "id": 379
    },
    {
        "title": "Alstroemeria Records - Bad Apple!! feat. nomico (iGerman Synthwave Remix)",
        "description": "Enjoy this synthwave-style remix/edit of Bad Apple!! made by my friend, iGerman - he worked on the audio, while I made a matching video for it, but I've also helped him a bit with the song structure!\n\nWhile I don't think it *really* counts as synthwave, it does have the strong retro vibe, and the video is no exception from that. \nAfter all, it was meant to be \"how NOT to make a synthwave remix\" but the result was too good not to share, which is how we ended up with this video.\n\n\u276f Listen on SoundCloud\nhttps://soundcloud.com/igerman00/aesthetic-apple\n\n\u276f Support iGerman\n[Ig] https://instagram.com/igermanproduction\n[Sc] https://soundcloud.com/igerman00\n[Tw] https://twitter.com/iGerman00\n[Vk] https://vk.com/igermanproduction\n[Wb] https://igmn.tk\n[Yt] https://youtube.com/c/igermanproduction\n\n\u276f Support Alstroemeria Records\n[Fb] https://facebook.com/minoshima.masayoshi\n[Sc] https://soundcloud.com/alstroemeria-records\n[Tw] https://twitter.com/M_Minoshima\n[Wb] http://alst.net\n\n\n\n\u276f Request videos\nhttp://yoshifan.me/request\n\n\u276f Follow me on Twitter\nhttps://twitter.com/YoshiFan13\n\n\u276f Other social media\nhttp://yoshifan.me\n\n\n\n\u276f Rendered in Adobe After Effects CC 2014\n\n\n\nAll rights belong to their respective owners. No copyright infringement intended.",
        "videoUrl": "https://www.youtube.com/watch?v=pDhz5gbjQig",
        "previewImgUrl": "https://img.youtube.com/vi/pDhz5gbjQig/hqdefault.jpg",
        "authorId": 9,
        "id": 380
    },
    {
        "title": "Touhou - Bad Apple (Spectre Remix)",
        "description": "Sorry if you don't like anime.\n\nLike,\nComment,\nSubscribe for more.\n\nBACKGROUND CREDITS:\n--- http://www.beeple-crap.com/\n--- STEPS (loop)\n\nLINKS:\n--- Facebook: https://www.facebook.com/spectre.remixes/\n--- Soundcloud: https://soundcloud.com/spectre-remixes/\n--- Email: spectre0100@gmail.com\n\nNew videos (almost) every week.",
        "videoUrl": "https://www.youtube.com/watch?v=on4xXelfzRw",
        "previewImgUrl": "https://img.youtube.com/vi/on4xXelfzRw/hqdefault.jpg",
        "authorId": 334,
        "id": 381
    },
    {
        "title": "CS:GO Theme Bad Apple!! Mashup Remix",
        "description": "Happy Eid Mubarak as i uploaded this in Eid Fitr Day lmao\n\n\nTrying to create silhouette effect is pretty hard than i thought.\n\n\nVideo Used: \n\nValve - Counter-Strike: Global Offensive Trailer\n\n\nSong Used:\nValve Studio Orchestra - CS:GO Main Menu 01 Theme\nnomico - Bad Apple!!",
        "videoUrl": "https://www.youtube.com/watch?v=YhFNDHViycA",
        "previewImgUrl": "https://img.youtube.com/vi/YhFNDHViycA/hqdefault.jpg",
        "authorId": 335,
        "id": 382
    },
    {
        "title": "[osu!] Bad Apple (Camellia's \"Bad Psy!!\" Remix) [Anguish] + HD",
        "description": "map : https://osu.ppy.sh/b/1578784",
        "videoUrl": "https://www.youtube.com/watch?v=eOuaMXS7kP8",
        "previewImgUrl": "https://img.youtube.com/vi/eOuaMXS7kP8/hqdefault.jpg",
        "authorId": 336,
        "id": 383
    },
    {
        "title": "Bad Apple!! on a VFD (prototype)",
        "description": "This is an early prototype. Video of the final Version: https://www.youtube.com/watch?v=lp6mTAZll1I\n\nhttps://twitter.com/Toble_Miner/status/1310305588505710592\n\nThe VFD is a Noritake Itron MN12864K. It is controlled by a STM32F103. Video data is fed to the STM32 via a 1.5Mbaud serial interface.",
        "videoUrl": "https://www.youtube.com/watch?v=lSy63kkeXoI",
        "previewImgUrl": "https://img.youtube.com/vi/lSy63kkeXoI/hqdefault.jpg",
        "authorId": 337,
        "id": 384
    },
    {
        "title": "Bad Apple - Hardcore Remix (EXTENDED)",
        "description": "Donwload this music on Bandcamp: goo.gl/bjdp6q\nEver wanted to learn to play the piano? This is a very easy and quick way: http://tinyurl.com/BobGmbH-flowkey\nSUBSCRIBE: https://www.youtube.com/user/bobgmbh3000?sub_confirmation=1\nRequests: http://tinyurl.com/qd3wq85\n\n\u00a9 Transcription - BobGmbH\n\u00a9 Arrangement - BobGmbH\n .\n \u00a9 If by chance you are the copyright holder of any of the footage or material used in this video just write me an email at: bobgmbh@yahoo.com and I will delete the video as soon as possible.\n* affiliate links",
        "videoUrl": "https://www.youtube.com/watch?v=3Ha8kYgbVpo",
        "previewImgUrl": "https://img.youtube.com/vi/3Ha8kYgbVpo/hqdefault.jpg",
        "authorId": 338,
        "id": 385
    },
    {
        "title": "Star Wars ~ Bad Apple",
        "description": "Credit to KawaiiYanderlee for the audio!\n\nVoices used:\n\nFinn: YOHIOloid\nRey: Kagamine Len \nSnoke: Takara Asune\nYoda: KaiKim\nPoe Dameron: Kaito\nKylo Ren: Hiyama Kiyoteru\nDarth Vader: Yarui Munegi\nBoba Fett: Akaito\nLuke Skywalker: Matsudappoiyo\nGrand Moff Tarkin: Rook\nObi-Wan Kenobi: Yuuma\nDarth Maul: CRINA \nPalpatine: Beat Okamine\nLando Calrissian: Kamui Gakupo\nMace Windu: Kamui Gakupo\nJar Jar Binks: Taito\nGeneral Hux: Equinox\nC3PO: Tai Suki\nChewbacca: Ryuzaki Nakamura\nHan Solo: Tsuyoi \nGeneral Grievous: Akaito \nAdmiral Ackbar: Kojurou \nJango Fett: HamanoKUN\nPrincess Leia: YOHIOloid\nSebulba: Kyousho Rakudaine\nMaz Kanata: Fukase\n\n(I didn't make any of the Vocaloid voices, all creds for Bad Apple go to the Touhou fandom.)",
        "videoUrl": "https://www.youtube.com/watch?v=cheWGAdezyc",
        "previewImgUrl": "https://img.youtube.com/vi/cheWGAdezyc/hqdefault.jpg",
        "authorId": 339,
        "id": 386
    },
    {
        "title": "Bad apple//completed [Undertale]",
        "description": ":)",
        "videoUrl": "https://www.youtube.com/watch?v=t2bA4oROpFQ",
        "previewImgUrl": "https://img.youtube.com/vi/t2bA4oROpFQ/hqdefault.jpg",
        "authorId": 340,
        "id": 387
    },
    {
        "title": "Minato aqua singing Bad Apple",
        "description": "link to the full video: https://www.youtube.com/watch?v=KI90lVm_vHA&list=PLXdq5DCX9Ywbx6md0EdCN60-JY0rNjxuf\n\nlink to aqua channel: https://www.youtube.com/channel/UC1opHUrw8rvnsadT-iGp7Cg\n\nlink to the original song: https://www.youtube.com/watch?v=9lNZ_Rnr7Jc",
        "videoUrl": "https://www.youtube.com/watch?v=HTC3LAREi-I",
        "previewImgUrl": "https://img.youtube.com/vi/HTC3LAREi-I/hqdefault.jpg",
        "authorId": 341,
        "id": 388
    },
    {
        "title": "Bad Apple feat. Aniki",
        "description": "Yagami nee na!!!",
        "videoUrl": "https://www.youtube.com/watch?v=6KX6KaUXips",
        "previewImgUrl": "https://img.youtube.com/vi/6KX6KaUXips/hqdefault.jpg",
        "authorId": 342,
        "id": 389
    },
    {
        "title": "A Bad Meal - (Bad Apple + 1 2 Oatmeal)",
        "description": "Gourmet Race + Bad Apple + the ORIGINAL Bad Apple + 1 2 Oatmeal\nEach repeat is different, it's not just a loop.\n\nDownload: https://drive.google.com/open?id=1EZKxrYsQklMmfRPR0ynnGmzl0s536sog",
        "videoUrl": "https://www.youtube.com/watch?v=adczy153TN8",
        "previewImgUrl": "https://img.youtube.com/vi/adczy153TN8/hqdefault.jpg",
        "authorId": 343,
        "id": 390
    },
    {
        "title": "Trevor Henderson Creatures ~ Bad Apple part 1",
        "description": "Cartoon Cat: HowHow\nSiren Head: Dem-03 \nHead Light: Dem-03 \nBig Charlie: Doemu\nLil Nugget: Doctor Vertigo\nGhost Pig: Danzo Noicu and Tai Suki\nBridge Worm: Akuma Yuko\nBreaking News: Re-Do\nBonesworth: Shoji Hitoshi\nCartoon Girl: Shiro Hitsuji\nLong Horse: Kaito\nAnxious Dog: Aido Feirune\nScribble Head: \u96d1\u8349\u30c9\u30eb\nCostume Man: \u53cc\u97f3\u30ec\u30f3\u30b8\u306b\nThe Fencer: Rioki Skyzure\nThe God Of Roadkill: MapleStyle \nNurpo: Ryuzaki Nakamura\nThe Lamb: GJYYNGII\nCountry Road Creature: Amekawa Hikaru\nForgotten Baby: HamanoKUN\nDolls Body: Chiemi Aya\nMeat Horse: Kubi Shine\nHMSAM: Elis\n\n\n\n\n\n\n\nNext Video: Dr. Doofenshmirtz Sings Bad Apple",
        "videoUrl": "https://www.youtube.com/watch?v=S_1NvGZQLb8",
        "previewImgUrl": "https://img.youtube.com/vi/S_1NvGZQLb8/hqdefault.jpg",
        "authorId": 274,
        "id": 391
    },
    {
        "title": "Bad Apple!! feat. nomico \u3010\u6771\u65b9\uff30\uff36\u3011",
        "description": "/",
        "videoUrl": "https://www.youtube.com/watch?v=ICGkqWoIRv0",
        "previewImgUrl": "https://img.youtube.com/vi/ICGkqWoIRv0/hqdefault.jpg",
        "authorId": 344,
        "id": 392
    },
    {
        "title": "Touhou  - Bad Apple Full Version",
        "description": "Video Japones con la version full\nBasado en un tema de Alstroemeria Records - Bad Apple de la saga de Touhou\nDatos\nJuego: Touhou - Lotus Land Story Stage 3\nVocal : Nomico\nCancion : Bad Apple!!\nLink de Descarga del Mp3 : http://www.4shared.com/audio/sYT9DMuL/Touhou_-_Bad_Apple.htm",
        "videoUrl": "https://www.youtube.com/watch?v=i9IBJvtiewo",
        "previewImgUrl": "https://img.youtube.com/vi/i9IBJvtiewo/hqdefault.jpg",
        "authorId": 345,
        "id": 393
    },
    {
        "title": "Touhou 4 - Stage 3 Theme (Bad Apple!!) EDM Cover",
        "description": "This is my electronic cover version of Touhou 4 - Stage 3 theme (Bad Apple!!).\n\nCredits:\n- Original soundtrack composed by ZUN\n- Cover version by Antti Pylsy\n\n#badapple #touhou #touhoumusic",
        "videoUrl": "https://www.youtube.com/watch?v=OmS4eCCg3yQ",
        "previewImgUrl": "https://img.youtube.com/vi/OmS4eCCg3yQ/hqdefault.jpg",
        "authorId": 346,
        "id": 394
    },
    {
        "title": "\u3010V Flower\u3011Bad Apple!!  \u3010VOCALOID\u30ab\u30d0\u30fc\u3011",
        "description": "I'll be uploading covers with flower daily until her birthday\r\n\r\n\r\nVSQx: https://www.youtube.com/watch?v=GCadyeXJbTU&amp;t=47s\r\nArt: https://www.pixiv.net/member_illust.php?mode=medium&amp;illust_id=70229310\r\nMP3: https://soundcloud.com/karla-the-little-girl/bad-apple-ft-flower\r\n-unh4ppy girl-",
        "videoUrl": "https://www.youtube.com/watch?v=rOPpjk_vH3Y",
        "previewImgUrl": "https://img.youtube.com/vi/rOPpjk_vH3Y/hqdefault.jpg",
        "authorId": 347,
        "id": 395
    },
    {
        "title": "Grief Seed - Madoka Magica meets Bad Apple (Updated | Japanese vocals)",
        "description": "https://twitter.com/Zedrinbot\n\nSo here it is, after about a year delay it's finally done!\n\nThe animation was actually done and updated a while ago, but I had been waiting on having vocals done for an accompaniment. Unfortunately, there's been a lot of complications with that so I don't know if the audio cover will be released now.\n\nBut, you can check out the updated animation here! And if the cover is ever done (or redone), I'll post that too later.\n\nTools used:\nMMD, Blender, Flash CS6, After Effects CS6\n\nIf you like my stuff, consider supporting me on Patreon! http://www.patreon.com/Zedrin",
        "videoUrl": "https://www.youtube.com/watch?v=N_Z8-HVXGGo",
        "previewImgUrl": "https://img.youtube.com/vi/N_Z8-HVXGGo/hqdefault.jpg",
        "authorId": 326,
        "id": 396
    },
    {
        "title": "The 2017 Bad Apple Rock Cover (Sam Luff Ver.) - Studio Yuraki",
        "description": "\u300cEnglish Cover\u300dThe Best Male Bad Apple Rock Cover That Has Ever Surfaced on The Touhou Subreddit (English and Touhou Arrangement) (Sam Luff Version)\n~Read Description~\n\nI hope you all enjoy our Bad Apple Cover! We are currently creating our very own original Bad Apple Animation for another Bad Apple Cover that will also be released onto this youtube channel soon! Thank you everyone who is supporting Studio Yuraki at it's early stage. You motivate us to continue to provide content that everyone can see. \n\nWe are an indie studio funded by one guy! Please consider supporting us on our Patreon. \n\nhttps://www.patreon.com/studioyuraki\n\nAlso be sure to check out our twitter page!\n\nhttps://twitter.com/StudioYuraki\n\nProduced By Edward Kloss\n\nPerformed/Recorded/Mixed & Mastered By Sam Luff\n\nPoster/Key Art By: Nicca\n\nEnglish Lyrics By Pat Mcarthy (Cristina Vee's Bad Apple Cover)\n\nEver on and on I continue circling\nWith nothing but my hate in a carousel of \nagony\nTill slowly I forget and my heart starts \nvanishing\nAnd suddenly I see that I can't break free-\n-I'm\nSlipping through the cracks of a dark \neternity\nWith nothing but my pain and the paralyzing \nagony\nTo tell me who I am, who I was\nUncertainty enveloping my mind\nTill I can't break free, and\n\nMaybe it's a dream; maybe nothing else is \nreal\nBut it wouldn't mean a thing if I told you \nhow I feel\nI'm so tired of all the pain, of the misery \ninside\nAnd I wish that I could live feeling \nnothing but the \nnight\nYou can tell me what to say; you can tell \nme where to \ngo\nBut I doubt that I would care, and my heart \nwould never \nknow\nIf I make another move,there'll be no more \nturning back\nBecause everything will change, and it all \nwill fade to \nblack\n\nWill tomorrow ever come? Will I make it \nthrough the \nnight?\nWill there ever be a place for the broken \nin the light?\nAm I hurting? Am I sad? Should I stay, or \nshould I go?\nI've forgotten how to tell. Did I ever even \nknow?\nCan I take another step? I've done \neverything I can\nAll the people that I see I will never \nunderstand\nIf I find a way to change, if I step into \nthe light\nThen I'll never be the same, and it all \nwill fade to \nwhite\n\nEver on and on I continue circling\nWith nothing but my hate in a carousel of \nagony\nTill slowly I forget and my heart starts \nvanishing\nAnd suddenly I see that I can't break free-\n-I'm\nSlipping through the cracks of a dark \neternity\nWith nothing but my pain and the paralyzing \nagony\nTo tell me who I am, who I was\nUncertainty enveloping my mind\nTill I can't break free, and\n\nMaybe it's a dream; maybe nothing else is \nreal\nBut it wouldn't mean a thing if I told you \nhow I feel\nI'm so tired of all the pain, of the misery \ninside\nAnd I wish that I could live feeling \nnothing but the \nnight\nYou can tell me what to say; you can tell \nme where to \ngo\nBut I doubt that I would care, and my heart \nwould never \nknow\nIf I make another move there'll be no more \nturning back\nBecause everything will change, and it all \nwill fade to \nblack\n\nIf I make another move, if I take another \nstep\nThen it all would fall apart. There'd be \nnothing of me left\nIf I'm crying in the wind, if I'm crying in \nthe night\nWill there ever be a way? Will my heart \nreturn to \nwhite?\nCan you tell me who you are? Can you tell \nme where I \nam?\nI've forgotten how to see; I've forgotten \nif I can\nIf I opened up my eyes there'd be no more \ngoing back,\nCause I'd throw it all away, and it all \nwould fade to \nblack\n\nCristina Vee Bad Apple Cover\n\nCristina Vee Bad Apple Metal Cover",
        "videoUrl": "https://www.youtube.com/watch?v=dNE9oa3pTIc",
        "previewImgUrl": "https://img.youtube.com/vi/dNE9oa3pTIc/hqdefault.jpg",
        "authorId": 348,
        "id": 397
    },
    {
        "title": "\u6b66\u6c49\u2468\u821e\u5723\u8bdeBad apple\u771f\u4eba\u5f71\u7ed8",
        "description": "\u5f9eAcFun\u6293\u904e\u4f86\u7684\u4e00\u500b\u8996\u983b\uff0c\u539f\u8996\u983b\uff1ahttp://124.228.254.229/html/ent/20101228/163374.html",
        "videoUrl": "https://www.youtube.com/watch?v=AyUP5a8aVGA",
        "previewImgUrl": "https://img.youtube.com/vi/AyUP5a8aVGA/hqdefault.jpg",
        "authorId": 349,
        "id": 398
    },
    {
        "title": "\u3010French Cover\u3011Cepheid: Goddess  \u3008Avl\u00f6nskt\u3009",
        "description": "//I accidentally deleted the old description :( if there are any inconsistencies let me know\n\n\u2605 \u2193 MY LIFE AND CREDITS \u2193 \u2605\nrip to my laranx but the adlibs sounded cool :') Huge thanks to Lizz for letting me reuse the artwork from our chorus battle cover of this song in Polish \u2665\n\nEach of us were drawn as gods which I then projected onto the ones mentioned in this song:\nThe Goddess \u2013 Lizz (I interpreted this as a separate goddess lmao)\nTellus \u2013 Kara\nLuna \u2013 Rose\nSol \u2013 Avl (me)\nVenus \u2013 Budy\u015b\n\nI hope you like it!\n\n\u2605 ORIGINAL CREDITS \u2605\n\u3009Original Song: Cepheid\n\u300b\u2013 https://youtu.be/TJrkufAAi5c \u2013\n\u3009Original Singer: Nonon\n\n\u2605 REALISATION \u2605\n\u3009Vocals, Mix, Video & English Translations: Avl\u00f6nskt\n\u3009Image/Art: Lizz\n\u300b\u2013 https://twitter.com/hold_my_pencils \u2013\n\n\u2605 LYRICS \u2605\n\u3009French Lyrics: Avl\u00f6nskt\n\n\u2605 DOWNLOAD \u2605\n\u3009MP3: \u2013 https://bit.ly/AvlFRGoddess \u2013\n\u3009A Cappella: \u2013 https://bit.ly/AvlFRGoddessACappella \u2013\n\n\u2605 OTHER MEDIA \u2605\n\u3009Ko-Fi: \u2013 https://ko-fi.com/thenightavl \u2013\n\u3009PayPal: \u2013 https://bit.ly/paypavl \u2013\n\u3009Tumblr: \u2013 https://thenightavl.tumblr.com \u2013\n\u3009Twitter: \u2013 https://twitter.com/thenightavl \u2013\n\n\u2605 DISCLAIMER \u2605\nI own nothing but my voice. The instrumental was purchased from Cepheid.",
        "videoUrl": "https://www.youtube.com/watch?v=iT1BFFqbkME",
        "previewImgUrl": "https://img.youtube.com/vi/iT1BFFqbkME/hqdefault.jpg",
        "authorId": 233,
        "id": 399
    },
    {
        "title": "Bad Apple but it's inverted",
        "description": "Bad apple but its colors are inverted... genius, am I right?\n\n\nCopyright: Touhou Project",
        "videoUrl": "https://www.youtube.com/watch?v=uHnLWMrT1zA",
        "previewImgUrl": "https://img.youtube.com/vi/uHnLWMrT1zA/hqdefault.jpg",
        "authorId": 350,
        "id": 400
    },
    {
        "title": "bad apple but beats 1 and 3 are swapped",
        "description": "how EVERYONE hears japanese\n\n\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\nTwitter \u25b6 https://twitter.com/Oxaviya\nDiscord \u25b6 https://discord.gg/mW5fmaC\nTwitch \u25b6 https://www.twitch.tv/yukiko1212\nPatreon \u25b6 https://www.patreon.com/yukiko1212",
        "videoUrl": "https://www.youtube.com/watch?v=k9-Agl-FgGs",
        "previewImgUrl": "https://img.youtube.com/vi/k9-Agl-FgGs/hqdefault.jpg",
        "authorId": 351,
        "id": 401
    },
    {
        "title": "Bad Apple but it's a Friday Night Funkin' mod.",
        "description": "i was bored and this worked ok? plus this song's a bop anyways\n\nafter DAYS of waiting you can FINALLY download this mod for yourself!: https://gamebanana.com/gamefiles/14191",
        "videoUrl": "https://www.youtube.com/watch?v=0HD7B-Offyg",
        "previewImgUrl": "https://img.youtube.com/vi/0HD7B-Offyg/hqdefault.jpg",
        "authorId": 352,
        "id": 402
    },
    {
        "title": "Bad Apple But it Never Starts",
        "description": "Due to family issues I haven't been able to record and edit a Fire Emblem video, so y'all get this instead.",
        "videoUrl": "https://www.youtube.com/watch?v=HkD4MVpxwFg",
        "previewImgUrl": "https://img.youtube.com/vi/HkD4MVpxwFg/hqdefault.jpg",
        "authorId": 353,
        "id": 403
    },
    {
        "title": "Bad Apple but it\u2019s literal",
        "description": "Flight of the Bamboo Cutter is next",
        "videoUrl": "https://www.youtube.com/watch?v=FwQ8WYI6B3w",
        "previewImgUrl": "https://img.youtube.com/vi/FwQ8WYI6B3w/hqdefault.jpg",
        "authorId": 354,
        "id": 404
    },
    {
        "title": "Bad Apple!! on cmd.exe [2:1] [60fps]",
        "description": "This is not my program, but I tried it because it wasn't so popular.",
        "videoUrl": "https://www.youtube.com/watch?v=Z8M9NUMo0CQ",
        "previewImgUrl": "https://img.youtube.com/vi/Z8M9NUMo0CQ/hqdefault.jpg",
        "authorId": 355,
        "id": 405
    },
    {
        "title": "Bad Apple!! by DS-10 Plus",
        "description": "\u5f71\u7d75\u306eBad Apple!!\u3092DS-10 \u3067\u518d\u73fe\u3057\u3066\u307f\u305f\u3002",
        "videoUrl": "https://www.youtube.com/watch?v=8I-x6ddqQ5k",
        "previewImgUrl": "https://img.youtube.com/vi/8I-x6ddqQ5k/hqdefault.jpg",
        "authorId": 356,
        "id": 406
    },
    {
        "title": "Bad Sandvich!! Final",
        "description": "Edit 14/11/2023, 7:17pm (GMT+8): 400k views! Another 100k view for 8 months!\nEdit  10/3/2023, 1:25am (GMT+8): 300k views! Another 100k view for 9 months!\nEdit   9/6/2022, 3:37pm (GMT+8): 200k views! Another 100k view for slightly more than 1 year!\nEdit 24/5/2021, 6:47pm (GMT+8): 100k views! Thank you everyone!\n\n\n\nAfter four years and I finally finish the animation, sorry for keep you guys waiting. It took me so long for finish this because initially I planning to finish my another project along side with this and then until begin of March I came to realise I need far more time to do that project. \n\nI quit my job (after save some money) and try to focus on animation since October 2015, my plan during that time is complete 80% of the another project and show a teaser after \"Bad Sanvich\" credit. I was hoping I can finish on time but until this March it is not even 15% complete (i made a lot of progress, but still the project is too massive for one person....my ambition was too big), then i realise I not need any teaser for that because I was planning to give a surprise anyway so I start to finish \"Bad Sanvich\" as I dont want to let you guys wait anymore.\n\nI change focus on this project also because I almost spend almost all my savings (I only have half year saving though). Seeing that I was not able to upload any video despite working very hard on another project, and also I need to start working afterwards so I am unable to make progress for a period, I know I have to do something.\n\nSince I upload the first version of this video I didn't expect it can will be very much positive feedback, especially for 0.5v. I am very surprised I receive positive comments from time to time, and the video view is still growing (it might be slow compare to other channel, but I was expect the video will be dead few months after upload).\n\nLast and not least I am very very appreciate everyone who watched my previous video, liked it and hoping me to finish it, every time i receive your guys' comments it would made my day. Thanks everyone, your comments is my motivation and morale boost, I am able to finish this because all of your support :) Sorry though it could be finish on last year if I am not plan to do other project and thanks again for the waiting (it was two bad years for me) but hey, I finally finished this at last\n\nHope you guys can enjoy this finished animation and if you are new to this video, WELCOME! :)\n\nWell, its almost half years since I quit my actual job and spend most of my savings, now I have to start going to work and save money again. This means that I have no much extra time to make new video for quite some time :(\n\nthanks MaDaMax  for pointing out the original Bad Apple!! original characters are belong to ZUN / Shanghai Alice\n\nI also create a Patreon account, If you want to support me, you can go to https://www.patreon.com/CrimsonFlare?ty=h\n\nIt's ok if you don't have money to support me, you can share the video among your friend and social media, it helps a lot too XD\n\nWhoo...that is very long post, hope that you understand more on my current condition, if got anything to ask, feel free comment below, see you in the next video\n\nMore project are coming (not soon) :)",
        "videoUrl": "https://www.youtube.com/watch?v=iNvYJ164KCw",
        "previewImgUrl": "https://img.youtube.com/vi/iNvYJ164KCw/hqdefault.jpg",
        "authorId": 357,
        "id": 407
    },
    {
        "title": "Bad Apple!! Minesweeper",
        "description": "Bad Apple!! Minesweeper\nBad Apple!! Buscaminas\n\nsource: sm10497113",
        "videoUrl": "https://www.youtube.com/watch?v=im-BHeo20Co",
        "previewImgUrl": "https://img.youtube.com/vi/im-BHeo20Co/hqdefault.jpg",
        "authorId": 358,
        "id": 408
    },
    {
        "title": "\u3010\u6771\u65b9\u3011Bad Apple!!\u5f71\u7d75 \u3067 \u7802\u7d75 -Bad Apple!!\u3010Stylized \"Sand\" Art\u3011-",
        "description": "aftereffect\u306e\u30c6\u30b9\u30c8\u304c\u3063\u3066\u3089\r\n \u30cb\u30b3\u30cb\u30b3\u52d5\u753b\u306e\u3010\u6771\u65b9\u3011Bad Apple!!\u5f71\u7d75\u3092\u7802\u7d75\u5316\u3057\u3066\u307f\u305f\u3002\r\n\u3010Touhou\u3011Bad Apple!!\u3000\uff30\uff36\u3010Stylized Shadow Art\u3011 meets Sand Art !\r\nBad Apple!!\u3000\uff30\uff36 \u2193\r\nhttp://www.youtube.com/watch?v=RRFAMMwJxJw",
        "videoUrl": "https://www.youtube.com/watch?v=xGk8UnnSkt4",
        "previewImgUrl": "https://img.youtube.com/vi/xGk8UnnSkt4/hqdefault.jpg",
        "authorId": 359,
        "id": 409
    },
    {
        "title": "\u3010\u5b8c\u6210\u7248\u3011Burned Apple!!\u3010\u677e\u5ca1\u4fee\u9020\u3011",
        "description": "\u30cb\u30b3\u30cb\u30b3\u304b\u3089\r\n\u30b3\u30e1\u30f3\u30c8\u4ed8\u304d\u3067\u3059",
        "videoUrl": "https://www.youtube.com/watch?v=GYHYAy0QQcw",
        "previewImgUrl": "https://img.youtube.com/vi/GYHYAy0QQcw/hqdefault.jpg",
        "authorId": 360,
        "id": 410
    },
    {
        "title": "[ytpmv] Never gonna give you a Bad apple",
        "description": "voc\u00ea foi rick rollado!!! :) https://goo.gl/FoiVEN\nTava com esse projeto desde o inicio do ano, mas tava me dando uma pregui\u00e7a de completa-lo '-.- enfim, da Nike a\u00ea seus lindos!\n\nMusicas: Never gonna give you up - rick astley / bad apple - touhou",
        "videoUrl": "https://www.youtube.com/watch?v=NUnFiBILSdQ",
        "previewImgUrl": "https://img.youtube.com/vi/NUnFiBILSdQ/hqdefault.jpg",
        "authorId": 361,
        "id": 411
    },
    {
        "title": "Siri sings Bad Apple",
        "description": "from nico nico douga http://www.nicovideo.jp/watch/sm17275419\nauthor \u304a\u3068\u306a\u30e9P\nhttp://www.voiceblog.jp/scarabee/\nhttps://twitter.com/#!/scarabee\n\nSiri Sings \"Bad Apple\"",
        "videoUrl": "https://www.youtube.com/watch?v=KqhWHFrQhOU",
        "previewImgUrl": "https://img.youtube.com/vi/KqhWHFrQhOU/hqdefault.jpg",
        "authorId": 362,
        "id": 412
    },
    {
        "title": "Atomic Bad Apple demo with SID sound",
        "description": "",
        "videoUrl": "https://www.youtube.com/watch?v=eWaXC2GskDU",
        "previewImgUrl": "https://img.youtube.com/vi/eWaXC2GskDU/hqdefault.jpg",
        "authorId": 363,
        "id": 413
    },
    {
        "title": "Atari 5200 - Bad Apple Demo",
        "description": "Bad Apple on the Atari 5200.",
        "videoUrl": "https://www.youtube.com/watch?v=a_XuHRBVYOA",
        "previewImgUrl": "https://img.youtube.com/vi/a_XuHRBVYOA/hqdefault.jpg",
        "authorId": 364,
        "id": 414
    },
    {
        "title": "Bad Apple in 80x43 Text Mode [ASCII Art Generator Demo]",
        "description": "This is a demo of my ASCII art generator called BaAA.\n\nThe generator does antialiasing by calculating brightness of the input glyphs (fonts) by dividing the each square for the glyph by 4 or 9 (configurable), and can do gamma correction and dithering. The player also supports various options such as font changing, number of greyscale (2, 4, 16), 3 dithering algorithms, monitor colour (white, green, amber), and even use of all 255 characters.\n\nThe repository for the demo can be found at: github.com/minjaesong/Ba-AA\n\nThis run of the demo faithfully emulates EGA text mode, 8x8 font size and 80x43 (cropped to 76x43 for the video) terminal size and a Sound Blaster.\n\nThe Bad Apple clip used in the demo is a real 60fps clip generated with SVP InterFrame.\n\nEdit: I've realeased version 1.1 which has performance improvement. Go check it out: github.com/minjaesong/Ba-AA",
        "videoUrl": "https://www.youtube.com/watch?v=4slG_alf4so",
        "previewImgUrl": "https://img.youtube.com/vi/4slG_alf4so/hqdefault.jpg",
        "authorId": 365,
        "id": 415
    },
    {
        "title": "Bad Apple 2 - Factor6 mp3_320_Corected AAA [#zx spectrum]",
        "description": "\u0421\u043a\u0430\u0447\u0430\u0442\u044c:  http://zxdemo.ru/viewtopic.php?id=10364\nhttp://zxaaa.net - \u0433\u043b\u0430\u0432\u043d\u044b\u0439 \u0441\u0430\u0439\u0442 \u0441 \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u044f\u043c\u0438 \u043d\u0430 Speccy!\nhttp://zxdemo.ru/ - \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0444\u043e\u0440\u0443\u043c \u0434\u043b\u044f \u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0441\u043f\u0435\u043a\u0442\u0440\u0443\u043c\u0438\u0441\u0442\u043e\u0432 \u043c\u0438\u0440\u0430.",
        "videoUrl": "https://www.youtube.com/watch?v=S4kqQmSqFxU",
        "previewImgUrl": "https://img.youtube.com/vi/S4kqQmSqFxU/hqdefault.jpg",
        "authorId": 366,
        "id": 416
    },
    {
        "title": "Bad Arnold - 1mb enhanced Amstrad CPC demo by Shining",
        "description": "Shining's CPC conversion of the Bad Apple demo for enhanced CPC.\nRequirements:\n- At least 1mb RAM expansion\n- PlayCity expansion\n- ParaDOS ROM or M4 expansion\n\nCredits:\n- Original Bad Apple to CPC footage by me (Devilmarkus)\n- Scroller-Font: BSC\n- Code, PC Converter / Cruncher / Squeezer / CPC Code: Shining\n- Music: NQ!\n\nWebpage:\nhttp://cpc.scifinet.org\n\nDownload:\nhttp://cpc-live.com/data/download.php?type=-demo&fichier=BadArnold.zip",
        "videoUrl": "https://www.youtube.com/watch?v=Xo8AzY7QZSc",
        "previewImgUrl": "https://img.youtube.com/vi/Xo8AzY7QZSc/hqdefault.jpg",
        "authorId": 367,
        "id": 417
    },
    {
        "title": "Bad Apple!! for Sega CD",
        "description": "I DID NOT MAKE THIS! \r\n\r\nAll credit for this goes to bgvanbur of Sega-16. I am only uploading it because I saw that there were no videos of it already on youtube. According to bgvanbur this uses the official Cinepak for Sega codec that many official Sega CD games use. The resolution is 256x192 and runs at 15 frames per second. The audio is in mono at 16276 Hz. \r\n\r\nThis was recorded using Kega Fusion 3.64. However it should run on real hardware.\r\n\r\nThe ISO can be found here:\r\nhttp://dl.dropbox.com/u/26821164/BADAPPLE.ISO\r\n\r\nThe thread discussing the Sega Genesis version by AnalYoGirl and later this version can be found at Sega-16 here:\r\nhttp://www.sega-16.com/forum/showthread.php?19027-Bad-Apple-demo-thread",
        "videoUrl": "https://www.youtube.com/watch?v=5XXkzX3djLE",
        "previewImgUrl": "https://img.youtube.com/vi/5XXkzX3djLE/hqdefault.jpg",
        "authorId": 368,
        "id": 418
    },
    {
        "title": "Undertale ~ Bad Apple (v.2)",
        "description": "You have no idea what I had to go through to make this. It took me forever to sync the music and the video, and when I was halfway done, Camtasia just decides to crash and doesn't let me get the project back, so I had to start over. Ugh. \nVoices used:\nToriel:  MEIKO (by EchoVoice713)\nAsgore: Akaito (by Kid4Flash)\nFlowey: Keisen Mitsu (by MaruTheArcher)\nAsriel: Kaai Yuki (by xXxWasurexXx)\nGod of Hyperdeath: Matsudappoiyo (by neeonio)\nAngel of Death: Rook (by UTAUloidSatoko)\nW.D Gaster: Tsuyoi (by Ray Rie)\nRiver person: Macsune Eku (by SynthloidUtau)\nFrisk: Kagamine Len (by RainbowJesse18)\nPapyrus: Hiyama Kiyoteru (by PrinnyDoodful)\nSans: Yuuma (by Vocalodiak)\nChara: Nagone Mako (by Dana)\nNapstablook: Kaoru Hibiki (by Hanban)\nMettaton: Rook (by UTAUloidSatoko)\nOmega/Photoshop Flowey: Hakaine Maiko (by C h a r a _,)\nTemmie: Macne Petit (by 88432311)\nMuffet: Miki (by xXxWasurexX)\nAlphys: Macne Nana (by Macne Ke)\nEndogeny: Kamui Gakupo (by Satan)\nUndyne: Luka+Lily (by totally not chloe)\n\nOriginal video: https://www.youtube.com/watch?v=OVHSozctpK8 (video used here: https://www.youtube.com/watch?v=kgGCdeV6miM)\n\nThe original song belongs to Touhou (https://www.youtube.com/watch?v=3kXx6f7qaa8) and the remix used to Alstroemeria Records (https://www.youtube.com/watch?v=UkgK8eUdpAo).",
        "videoUrl": "https://www.youtube.com/watch?v=3j2c1QouGYY",
        "previewImgUrl": "https://img.youtube.com/vi/3j2c1QouGYY/hqdefault.jpg",
        "authorId": 369,
        "id": 419
    },
    {
        "title": "Bad Apple demo running on Famiclone (Dendy)",
        "description": "Bad Apple demo",
        "videoUrl": "https://www.youtube.com/watch?v=46K_dCs1jAM",
        "previewImgUrl": "https://img.youtube.com/vi/46K_dCs1jAM/hqdefault.jpg",
        "authorId": 370,
        "id": 420
    },
    {
        "title": "Minecraft\u7d05\u77f3\u97f3\u97ff BAD APPLE(\u8a66\u4f5c\u54c1",
        "description": "",
        "videoUrl": "https://www.youtube.com/watch?v=MwV0dwBG4yU",
        "previewImgUrl": "https://img.youtube.com/vi/MwV0dwBG4yU/hqdefault.jpg",
        "authorId": 371,
        "id": 421
    },
    {
        "title": "Five Nights at Freddy's ~ Bad Apple [all animatronics] v.3 {Happy Birthday FNaF}",
        "description": "Happy birthday FNaF! ^o^\nI decided to do a special video for today, that being a Bad Apple that finally has every single animatronic that appeared in the series. I worked very hard on this, so I hope you enjoy! \nVoices used:\nFreddy: VCV 0701\nBonnie: Kamui Gakupo POWER\nChica: Kasane Teto\nFoxy: Shion Kaito\nGolden Freddy: Macsune Eku\nToy Freddy: Hiyama Kiyoteru\nToy Bonnie: Kagamine Len\nToy Chica: Sukone Tei\nMangle: Hakaine Maiko\nBalloon Boy: Kagamine Len\nJJ: Kagamine Rin\nPuppet: Kaoru Hibiki\nShadow Bonnie: Kagayaki Ryu\nShadow Freddy: Zasso Doru\nWithered Freddy: Yuuma\nWithered Bonnie: KaiKim\nWithered Chica: Mizki\nWithered Foxy: Akaito\nPhantom Freddy: Zasso Doru\nPhantom Puppet: Arashine Yoru\nPhantom Chica: Aoki Lapis\nPhantom Mangle: M\u2665lly\nPhantom Foxy: Kaito\nPhantom BB: Kagamine Len\nSpringtrap: Rakudaine Kyousho\nNightmare Freddy: Shiro Koichi\nNightmare Bonnie: Rook\nNightmare Chica: Yokune Ruko\nNightmare Foxy: Akaito\nNightmare Fredbear: Kojurou\nNightmare: Kamui Gakupo (pitched down)\nPlushtrap:  Keisen Mitsu\n\nThe original song belongs to Touhou (https://www.youtube.com/watch?v=3kXx6f7qaa8) and the remix used to Alstroemeria Records (https://www.youtube.com/watch?v=UkgK8eUdpAo).",
        "videoUrl": "https://www.youtube.com/watch?v=EctKMhjsvuY",
        "previewImgUrl": "https://img.youtube.com/vi/EctKMhjsvuY/hqdefault.jpg",
        "authorId": 369,
        "id": 422
    },
    {
        "title": "Sister Location ~ Bad Apple (v.3)",
        "description": "As much as I love the voice acting in this game, it makes it kind of difficult to find the voices since I'd rather stay true to the canon ones. Y'know, even if it's tiring, it's also fun if you get used to it :p\nVoices used:\nFuntime Foxy: Namine Ritsu (https://www.youtube.com/watch?v=eKJ4HaC7Lqg)\nBidybab: Kaai Yuki (https://www.youtube.com/watch?v=LUCPDjhHwqI)\nMinireena: Haruka Nana (https://www.youtube.com/watch?v=ClL1XmrkxPQ)\nBaby: Aoki Lapis ( https://www.youtube.com/watch?v=yfpDg8QFZzM)\nFuntime Freddy: Tai Suki (https://www.youtube.com/watch?v=X2_UnWNbqv8)\nBon-Bon: Hatsune Miku (https://www.youtube.com/watch?v=K45CK0d9US0)\nBallora: Galaco (https://www.youtube.com/watch?v=I3oizWo9czw)\nEnnard: Hakaine Maiko (https://www.youtube.com/watch?v=4gc_p_fgOHA)\n\nOn a side note, I want to just build up the hype and say that I have a halloween-y Undertale video I'm going to upload on October 31. Huh? No, I didn't say anything about an AU! ;)\n\nThe original song belongs to Touhou (https://www.youtube.com/watch?v=3kXx6f7qaa8) and the remix used to Alstroemeria Records (https://www.youtube.com/watch?v=UkgK8eUdpAo).",
        "videoUrl": "https://www.youtube.com/watch?v=lcmMYyKTwag",
        "previewImgUrl": "https://img.youtube.com/vi/lcmMYyKTwag/hqdefault.jpg",
        "authorId": 369,
        "id": 423
    },
    {
        "title": "\"Bad Pok\u00e9ball!!\" ~ Pok\u00e9mon BW \u00d7 Touhou \"Bad Apple!!\" PV parody",
        "description": "LYRICS: http://asa-turney.tumblr.com/private/52328838216/tumblr_mnzrcj2B741r7hwah\n\n...and crap my singing is terrible so WATCH WITHOUT LYRICS ON TUMBLR: http://asa-turney.tumblr.com/post/52323543990\n\n---\n\nWHAT? THIS AGAIN? ...Yes. Sorry.\n\nWhen I find a game that really affects me, that needs to be honored, I get the undying need to profess my love for it in a way that makes me feel like a true fan. Some achieve this feeling by cosplaying. Some write fanfics. ...I make Bad Apple parodies. Deal with it. BD\n\nhttp://youtube.com/watch?v=VzEUeWnV73U\nParody of the gorgeous Touhou BAD APPLE!! animation, featuring characters from the Pok\u00e9mon Black Version & White Version games (with a hint of B2 & W2 at the end).\n\n---\n\n\"Change your perspective -- and the reality changes.\"\n\n---\n\nAlternate title: \"Plasbad Apple!!\" ...Because it's bad for Team Plasma. Or Plasbad for short.\n\nBut really, \"Bad Pok\u00e9ball!!\" makes sense because according to Plasma capturing is BAD, y'know? And yet, Pok\u00e9balls are the common thread that connects just about everyone in the video. They can't be THAT bad.\n\nShadeofDespair2468 first had the idea for this crossover, and generously let me borrow it. :3 Sorry this took so long, and thank you so much for always supporting me. http://youtube.com/shadeofdespair2468\n\nAnd...she and I weren't the only ones with the idea.\nhttp://nicovideo.jp/watch/sm15713851\n...Nnngh. ...I...wasn't first.\n\n*sigh* For a FAN-artist, a PARODY-person who dwells in DERIVATIVES, I've come to realize that I have an incredibly unjustified UNIQUENESS complex. Always, my worst fear is that something I really really want to do will be done by someone else first. And it happened. And it was already really GOOD... although its goodness is NOT the reason I feel uncomfortable posting mine now. Being better or worse never mattered; it's just that in everything I do I want to feel like I'm doing it for a greater purpose. Like I'm adding something worthwhile to a fandom's collective body of work. Doing something that's already been done makes me feel like a poser... Regardless, by the time I saw it I was already far too invested to not finish my own. I changed NOTHING in my plans after seeing it, so please don't try to say I copied anything or you'll make me feel really bad. ;_;\n\nI've been working on this project for the past two years on and off, for the past two months //day and night//. Lots of procrastination BUT ALSO LOTS OF HARD EFFORT later, here it is.\n\n...So I hope all the little nudges and details in there that make mine unique get noticed...\n\nDo you like how everyone up to N's point in the video is holding a Pok\u00e9ball -- but N, the only one who truly believes in liberation, shows his empty hands?\n\nDo you like how 'N' is also cast as the one whose image shifts from white-on-black to black-on-white: fighting for ideals in Black Version, for truth in White?\n\nDo you like how when the ground-type and flying-type leaders meet, they end up -- as the lyrics say -- seeing each other's point of view (Clay taller, Skyla lower to the ground)? Incidentally, Kanako and Suwako, the characters featured in this scene in the original video, are indeed associated with the earth and the sky (though switched).\n\nDo you like how the normal-type leader and the one destined to become a normal-type leader strike the same pose?\n\n...Do you like how Zorua's tail twirls when it turns around -- askdj, I think it's cute. That verse is also my favorite because it talks about illusion & reality, themes common to Zorua/N and to Touhou.\n\n---\n\nPlaylist of all my \"Bad Apple!!\" parodies ~ http://youtube.com/playlist?list=PLWTg2MMrJQSr2TtZneDC1N6XYNHwKZ3BG\n\nAs you see, I am determined to improve with each one. The result: 1,300+ frames from Paint.NET to Windows Movie Maker. I lost count of how many times it crashed on me. But it was worth it for the smoothest, most legit, CONSTANT-MOTION animation I've ever done. ^^\n\n---\n\n~ CHARACTERS ~\n0:00 Hilbert\n0:15 Hilda\n0:29 Cheren\n0:36 Bianca\n0:43 Ghetsis\n0:50 N (...maybe)\n0:57 Fennel & Munna\n1:03 Professor Juniper\n1:11 Nurse Joy & Audino\n1:19 Emmet & Ingo\n1:25 Plasma Grunt \u2640\n1:33 Anthea & Concordia\n1:39 Zorua\n1:45 young N\n1:52 Tepig, Oshawott, Snivy\n1:59 Chili, Cilan, Cress, Lenora\n2:05 Plasma Grunt \u2642 & alas, poor Dragonite\n2:07 Burgh & Sewaddle\n2:11 Elesa\n2:14 Clay & Skyla\n2:21 Brycen\n2:27 Iris & Drayden\n2:36 Shauntal\n2:41 Grimsley\n2:49 Caitlin & it's supposed to be a Pok\u00e9 Doll\n2:55 Marshal\n3:02 Cynthia\n3:09 Alder at Celestial Tower\n3:19 Reshiram & Zekrom \n3:34 Rosa\n3:36 Nate\n\n---\n\nGuitar karaoke: http://youtube.com/watch?v=eVPRP0CiLKI\n\nI have no ownership of the original music or characters depicted.\n\n\"Bad Apple!!\" arranged by Alstroemeria Records, original by ZUN.\n\nPok\u00e9mon belong to ALL OF US... \u2665\n\n...but the series is technically property of Game Freak. No infringement intended.\n\n---\n\n\"Pok\u00e9mon will always be with you and me as we go down our own paths. Our important friends, Pok\u00e9mon...\"",
        "videoUrl": "https://www.youtube.com/watch?v=KmNNTWCmiCg",
        "previewImgUrl": "https://img.youtube.com/vi/KmNNTWCmiCg/hqdefault.jpg",
        "authorId": 372,
        "id": 424
    },
    {
        "title": "[MMD] Pokemon- Bad Apple",
        "description": "I've always wanted to make a parody of Bad Apple, but it turns out that illusions and silhouettes are hard to work with, especially with 3D models. In the end this turned out alright!\n\nI'm sorry this video is incomplete! Unfortunately the original file won't open for me now so I can't finish the rest of this song... at least I managed to save a part of it.\n\nCamera by me.\n\nCREDITS:\nMotion: https://www.youtube.com/watch?v=yO4fT0TlLB4\nStage: None, but I did have to make a movable black screen as the background\nModels: http://jakkaeront.deviantart.com/art/MMD-Pokemon-2016-Pack1-DL-643428334\nhttp://jakkaeront.deviantart.com/art/MMD-Pokemon-2016-Pack2-DL-645430882\nhttp://jakkaeront.deviantart.com/art/MMD-Pokemon-2016-Pack4-DL-648838546",
        "videoUrl": "https://www.youtube.com/watch?v=lEtO8y9rI6g",
        "previewImgUrl": "https://img.youtube.com/vi/lEtO8y9rI6g/hqdefault.jpg",
        "authorId": 373,
        "id": 425
    },
    {
        "title": "Bad Apple!! - Pokemon Black/White Soundfont",
        "description": "I really should stop doing this but I'm having too much fun.\n\nAnother product of me being completely bored. It's not the best but, it's something.",
        "videoUrl": "https://www.youtube.com/watch?v=p_4ol5y4RQA",
        "previewImgUrl": "https://img.youtube.com/vi/p_4ol5y4RQA/hqdefault.jpg",
        "authorId": 374,
        "id": 426
    },
    {
        "title": "\u3010\u624b\u63cf\u304d\u30bd\u30cb\u30c3\u30af\u3011Bad hedgehogs!!",
        "description": "Bad Apple!!\u5f71\u7d75PV\u306e\u4e00\u90e8\u30c8\u30ec\u30b9\u30d1\u30ed\u30c7\u30a3\u3067\u3059\u3002\u30cb\u30b3\u30cb\u30b3\u306b\u4e0a\u3052\u305f\u3082\u306e\u3088\u308a\u5fae\u5999\u306b\u4fee\u6b63",
        "videoUrl": "https://www.youtube.com/watch?v=u6HySJ28abA",
        "previewImgUrl": "https://img.youtube.com/vi/u6HySJ28abA/hqdefault.jpg",
        "authorId": 375,
        "id": 427
    },
    {
        "title": "Touhou \u6771\u65b9\u3000\u300cbadapple\u300d\u3000\u9ad8\u753b\u8cea",
        "description": "badapple\u00d7\u540c\u5fc3\u30a2\u30cb\u30e1\u3000\u9b54\u7406\u6c99\u591a\u3081\u3002",
        "videoUrl": "https://www.youtube.com/watch?v=uz6JNn8SiUM",
        "previewImgUrl": "https://img.youtube.com/vi/uz6JNn8SiUM/hqdefault.jpg",
        "authorId": 376,
        "id": 428
    },
    {
        "title": "Touhou - Bad Apple!! Beatbox",
        "description": "http://www.facebook.com/HIKAKIN \r\nhttp://twitter.com/HikakinBeatbox",
        "videoUrl": "https://www.youtube.com/watch?v=itZqqSUDAkI",
        "previewImgUrl": "https://img.youtube.com/vi/itZqqSUDAkI/hqdefault.jpg",
        "authorId": 377,
        "id": 429
    },
    {
        "title": "Bad Apple Mine Craft",
        "description": "\ub9c8\uc778\ud06c\ub798\ud504\ud2b8\ub85c \ubc30\ub4dc\uc560\ud50c \ucc0d\uae30! \r\n\r\n \r\n\r\n\ucd1d2244\uc7a5 \r\n\r\n \r\n\r\n\uc81c\uc791\uae30\uac04 \uc57d14\uc77c",
        "videoUrl": "https://www.youtube.com/watch?v=N-0lwkw8kwE",
        "previewImgUrl": "https://img.youtube.com/vi/N-0lwkw8kwE/hqdefault.jpg",
        "authorId": 378,
        "id": 430
    },
    {
        "title": "Bad Apple on Oscilloscope",
        "description": "The obligatory Bad Apple Animation.\nInstead of vectorizing it, variable speed line scanning is used to show it similar to its original monochome video.\n\nA Standard PC VGA port Red/Green color outputs drive the X/Y inputs of the oscilloscope. No Z (intensity) input is needed.\n\nSoftware (Modified mpv media player): https://github.com/da1l6/mpv\nProject details: https://www.warpzone.ms/wiki/projekte...",
        "videoUrl": "https://www.youtube.com/watch?v=SlMxg7NEfEI",
        "previewImgUrl": "https://img.youtube.com/vi/SlMxg7NEfEI/hqdefault.jpg",
        "authorId": 379,
        "id": 431
    },
    {
        "title": "Bad Apple!! with Star Fox Corneria Soundfont",
        "description": "The midi was sequenced by some guy called Ronald Mcdonald who you'll find by just searching for \"bad apple midi\". So if there are any problems with this video blame him because I am perfect.\nMade with Mixcraft 7.",
        "videoUrl": "https://www.youtube.com/watch?v=L0xQvJQHXNY",
        "previewImgUrl": "https://img.youtube.com/vi/L0xQvJQHXNY/hqdefault.jpg",
        "authorId": 380,
        "id": 432
    },
    {
        "title": "\"Bad Apple\" from 8088 Domination, Compaq Portable",
        "description": "\"Bad Apple\" sequence on a Compaq Portable, stock CGA, NEC V20, Aztech Sound Galaxy NX Pro 16 (SB Pro2 clone) and compact flash hard drive running XT-IDE.",
        "videoUrl": "https://www.youtube.com/watch?v=09z9YHxc0x4",
        "previewImgUrl": "https://img.youtube.com/vi/09z9YHxc0x4/hqdefault.jpg",
        "authorId": 381,
        "id": 433
    },
    {
        "title": "Touhou Bad Apple!! PV \"Screensaver Style\"\u3010\u6771\u65b9\u3011",
        "description": "An epic Bad Apple PV Shadow Art style as your Screensaver.\r\nI tested it on Windows 7 64-bit and it works out great.\r\nThis is my desktop screen as prove.\r\n\r\nDownload:\r\nhttp://www.nyaatorrents.org/?page=torrentinfo&tid=145865\r\n\r\nAlternate download: (thanks to amyvitality66 for the link)\r\nhttp://www.mediafire.com/?z9w28sdodavkir1\r\n\r\n\u3010\u6771\u65b9\u3011Bad Apple!!\u3000\uff30\uff36\u3010\u5f71\u7d75\u3011\u3092\u30b9\u30af\u30ea\u30fc\u30f3\u30bb\u30fc\u30d0\u30fc\u306b\u3057\u3066\u307f\u305f\uff1f\r\nMore info from Nico Nico Douga:\r\nhttp://www.nicovideo.jp/watch/sm11472017\r\n\r\n\r\nRecorded using HyperCam which is lame though. =3\r\n\r\nAlt tags: Bad Apple!! Lotus Land Story Stage 3 Theme Elly Shadow Art Style Screen Saver",
        "videoUrl": "https://www.youtube.com/watch?v=so64S8XAySQ",
        "previewImgUrl": "https://img.youtube.com/vi/so64S8XAySQ/hqdefault.jpg",
        "authorId": 132,
        "id": 434
    },
    {
        "title": "Bad Apple!! (3D animation version) played in DOS",
        "description": "Yeah, it's windows 98 dos mode, good enough.\n\nSpecs:\nCeleron 300A at 450MHz\n256MB ram\nGeForce 2 MX 440 64mb\n20GB HDD\nAudigy 2 ZS ( :( no dos sound atm)",
        "videoUrl": "https://www.youtube.com/watch?v=62yUJm7DRfk",
        "previewImgUrl": "https://img.youtube.com/vi/62yUJm7DRfk/hqdefault.jpg",
        "authorId": 382,
        "id": 435
    },
    {
        "title": "Bad Apple (Adlib Tracker - OPL3)",
        "description": "After months and months of barely being able to work on it, this track is finally done.....and just in time for Christmas, too. Thank goodness.\n\nThis track was a lot of fun to make. Early on, I decided to make it an exercise in using square waves for FM. Toward the end, I started adding in sawtooth waves for various things. I would say about 80% of the sounds in this track use the square or the sawtooth wave one way or the other.\n\nOPL3 for life \u2665\n\nSoundCloud:\nhttps://soundcloud.com/nab622/bad-apple-opl3\n\nDownloads:\nhttp://www.mediafire.com/folder/nme527048eg1i",
        "videoUrl": "https://www.youtube.com/watch?v=2lEPH6Y3Luo",
        "previewImgUrl": "https://img.youtube.com/vi/2lEPH6Y3Luo/hqdefault.jpg",
        "authorId": 383,
        "id": 436
    },
    {
        "title": "ASCII \"Bad Apple! Shadow Art\" on WINDOWS 1.01!",
        "description": "I got Windows 1.03 SDK from Betaarchive and made this. Win1.x don't have sound so the BGM is added in video editing.",
        "videoUrl": "https://www.youtube.com/watch?v=25vrnG40s4I",
        "previewImgUrl": "https://img.youtube.com/vi/25vrnG40s4I/hqdefault.jpg",
        "authorId": 71,
        "id": 437
    },
    {
        "title": "Bad Apple!! - Tandy 1000 RL",
        "description": "Here is Trixter's XDC conversion of \"Bad Apple!!,\" running on an 8086-based, 9.54MHz Tandy 1000 RL. A Media Vision PAS-16 is installed in the system's single ISA slot, to which the internal speaker has been connected (hence the awesome, muffled sound!).",
        "videoUrl": "https://www.youtube.com/watch?v=MkvnWidDpIM",
        "previewImgUrl": "https://img.youtube.com/vi/MkvnWidDpIM/hqdefault.jpg",
        "authorId": 384,
        "id": 438
    },
    {
        "title": "cmd.exe\u3068.txt\u30a2\u30a4\u30b3\u30f3\u3060\u3051\u3067\u3010\u6771\u65b9\u3011 Bad Apple!! PV\u3010\u5f71\u7d75\u3011",
        "description": "http://www.nicovideo.jp/watch/sm11753652",
        "videoUrl": "https://www.youtube.com/watch?v=UVAtdAhcmHc",
        "previewImgUrl": "https://img.youtube.com/vi/UVAtdAhcmHc/hqdefault.jpg",
        "authorId": 385,
        "id": 439
    },
    {
        "title": "\u3010\u5f71\u7d75\u3011Smash Brothers!!\u3010\u624b\u66f8\u304d\u30b9\u30de\u30d6\u30e9\u3011",
        "description": "Source: http://www.nicovideo.jp/watch/sm24150973?ref=search_key_spotlight\n\n\u30b9\u30de\u30d6\u30e9\u65b0\u4f5c\u767a\u58f2\u3092\u8a18\u5ff5\u3057\u3066\uff01\n\n\u521d\u4ee3\uff5e\uff38\u307e\u3067\u306e\u30ad\u30e3\u30e9\u3092\u4e2d\u5fc3\u306b\u65b0\u4f5c\u304b\u3089\u3082\u6570\u540d\u51fa\u6f14\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u52d5\u753b\u306f\u4ed6\u793e\u7d44\u306f\u629c\u3044\u3066\u3044\u307e\u3059\u306e\u3067\u3054\u4e86\u627f\u3092\u3002\n\n\u4eba\u9078\u306b\u95a2\u3057\u307e\u3057\u3066\u306f2014\u5e74\uff25\uff13\u307e\u3067\u306b\u767a\u8868\u3055\u308c\u3066\u3044\u308b\u30ad\u30e3\u30e9\u3067\u9078\u3093\u3067\u3044\u307e\u3059\u306e\u3067\u3053\u3053\u306f\u30eb\u30d5\u30ec\u306e\u65b9\u304c\u3044\u3044\u3060\u308d\uff01\u3063\u3066\u8a00\u3046\u306e\u306f\u7121\u7406\u3060\u3063\u305f\u306e\u3067\u304a\u9858\u3044\u3057\u307e\u3059\u3002\n\n\u5f8c\u3001\u30aa\u30ea\u30de\u30fc\u306a\u3069\u306e\u7b49\u8eab\u306f\u8a31\u3057\u3066\u4e0b\u3055\u3044\u2026\u7121\u7406\u3060\u3063\u305f\u3093\u3060\u2026\u3000\n\n\u6700\u5f8c\u306b\u3001\u3054\u672c\u5bb6\u306e\u5f71\u7d75\uff30\uff36\u52d5\u753b\u306b\uff5e\u304b\u3089\u30b3\u30e1\u30f3\u30c8\u306f\u3057\u306a\u3044\u3088\u3046\u306b\u304a\u9858\u3044\u3057\u307e\u3059\uff01",
        "videoUrl": "https://www.youtube.com/watch?v=dd7rGxY5j3M",
        "previewImgUrl": "https://img.youtube.com/vi/dd7rGxY5j3M/hqdefault.jpg",
        "authorId": 386,
        "id": 440
    },
    {
        "title": "[Bad Apple!! x SSB] Smash Apple!! (Discontinued)",
        "description": "This is not 3D. This is hand-drawn 2D. Yes, this was all done with a mouse. Yes, I did end up drawing all 1,632 frames you see here.\n\nThis was a little project I've started about 5 months ago. I've decided to discontinue it because of how much work it is. XD\n\nSo, here's my progress! (^__^)\n\nPrograms used: Adobe Photoshop CS5 and Sony Movie Studio 12\nSong used: Bad Apple!!(Cover by Draw the Emotional)",
        "videoUrl": "https://www.youtube.com/watch?v=G0olVA8PHjM",
        "previewImgUrl": "https://img.youtube.com/vi/G0olVA8PHjM/hqdefault.jpg",
        "authorId": 320,
        "id": 441
    },
    {
        "title": "[HQ] Touhou - Bad Apple!! [\uff30\uff36] (Monochrome)",
        "description": "HQ Version http://www.youtube.com/watch?v=8HlFf-pPQUE&fmt=18\r\n\r\nOriginal Video http://www.nicovideo.jp/watch/nm8800635",
        "videoUrl": "https://www.youtube.com/watch?v=8HlFf-pPQUE",
        "previewImgUrl": "https://img.youtube.com/vi/8HlFf-pPQUE/hqdefault.jpg",
        "authorId": 387,
        "id": 442
    },
    {
        "title": "Bad Apple!! but it's in Minecraft Blocks",
        "description": "Bad Apple!! - a Touhou video recreated with Minecraft blocks and note blocks. I guess you could call it a Minecraft stop motion animation.\n\nMore information is available below! Read the full description :)\n\nNote block song (+ song download) - https://www.youtube.com/watch?v=3Sf064dkVeY\n\n* There are 6585 frames in this video, it runs at 30 frames per second.\n* Each frame is 256x144 blocks. So, a single frame is made out of 36864 Minecraft blocks. And all of the frames combined are made out of 242,749,440 blocks. That's right, almost 243 million blocks were used to make this video.\n* I originally had plans to render and upload this in 4K resolution, but my computer is not able to handle it :(. So instead, here's a 4K picture for you ;) - http://i.imgur.com/u7j1xKW.png\nIf you zoom in, you'll be able to see the blocks clearly.\n* The audio is a little bit out of sync in a few parts, sorry!\n* The frames were created with the help of Spritecraft - http://www.diamondpants.com/spritecraft/\n* The note block song was created with the help of Note Block Studio - http://www.stuffbydavid.com/mcnbs\n\n\nInfo about original:\n\nArrangement by Masayoshi Minoshima. Lyrics by Haruka. Vocal by Nomico.\n\nOriginal video: http://nicovideo.jp/watch/sm8628149\n\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\nSocial:\nTwitter - http://www.twitter.com/NiceMarkMC\nGoogle+ - http://www.google.com/+NiceMarkMC\n\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\nDonate - http://bit.ly/DonateNiceMarkMC\n\nMake sure to leave a rating & a comment! Subscribe for more videos :-)\n\nIf you recently subscribed, make sure you tick the \"Send me updates\" box so you don't miss any new videos from me! - https://www.youtube.com/subscription_manager?q=NiceMarkMC",
        "videoUrl": "https://www.youtube.com/watch?v=i1udDC-XLCQ",
        "previewImgUrl": "https://img.youtube.com/vi/i1udDC-XLCQ/hqdefault.jpg",
        "authorId": 388,
        "id": 443
    },
    {
        "title": "BadApple PV ASCII Under MS Word 6.0 for Mac",
        "description": "Another port of my WordBasic auto page importer and flipper. This time the flip speed is unstable, so I can't ensure the picture is always in sync with the audio (added at video editing). I used Basilisk II emulater to run this because I no longer possess a Mac that runs 68k Mac software fast.",
        "videoUrl": "https://www.youtube.com/watch?v=x6aGOUvfKtU",
        "previewImgUrl": "https://img.youtube.com/vi/x6aGOUvfKtU/hqdefault.jpg",
        "authorId": 71,
        "id": 444
    },
    {
        "title": "Bad Mario (SMW custom level)",
        "description": "A level I'm working on. Also thanks to Vitor Vilela, who taught me switching player palettes via ASM.",
        "videoUrl": "https://www.youtube.com/watch?v=gnEWqmlu8x4",
        "previewImgUrl": "https://img.youtube.com/vi/gnEWqmlu8x4/hqdefault.jpg",
        "authorId": 389,
        "id": 445
    },
    {
        "title": "Bad Apple [Garageband]",
        "description": "An arrangement of Bad Apple from Touhou that I made on Garageband. I'm not even a fan of the series, I just love the music.",
        "videoUrl": "https://www.youtube.com/watch?v=PAYIJF7Rdck",
        "previewImgUrl": "https://img.youtube.com/vi/PAYIJF7Rdck/hqdefault.jpg",
        "authorId": 390,
        "id": 446
    },
    {
        "title": "Bad Apple!! but it's AI Generated",
        "description": "Not mine but a friend of mine shared it and i havent found a full version of it yet on YouTube, needed to bless everyone eyes.\nI believe all of the proper credits are at the end so look at that if you are interested on who or how was it made. I'm just the messenger CX",
        "videoUrl": "https://www.youtube.com/watch?v=RO7TYfMyPPw",
        "previewImgUrl": "https://img.youtube.com/vi/RO7TYfMyPPw/hqdefault.jpg",
        "authorId": 391,
        "id": 447
    },
    {
        "title": "Bad Apple Japanese Folk Instrument Remix",
        "description": "Idk I was playing around with a midi file and still needed to upload something while writing my #nanowrimo novel\n\nMidi source: https://gamebanana.com/projects/35370",
        "videoUrl": "https://www.youtube.com/watch?v=EohWXirchMo",
        "previewImgUrl": "https://img.youtube.com/vi/EohWXirchMo/hqdefault.jpg",
        "authorId": 392,
        "id": 448
    },
    {
        "title": "Bad Apple but its on a Chinese Yoyo/Diabolo",
        "description": "Used a Persistence of Vision display built inside a Chinese Yoyo/Diabolo to show Bad Apple. A year late to the meme but here ya go",
        "videoUrl": "https://www.youtube.com/watch?v=-Pc6q_C_2IU",
        "previewImgUrl": "https://img.youtube.com/vi/-Pc6q_C_2IU/hqdefault.jpg",
        "authorId": 393,
        "id": 449
    },
    {
        "title": "Bad Apple!!s Among Us",
        "description": "Sources:\n\nDumpy: https://twitter.com/ScreechyAurora/status/1308164017408663552\nBad Apple: https://www.youtube.com/watch?v=FtutLA63Cp8\n\n\n\n-----------\n\nBad Apple in a Quadtree like structure played on that one Among Us gif\n\n\n\n\nUnusable code: https://github.com/snailcon/QuadtreeAmogufier",
        "videoUrl": "https://www.youtube.com/watch?v=UbaBI-XxGbo",
        "previewImgUrl": "https://img.youtube.com/vi/UbaBI-XxGbo/hqdefault.jpg",
        "authorId": 394,
        "id": 450
    }
];

  const authors = await Promise.all(
    authorsData.map((author) =>
      prisma.author.upsert({
        where: { id: author.id },
        update: { id: author.id, name: author.name, url: author.url},
        create: author,
      })
    )
  );

  const items = await Promise.all(
    itemsData.map((item) =>
      prisma.item.upsert({
        where: { id: item.id },
        update: item,
        create: item,
      })
    )
  );

  // console.log({ authors, items });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
