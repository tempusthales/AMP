# [Stormfront](https://store.steampowered.com/app/573090/Stormworks_Build_and_Rescue) Game Module for AMP

This is WIP.  More coming soon(tm).

## Server settings

Server data parameters are pretty much understandable but I'll leave a note for some of them:

## Server settings

Server data parameters are pretty much understandable but I'll leave a note for some of them:

| Name                    | Description                                                  |
| ----------------------- | ------------------------------------------------------------ |
| port="25564"            | sets the game and query ports that will be used for the server |
| name="Stormworks"       | set the name of the server                                   |
| save_name=""            | set the world save name that will be used for save and loading |
| max_players="32"        | set the max number of the players for server                 |
| password=""             | set the password (empty means no password)                   |
| physics_timestep="180"  | change physics resolution, 0 is auto by default (acceptable values are 60, 120, 180) |
| wildlife_enabled="true" | enables birds and fish simulation                            |
| fish_spawn_rate="1"     | rate of fish spawn around players, requires wildlife_enabled (acceptable values are 0, 1, 2, 3) |

World settings are only used when you start a new game (i.e. set empty save_name) which means changing these settings will not change already created saves:

| Name                  | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| seed=""               | set the seed that will be used for the world generation (empty is random) |
| day_night_length="60" | set the length of the day in minutes                         |
| settings_menu="true"  | enable/disable custom settings menu (available only for admins if locked) |
| base_island=""        | set what player base will be owned on start (empty is start base) |
| dlc_weapons="true"    | enable/disable weapons for new world                         |

In other words, if you created a game with disabled weapons DLC then you will need either create a new world or edit scene.xml of an already created world to change that parameter.

### List of bases to put in your config

Custom Bases

| Main Biome Path                           | Biome Name        |
| ----------------------------------------- | ----------------- |
| data/tiles/island_15.xml                  | Creative Island   |
| data/tiles/island_43_multiplayer_base.xml | Multiplayer Base  |
| data/tiles/island_34_military.xml         | Military Base     |
| data/tiles/island_25.xml                  | Harbour Base      |
| data/tiles/island12.xml                   | Starter Base      |
| data/tiles/test_tile.xml                  | Helicopter Base   |
| data/tiles/island_24.xml                  | Airstrip Base     |
| data/tiles/island_33_tile_33.xml          | Mainland Airstrip |
| data/tiles/island_33_tile_32.xml          | Terminal Spycakes |
| data/tiles/island_33_tile_end.xml         | Terminal Camodo   |

Arctic Islands

| Main Biome Path                         | Biome Name              |
| --------------------------------------- | ----------------------- |
| data/tiles/arctic_island_playerbase.xml | Arctic Mainland Outpost |
| data/tiles/arctic_tile_22.xml           | Arctic Island Base      |
| data/tiles/arctic_tile_12_oilrig.xml    | Arctic Oil Platform     |

Sawyer Islands

| Main Biome Path                 | Biome Name           |
| ------------------------------- | -------------------- |
| data/tiles/mega_island_2_6.xml  | Harrison Airbase     |
| data/tiles/mega_island_12_6.xml | O'Neill Airbase      |
| data/tiles/mega_island_9_8.xml  | North Harbor Dock    |
| data/tiles/mega_island_15_2.xml | Fishing Village Dock |

