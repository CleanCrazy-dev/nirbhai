import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";

import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';

import { AngularMaterialModule } from '../angular-material.module';

import { AreaRoutingModule } from './area-routing.module';
import { ComponentsModule } from '../components/components.module';

import { TownsComponent } from './creb/towns/towns.component';
import { CalgaryComponent } from './creb/cities/calgary/calgary.component';
import { AirdrieComponent } from './creb/cities/airdrie/airdrie.component';
import { ChestermereComponent } from './creb/cities/chestermere/chestermere.component';
import { OtherCityTownsComponent } from './creb/cities/other-city-towns/other-city-towns.component';
import { MetaComponent } from './creb/shared-components/meta/meta.component';
import { CommunityListViewComponent } from './creb/shared-components/community-list-view/community-list-view.component';
import { TopContentComponent } from './creb/shared-components/top-content/top-content.component';
import { ListViewComponent } from './creb/shared-components/list-view/list-view.component';
import { BottomContentComponent } from './creb/shared-components/bottom-content/bottom-content.component';
import { CalgaryNeComponent } from './creb/cities/calgary/districts/calgary-ne/calgary-ne.component';
import { CalgaryNwComponent } from './creb/cities/calgary/districts/calgary-nw/calgary-nw.component';
import { CalgarySeComponent } from './creb/cities/calgary/districts/calgary-se/calgary-se.component';
import { CalgarySwComponent } from './creb/cities/calgary/districts/calgary-sw/calgary-sw.component';
import { CalgarySComponent } from './creb/cities/calgary/districts/calgary-s/calgary-s.component';
import { CalgaryNComponent } from './creb/cities/calgary/districts/calgary-n/calgary-n.component';
import { CalgaryEComponent } from './creb/cities/calgary/districts/calgary-e/calgary-e.component';
import { CalgaryWComponent } from './creb/cities/calgary/districts/calgary-w/calgary-w.component';
import { AbbeydaleComponent } from './creb/cities/calgary/districts/calgary-ne/abbeydale/abbeydale.component';
import { CalgaryInternationalAirportComponent } from './creb/cities/calgary/districts/calgary-ne/calgary-international-airport/calgary-international-airport.component';
import { CastleridgeComponent } from './creb/cities/calgary/districts/calgary-ne/castleridge/castleridge.component';
import { CityscapeComponent } from './creb/cities/calgary/districts/calgary-ne/cityscape/cityscape.component';
import { CoralSpringsComponent } from './creb/cities/calgary/districts/calgary-ne/coral-springs/coral-springs.component';
import { CornerstoneComponent } from './creb/cities/calgary/districts/calgary-ne/cornerstone/cornerstone.component';
import { DeerfootBusinessCentreComponent } from './creb/cities/calgary/districts/calgary-ne/deerfoot-business-centre/deerfoot-business-centre.component';
import { FalconridgeComponent } from './creb/cities/calgary/districts/calgary-ne/falconridge/falconridge.component';
import { FranklinComponent } from './creb/cities/calgary/districts/calgary-ne/franklin/franklin.component';
import { GreenviewIndustrialParkComponent } from './creb/cities/calgary/districts/calgary-ne/greenview-industrial-park/greenview-industrial-park.component';
import { HorizonComponent } from './creb/cities/calgary/districts/calgary-ne/horizon/horizon.component';
import { MarlboroughComponent } from './creb/cities/calgary/districts/calgary-ne/marlborough/marlborough.component';
import { MarlboroughParkComponent } from './creb/cities/calgary/districts/calgary-ne/marlborough-park/marlborough-park.component';
import { MartindaleComponent } from './creb/cities/calgary/districts/calgary-ne/martindale/martindale.component';
import { MaylandComponent } from './creb/cities/calgary/districts/calgary-ne/mayland/mayland.component';
import { MaylandHeightsComponent } from './creb/cities/calgary/districts/calgary-ne/mayland-heights/mayland-heights.component';
import { McCallComponent } from './creb/cities/calgary/districts/calgary-ne/mc-call/mc-call.component';
import { MeridianComponent } from './creb/cities/calgary/districts/calgary-ne/meridian/meridian.component';
import { MontereyParkComponent } from './creb/cities/calgary/districts/calgary-ne/monterey-park/monterey-park.component';
import { NorthAirwaysComponent } from './creb/cities/calgary/districts/calgary-ne/north-airways/north-airways.component';
import { PegasusComponent } from './creb/cities/calgary/districts/calgary-ne/pegasus/pegasus.component';
import { PineridgeComponent } from './creb/cities/calgary/districts/calgary-ne/pineridge/pineridge.component';
import { RedstoneComponent } from './creb/cities/calgary/districts/calgary-ne/redstone/redstone.component';
import { RundleComponent } from './creb/cities/calgary/districts/calgary-ne/rundle/rundle.component';
import { SaddleRidgeComponent } from './creb/cities/calgary/districts/calgary-ne/saddle-ridge/saddle-ridge.component';
import { SaddleridgeIndustrialComponent } from './creb/cities/calgary/districts/calgary-ne/saddleridge-industrial/saddleridge-industrial.component';
import { SkyviewRanchComponent } from './creb/cities/calgary/districts/calgary-ne/skyview-ranch/skyview-ranch.component';
import { SouthAirwaysComponent } from './creb/cities/calgary/districts/calgary-ne/south-airways/south-airways.component';
import { StonegateLandingComponent } from './creb/cities/calgary/districts/calgary-ne/stonegate-landing/stonegate-landing.component';
import { Stoney3Component } from './creb/cities/calgary/districts/calgary-ne/stoney3/stoney3.component';
import { SunridgeComponent } from './creb/cities/calgary/districts/calgary-ne/sunridge/sunridge.component';
import { TaradaleComponent } from './creb/cities/calgary/districts/calgary-ne/taradale/taradale.component';
import { TempleComponent } from './creb/cities/calgary/districts/calgary-ne/temple/temple.component';
import { VistaHeightsComponent } from './creb/cities/calgary/districts/calgary-ne/vista-heights/vista-heights.component';
import { WestwindsComponent } from './creb/cities/calgary/districts/calgary-ne/westwinds/westwinds.component';
import { WhitehornComponent } from './creb/cities/calgary/districts/calgary-ne/whitehorn/whitehorn.component';
import { ArbourLakeComponent } from './creb/cities/calgary/districts/calgary-nw/arbour-lake/arbour-lake.component';
import { BownessComponent } from './creb/cities/calgary/districts/calgary-nw/bowness/bowness.component';
import { BrentwoodComponent } from './creb/cities/calgary/districts/calgary-nw/brentwood/brentwood.component';
import { CharleswoodComponent } from './creb/cities/calgary/districts/calgary-nw/charleswood/charleswood.component';
import { CitadelComponent } from './creb/cities/calgary/districts/calgary-nw/citadel/citadel.component';
import { CollingwoodComponent } from './creb/cities/calgary/districts/calgary-nw/collingwood/collingwood.component';
import { DalhousieComponent } from './creb/cities/calgary/districts/calgary-nw/dalhousie/dalhousie.component';
import { EdgemontComponent } from './creb/cities/calgary/districts/calgary-nw/edgemont/edgemont.component';
import { GreenwoodGreenbriarComponent } from './creb/cities/calgary/districts/calgary-nw/greenwood-greenbriar/greenwood-greenbriar.component';
import { HamptonsComponent } from './creb/cities/calgary/districts/calgary-nw/hamptons/hamptons.component';
import { HawkwoodComponent } from './creb/cities/calgary/districts/calgary-nw/hawkwood/hawkwood.component';
import { MontgomeryComponent } from './creb/cities/calgary/districts/calgary-nw/montgomery/montgomery.component';
import { RanchlandsComponent } from './creb/cities/calgary/districts/calgary-nw/ranchlands/ranchlands.component';
import { RockyRidgeComponent } from './creb/cities/calgary/districts/calgary-nw/rocky-ridge/rocky-ridge.component';
import { RoyalOakComponent } from './creb/cities/calgary/districts/calgary-nw/royal-oak/royal-oak.component';
import { RoyalVistaComponent } from './creb/cities/calgary/districts/calgary-nw/royal-vista/royal-vista.component';
import { ScenicAcresComponent } from './creb/cities/calgary/districts/calgary-nw/scenic-acres/scenic-acres.component';
import { SilverSpringsComponent } from './creb/cities/calgary/districts/calgary-nw/silver-springs/silver-springs.component';
import { TuscanyComponent } from './creb/cities/calgary/districts/calgary-nw/tuscany/tuscany.component';
import { UniversityDistrictComponent } from './creb/cities/calgary/districts/calgary-nw/university-district/university-district.component';
import { UniversityHeightsComponent } from './creb/cities/calgary/districts/calgary-nw/university-heights/university-heights.component';
import { VarsityComponent } from './creb/cities/calgary/districts/calgary-nw/varsity/varsity.component';
import { AuburnBayComponent } from './creb/cities/calgary/districts/calgary-se/auburn-bay/auburn-bay.component';
import { CopperfieldComponent } from './creb/cities/calgary/districts/calgary-se/copperfield/copperfield.component';
import { CranstonComponent } from './creb/cities/calgary/districts/calgary-se/cranston/cranston.component';
import { DouglasdaleGlenComponent } from './creb/cities/calgary/districts/calgary-se/douglasdale-glen/douglasdale-glen.component';
import { EastShepardIndustrialComponent } from './creb/cities/calgary/districts/calgary-se/east-shepard-industrial/east-shepard-industrial.component';
import { MahoganyComponent } from './creb/cities/calgary/districts/calgary-se/mahogany/mahogany.component';
import { McKenzieLakeComponent } from './creb/cities/calgary/districts/calgary-se/mc-kenzie-lake/mc-kenzie-lake.component';
import { McKenzieTowneComponent } from './creb/cities/calgary/districts/calgary-se/mc-kenzie-towne/mc-kenzie-towne.component';
import { NewBrightonComponent } from './creb/cities/calgary/districts/calgary-se/new-brighton/new-brighton.component';
import { OgdenComponent } from './creb/cities/calgary/districts/calgary-se/ogden/ogden.component';
import { RiverbendComponent } from './creb/cities/calgary/districts/calgary-se/riverbend/riverbend.component';
import { SetonComponent } from './creb/cities/calgary/districts/calgary-se/seton/seton.component';
import { ShepardIndustrialComponent } from './creb/cities/calgary/districts/calgary-se/shepard-industrial/shepard-industrial.component';
import { SouthFoothillsComponent } from './creb/cities/calgary/districts/calgary-se/south-foothills/south-foothills.component';
import { BeddingtonHeightsComponent } from './creb/cities/calgary/districts/calgary-n/beddington-heights/beddington-heights.component';
import { CarringtonComponent } from './creb/cities/calgary/districts/calgary-n/carrington/carrington.component';
import { CountryHillsComponent } from './creb/cities/calgary/districts/calgary-n/country-hills/country-hills.component';
import { CountryHillsVillageComponent } from './creb/cities/calgary/districts/calgary-n/country-hills-village/country-hills-village.component';
import { CoventryHillsComponent } from './creb/cities/calgary/districts/calgary-n/coventry-hills/coventry-hills.component';
import { EvanstonComponent } from './creb/cities/calgary/districts/calgary-n/evanston/evanston.component';
import { HarvestHillsComponent } from './creb/cities/calgary/districts/calgary-n/harvest-hills/harvest-hills.component';
import { HiddenValleyComponent } from './creb/cities/calgary/districts/calgary-n/hidden-valley/hidden-valley.component';
import { HuntingtonHillsComponent } from './creb/cities/calgary/districts/calgary-n/huntington-hills/huntington-hills.component';
import { KincoraComponent } from './creb/cities/calgary/districts/calgary-n/kincora/kincora.component';
import { LivingstonComponent } from './creb/cities/calgary/districts/calgary-n/livingston/livingston.component';
import { MacEwanGlenComponent } from './creb/cities/calgary/districts/calgary-n/mac-ewan-glen/mac-ewan-glen.component';
import { NolanHillComponent } from './creb/cities/calgary/districts/calgary-n/nolan-hill/nolan-hill.component';
import { NorthHavenComponent } from './creb/cities/calgary/districts/calgary-n/north-haven/north-haven.component';
import { NorthHavenUpperComponent } from './creb/cities/calgary/districts/calgary-n/north-haven-upper/north-haven-upper.component';
import { PanoramaHillsComponent } from './creb/cities/calgary/districts/calgary-n/panorama-hills/panorama-hills.component';
import { SageHillComponent } from './creb/cities/calgary/districts/calgary-n/sage-hill/sage-hill.component';
import { SandstoneValleyComponent } from './creb/cities/calgary/districts/calgary-n/sandstone-valley/sandstone-valley.component';
import { SherwoodComponent } from './creb/cities/calgary/districts/calgary-n/sherwood/sherwood.component';
import { SkylineWestComponent } from './creb/cities/calgary/districts/calgary-n/skyline-west/skyline-west.component';
import { ThorncliffeComponent } from './creb/cities/calgary/districts/calgary-n/thorncliffe/thorncliffe.component';
import { AlbertParkRadissonHeightsComponent } from './creb/cities/calgary/districts/calgary-e/albert-park-radisson-heights/albert-park-radisson-heights.component';
import { ApplewoodParkComponent } from './creb/cities/calgary/districts/calgary-e/applewood-park/applewood-park.component';
import { BelvedereComponent } from './creb/cities/calgary/districts/calgary-e/belvedere/belvedere.component';
import { DoverComponent } from './creb/cities/calgary/districts/calgary-e/dover/dover.component';
import { EastfieldComponent } from './creb/cities/calgary/districts/calgary-e/eastfield/eastfield.component';
import { ErinWoodsComponent } from './creb/cities/calgary/districts/calgary-e/erin-woods/erin-woods.component';
import { FoothillsComponent } from './creb/cities/calgary/districts/calgary-e/foothills/foothills.component';
import { ForestHeightsComponent } from './creb/cities/calgary/districts/calgary-e/forest-heights/forest-heights.component';
import { ForestLawnComponent } from './creb/cities/calgary/districts/calgary-e/forest-lawn/forest-lawn.component';
import { ForestLawnIndustrialComponent } from './creb/cities/calgary/districts/calgary-e/forest-lawn-industrial/forest-lawn-industrial.component';
import { GoldenTriangleComponent } from './creb/cities/calgary/districts/calgary-e/golden-triangle/golden-triangle.component';
import { GreatPlainsComponent } from './creb/cities/calgary/districts/calgary-e/great-plains/great-plains.component';
import { PenbrookeMeadowsComponent } from './creb/cities/calgary/districts/calgary-e/penbrooke-meadows/penbrooke-meadows.component';
import { RedCarpetComponent } from './creb/cities/calgary/districts/calgary-e/red-carpet/red-carpet.component';
import { SouthviewComponent } from './creb/cities/calgary/districts/calgary-e/southview/southview.component';
import { StarfieldComponent } from './creb/cities/calgary/districts/calgary-e/starfield/starfield.component';
import { ValleyfieldComponent } from './creb/cities/calgary/districts/calgary-e/valleyfield/valleyfield.component';
import { AcadiaComponent } from './creb/cities/calgary/districts/calgary-s/acadia/acadia.component';
import { BayviewComponent } from './creb/cities/calgary/districts/calgary-s/bayview/bayview.component';
import { BonavistaDownsComponent } from './creb/cities/calgary/districts/calgary-s/bonavista-downs/bonavista-downs.component';
import { BraesideComponent } from './creb/cities/calgary/districts/calgary-s/braeside/braeside.component';
import { BridlewoodComponent } from './creb/cities/calgary/districts/calgary-s/bridlewood/bridlewood.component';
import { CanyonMeadowsComponent } from './creb/cities/calgary/districts/calgary-s/canyon-meadows/canyon-meadows.component';
import { CedarbraeComponent } from './creb/cities/calgary/districts/calgary-s/cedarbrae/cedarbrae.component';
import { ChaparralComponent } from './creb/cities/calgary/districts/calgary-s/chaparral/chaparral.component';
import { ChinookParkComponent } from './creb/cities/calgary/districts/calgary-s/chinook-park/chinook-park.component';
import { DeerRidgeComponent } from './creb/cities/calgary/districts/calgary-s/deer-ridge/deer-ridge.component';
import { DeerRunComponent } from './creb/cities/calgary/districts/calgary-s/deer-run/deer-run.component';
import { EagleRidgeComponent } from './creb/cities/calgary/districts/calgary-s/eagle-ridge/eagle-ridge.component';
import { EastFairviewIndustrialComponent } from './creb/cities/calgary/districts/calgary-s/east-fairview-industrial/east-fairview-industrial.component';
import { EvergreenComponent } from './creb/cities/calgary/districts/calgary-s/evergreen/evergreen.component';
import { FairviewComponent } from './creb/cities/calgary/districts/calgary-s/fairview/fairview.component';
import { FairviewIndustrialComponent } from './creb/cities/calgary/districts/calgary-s/fairview-industrial/fairview-industrial.component';
import { HaysboroComponent } from './creb/cities/calgary/districts/calgary-s/haysboro/haysboro.component';
import { KelvinGroveComponent } from './creb/cities/calgary/districts/calgary-s/kelvin-grove/kelvin-grove.component';
import { KingslandComponent } from './creb/cities/calgary/districts/calgary-s/kingsland/kingsland.component';
import { LakeBonavistaComponent } from './creb/cities/calgary/districts/calgary-s/lake-bonavista/lake-bonavista.component';
import { LegacyComponent } from './creb/cities/calgary/districts/calgary-s/legacy/legacy.component';
import { MapleRidgeComponent } from './creb/cities/calgary/districts/calgary-s/maple-ridge/maple-ridge.component';
import { MidnaporeComponent } from './creb/cities/calgary/districts/calgary-s/midnapore/midnapore.component';
import { MillriseComponent } from './creb/cities/calgary/districts/calgary-s/millrise/millrise.component';
import { OakridgeComponent } from './creb/cities/calgary/districts/calgary-s/oakridge/oakridge.component';
import { OutofAreaCalgaryComponent } from './creb/cities/calgary/districts/calgary-s/outof-area-calgary/outof-area-calgary.component';
import { PalliserComponent } from './creb/cities/calgary/districts/calgary-s/palliser/palliser.component';
import { ParklandComponent } from './creb/cities/calgary/districts/calgary-s/parkland/parkland.component';
import { PineCreekComponent } from './creb/cities/calgary/districts/calgary-s/pine-creek/pine-creek.component';
import { PumpHillComponent } from './creb/cities/calgary/districts/calgary-s/pump-hill/pump-hill.component';
import { QueenslandComponent } from './creb/cities/calgary/districts/calgary-s/queensland/queensland.component';
import { ShawneeSlopesComponent } from './creb/cities/calgary/districts/calgary-s/shawnee-slopes/shawnee-slopes.component';
import { ShawnessyComponent } from './creb/cities/calgary/districts/calgary-s/shawnessy/shawnessy.component';
import { SilveradoComponent } from './creb/cities/calgary/districts/calgary-s/silverado/silverado.component';
import { SomersetComponent } from './creb/cities/calgary/districts/calgary-s/somerset/somerset.component';
import { SouthwoodComponent } from './creb/cities/calgary/districts/calgary-s/southwood/southwood.component';
import { SundanceComponent } from './creb/cities/calgary/districts/calgary-s/sundance/sundance.component';
import { WaldenComponent } from './creb/cities/calgary/districts/calgary-s/walden/walden.component';
import { WillowParkComponent } from './creb/cities/calgary/districts/calgary-s/willow-park/willow-park.component';
import { WoodbineComponent } from './creb/cities/calgary/districts/calgary-s/woodbine/woodbine.component';
import { WoodlandsComponent } from './creb/cities/calgary/districts/calgary-s/woodlands/woodlands.component';
import { AspenWoodsComponent } from './creb/cities/calgary/districts/calgary-w/aspen-woods/aspen-woods.component';
import { ChristieParkComponent } from './creb/cities/calgary/districts/calgary-w/christie-park/christie-park.component';
import { CoachHillComponent } from './creb/cities/calgary/districts/calgary-w/coach-hill/coach-hill.component';
import { CougarRidgeComponent } from './creb/cities/calgary/districts/calgary-w/cougar-ridge/cougar-ridge.component';
import { CrestmontComponent } from './creb/cities/calgary/districts/calgary-w/crestmont/crestmont.component';
import { CurrieBarracksComponent } from './creb/cities/calgary/districts/calgary-w/currie-barracks/currie-barracks.component';
import { DiscoveryRidgeComponent } from './creb/cities/calgary/districts/calgary-w/discovery-ridge/discovery-ridge.component';
import { GarrisonGreenComponent } from './creb/cities/calgary/districts/calgary-w/garrison-green/garrison-green.component';
import { GlamorganComponent } from './creb/cities/calgary/districts/calgary-w/glamorgan/glamorgan.component';
import { GlenbrookComponent } from './creb/cities/calgary/districts/calgary-w/glenbrook/glenbrook.component';
import { GlendaleComponent } from './creb/cities/calgary/districts/calgary-w/glendale/glendale.component';
import { LakeviewComponent } from './creb/cities/calgary/districts/calgary-w/lakeview/lakeview.component';
import { LincolnParkComponent } from './creb/cities/calgary/districts/calgary-w/lincoln-park/lincoln-park.component';
import { NorthGlenmoreParkComponent } from './creb/cities/calgary/districts/calgary-w/north-glenmore-park/north-glenmore-park.component';
import { PattersonComponent } from './creb/cities/calgary/districts/calgary-w/patterson/patterson.component';
import { RosscarrockComponent } from './creb/cities/calgary/districts/calgary-w/rosscarrock/rosscarrock.component';
import { RutlandParkComponent } from './creb/cities/calgary/districts/calgary-w/rutland-park/rutland-park.component';
import { SignalHillComponent } from './creb/cities/calgary/districts/calgary-w/signal-hill/signal-hill.component';
import { SpringbankHillComponent } from './creb/cities/calgary/districts/calgary-w/springbank-hill/springbank-hill.component';
import { SpruceCliffComponent } from './creb/cities/calgary/districts/calgary-w/spruce-cliff/spruce-cliff.component';
import { StrathconaParkComponent } from './creb/cities/calgary/districts/calgary-w/strathcona-park/strathcona-park.component';
import { ValleyRidgeComponent } from './creb/cities/calgary/districts/calgary-w/valley-ridge/valley-ridge.component';
import { WestSpringsComponent } from './creb/cities/calgary/districts/calgary-w/west-springs/west-springs.component';
import { WestgateComponent } from './creb/cities/calgary/districts/calgary-w/westgate/westgate.component';
import { WildwoodComponent } from './creb/cities/calgary/districts/calgary-w/wildwood/wildwood.component';
import { CalgaryCenterComponent } from './creb/cities/calgary/districts/calgary-center/calgary-center.component';
import { AltadoreComponent } from './creb/cities/calgary/districts/calgary-center/altadore/altadore.component';
import { AlythBonnybrookComponent } from './creb/cities/calgary/districts/calgary-center/alyth-bonnybrook/alyth-bonnybrook.component';
import { BanffTrailComponent } from './creb/cities/calgary/districts/calgary-center/banff-trail/banff-trail.component';
import { BankviewComponent } from './creb/cities/calgary/districts/calgary-center/bankview/bankview.component';
import { BelAireComponent } from './creb/cities/calgary/districts/calgary-center/bel-aire/bel-aire.component';
import { BeltlineComponent } from './creb/cities/calgary/districts/calgary-center/beltline/beltline.component';
import { BridgelandRiversideComponent } from './creb/cities/calgary/districts/calgary-center/bridgeland-riverside/bridgeland-riverside.component';
import { BritanniaComponent } from './creb/cities/calgary/districts/calgary-center/britannia/britannia.component';
import { BurnsIndustrialComponent } from './creb/cities/calgary/districts/calgary-center/burns-industrial/burns-industrial.component';
import { CambrianHeightsComponent } from './creb/cities/calgary/districts/calgary-center/cambrian-heights/cambrian-heights.component';
import { CapitolHillComponent } from './creb/cities/calgary/districts/calgary-center/capitol-hill/capitol-hill.component';
import { ChinatownComponent } from './creb/cities/calgary/districts/calgary-center/chinatown/chinatown.component';
import { CliffBungalowComponent } from './creb/cities/calgary/districts/calgary-center/cliff-bungalow/cliff-bungalow.component';
import { CrescentHeightsComponent } from './creb/cities/calgary/districts/calgary-center/crescent-heights/crescent-heights.component';
import { DowntownCommercialCoreComponent } from './creb/cities/calgary/districts/calgary-center/downtown-commercial-core/downtown-commercial-core.component';
import { DowntownEastVillageComponent } from './creb/cities/calgary/districts/calgary-center/downtown-east-village/downtown-east-village.component';
import { DowntownWestEndComponent } from './creb/cities/calgary/districts/calgary-center/downtown-west-end/downtown-west-end.component';
import { EauClaireComponent } from './creb/cities/calgary/districts/calgary-center/eau-claire/eau-claire.component';
import { ElbowParkComponent } from './creb/cities/calgary/districts/calgary-center/elbow-park/elbow-park.component';
import { ElboyaComponent } from './creb/cities/calgary/districts/calgary-center/elboya/elboya.component';
import { ErltonComponent } from './creb/cities/calgary/districts/calgary-center/erlton/erlton.component';
import { GarrisonWoodsComponent } from './creb/cities/calgary/districts/calgary-center/garrison-woods/garrison-woods.component';
import { GreenviewComponent } from './creb/cities/calgary/districts/calgary-center/greenview/greenview.component';
import { HighfieldComponent } from './creb/cities/calgary/districts/calgary-center/highfield/highfield.component';
import { HighlandParkComponent } from './creb/cities/calgary/districts/calgary-center/highland-park/highland-park.component';
import { HighwoodComponent } from './creb/cities/calgary/districts/calgary-center/highwood/highwood.component';
import { HillhurstComponent } from './creb/cities/calgary/districts/calgary-center/hillhurst/hillhurst.component';
import { HounsfieldHeightsBriarHillComponent } from './creb/cities/calgary/districts/calgary-center/hounsfield-heights-briar-hill/hounsfield-heights-briar-hill.component';
import { InglewoodComponent } from './creb/cities/calgary/districts/calgary-center/inglewood/inglewood.component';
import { KillarneyGlengarryComponent } from './creb/cities/calgary/districts/calgary-center/killarney-glengarry/killarney-glengarry.component';
import { LowerMountRoyalComponent } from './creb/cities/calgary/districts/calgary-center/lower-mount-royal/lower-mount-royal.component';
import { ManchesterComponent } from './creb/cities/calgary/districts/calgary-center/manchester/manchester.component';
import { ManchesterIndustrialComponent } from './creb/cities/calgary/districts/calgary-center/manchester-industrial/manchester-industrial.component';
import { MayfairComponent } from './creb/cities/calgary/districts/calgary-center/mayfair/mayfair.component';
import { MeadowlarkParkComponent } from './creb/cities/calgary/districts/calgary-center/meadowlark-park/meadowlark-park.component';
import { MissionComponent } from './creb/cities/calgary/districts/calgary-center/mission/mission.component';
import { MountPleasantComponent } from './creb/cities/calgary/districts/calgary-center/mount-pleasant/mount-pleasant.component';
import { ParkdaleComponent } from './creb/cities/calgary/districts/calgary-center/parkdale/parkdale.component';
import { ParkhillComponent } from './creb/cities/calgary/districts/calgary-center/parkhill/parkhill.component';
import { PointMcKayComponent } from './creb/cities/calgary/districts/calgary-center/point-mc-kay/point-mc-kay.component';
import { RamsayComponent } from './creb/cities/calgary/districts/calgary-center/ramsay/ramsay.component';
import { RenfrewComponent } from './creb/cities/calgary/districts/calgary-center/renfrew/renfrew.component';
import { RichmondComponent } from './creb/cities/calgary/districts/calgary-center/richmond/richmond.component';
import { RideauParkComponent } from './creb/cities/calgary/districts/calgary-center/rideau-park/rideau-park.component';
import { RosedaleComponent } from './creb/cities/calgary/districts/calgary-center/rosedale/rosedale.component';
import { RosemontComponent } from './creb/cities/calgary/districts/calgary-center/rosemont/rosemont.component';
import { RoxboroComponent } from './creb/cities/calgary/districts/calgary-center/roxboro/roxboro.component';
import { ScarboroComponent } from './creb/cities/calgary/districts/calgary-center/scarboro/scarboro.component';
import { ScarboroSunaltaWestComponent } from './creb/cities/calgary/districts/calgary-center/scarboro-sunalta-west/scarboro-sunalta-west.component';
import { ShaganappiComponent } from './creb/cities/calgary/districts/calgary-center/shaganappi/shaganappi.component';
import { SouthCalgaryComponent } from './creb/cities/calgary/districts/calgary-center/south-calgary/south-calgary.component';
import { StAndrewsHeightsComponent } from './creb/cities/calgary/districts/calgary-center/st-andrews-heights/st-andrews-heights.component';
import { SunaltaComponent } from './creb/cities/calgary/districts/calgary-center/sunalta/sunalta.component';
import { SunnysideComponent } from './creb/cities/calgary/districts/calgary-center/sunnyside/sunnyside.component';
import { TuxedoParkComponent } from './creb/cities/calgary/districts/calgary-center/tuxedo-park/tuxedo-park.component';
import { UpperMountRoyalComponent } from './creb/cities/calgary/districts/calgary-center/upper-mount-royal/upper-mount-royal.component';
import { WestHillhurstComponent } from './creb/cities/calgary/districts/calgary-center/west-hillhurst/west-hillhurst.component';
import { WindsorParkComponent } from './creb/cities/calgary/districts/calgary-center/windsor-park/windsor-park.component';
import { WinstonHeightsMountviewComponent } from './creb/cities/calgary/districts/calgary-center/winston-heights-mountview/winston-heights-mountview.component';
import { BelmontComponent } from './creb/cities/calgary/towns/belmont/belmont.component';
import { Stoney1Component } from './creb/cities/calgary/towns/stoney1/stoney1.component';
import { Stoney2Component } from './creb/cities/calgary/towns/stoney2/stoney2.component';
import { WolfWillowComponent } from './creb/cities/calgary/towns/wolf-willow/wolf-willow.component';
import { YorkvilleComponent } from './creb/cities/calgary/towns/yorkville/yorkville.component';
import { ZZZFakeCommunityComponent } from './creb/cities/calgary/towns/zzzfake-community/zzzfake-community.component';
import { AirdrieMeadowsComponent } from './creb/cities/airdrie/airdrie-meadows/airdrie-meadows.component';
import { BaysideComponent } from './creb/cities/airdrie/bayside/bayside.component';
import { BayspringsComponent } from './creb/cities/airdrie/baysprings/baysprings.component';
import { BigSpringsComponent } from './creb/cities/airdrie/big-springs/big-springs.component';
import { BuffaloRubComponent } from './creb/cities/airdrie/buffalo-rub/buffalo-rub.component';
import { CanalsComponent } from './creb/cities/airdrie/canals/canals.component';
import { ChinookGateComponent } from './creb/cities/airdrie/chinook-gate/chinook-gate.component';
import { CoopersCrossingComponent } from './creb/cities/airdrie/coopers-crossing/coopers-crossing.component';
import { DowntownComponent } from './creb/cities/airdrie/downtown/downtown.component';
import { EastLakeIndustrialComponent } from './creb/cities/airdrie/east-lake-industrial/east-lake-industrial.component';
import { EdgewaterComponent } from './creb/cities/airdrie/edgewater/edgewater.component';
import { FairwaysComponent } from './creb/cities/airdrie/fairways/fairways.component';
import { GatewayComponent } from './creb/cities/airdrie/gateway/gateway.component';
import { HillcrestComponent } from './creb/cities/airdrie/hillcrest/hillcrest.component';
import { JensenComponent } from './creb/cities/airdrie/jensen/jensen.component';
import { KingsHeightsComponent } from './creb/cities/airdrie/kings-heights/kings-heights.component';
import { KingsviewIndustrialParkComponent } from './creb/cities/airdrie/kingsview-industrial-park/kingsview-industrial-park.component';
import { LanarkComponent } from './creb/cities/airdrie/lanark/lanark.component';
import { LuxstoneComponent } from './creb/cities/airdrie/luxstone/luxstone.component';
import { MeadowbrookComponent } from './creb/cities/airdrie/meadowbrook/meadowbrook.component';
import { MidtownComponent } from './creb/cities/airdrie/midtown/midtown.component';
import { MorningsideComponent } from './creb/cities/airdrie/morningside/morningside.component';
import { PrairieSpringsComponent } from './creb/cities/airdrie/prairie-springs/prairie-springs.component';
import { RavenswoodComponent } from './creb/cities/airdrie/ravenswood/ravenswood.component';
import { ReunionComponent } from './creb/cities/airdrie/reunion/reunion.component';
import { SagewoodComponent } from './creb/cities/airdrie/sagewood/sagewood.component';
import { SierraSpringsComponent } from './creb/cities/airdrie/sierra-springs/sierra-springs.component';
import { SilverCreekComponent } from './creb/cities/airdrie/silver-creek/silver-creek.component';
import { SouthPointComponent } from './creb/cities/airdrie/south-point/south-point.component';
import { SouthWindsongComponent } from './creb/cities/airdrie/south-windsong/south-windsong.component';
import { StonegateComponent } from './creb/cities/airdrie/stonegate/stonegate.component';
import { SummerhillComponent } from './creb/cities/airdrie/summerhill/summerhill.component';
import { TheVillageComponent } from './creb/cities/airdrie/the-village/the-village.component';
import { ThorburnComponent } from './creb/cities/airdrie/thorburn/thorburn.component';
import { WilliamstownComponent } from './creb/cities/airdrie/williamstown/williamstown.component';
import { WillowbrookComponent } from './creb/cities/airdrie/willowbrook/willowbrook.component';
import { WindsongComponent } from './creb/cities/airdrie/windsong/windsong.component';
import { WoodsideComponent } from './creb/cities/airdrie/woodside/woodside.component';
import { YankeeValleyCrossingComponent } from './creb/cities/airdrie/yankee-valley-crossing/yankee-valley-crossing.component';
import { EastChestermereComponent } from './creb/cities/chestermere/east-chestermere/east-chestermere.component';
import { KinniburghComponent } from './creb/cities/chestermere/kinniburgh/kinniburgh.component';
import { LakesideGreensComponent } from './creb/cities/chestermere/lakeside-greens/lakeside-greens.component';
import { LakeviewLandingComponent } from './creb/cities/chestermere/lakeview-landing/lakeview-landing.component';
import { RainbowFallsComponent } from './creb/cities/chestermere/rainbow-falls/rainbow-falls.component';
import { TheBeachesComponent } from './creb/cities/chestermere/the-beaches/the-beaches.component';
import { TheCoveComponent } from './creb/cities/chestermere/the-cove/the-cove.component';
import { WestCreekComponent } from './creb/cities/chestermere/west-creek/west-creek.component';
import { WestmereComponent } from './creb/cities/chestermere/westmere/westmere.component';

@NgModule({
  declarations: [
    CalgaryComponent, 
    CalgaryNeComponent, CalgaryNwComponent, CalgarySeComponent, CalgarySwComponent, CalgarySComponent, CalgaryNComponent, CalgaryEComponent, CalgaryWComponent, AbbeydaleComponent, CalgaryInternationalAirportComponent, CastleridgeComponent, CityscapeComponent, CoralSpringsComponent, CornerstoneComponent, DeerfootBusinessCentreComponent, FalconridgeComponent, FranklinComponent, GreenviewIndustrialParkComponent, HorizonComponent, MarlboroughComponent, MarlboroughParkComponent, MartindaleComponent, MaylandComponent, MaylandHeightsComponent, McCallComponent, MeridianComponent, MontereyParkComponent, NorthAirwaysComponent, PegasusComponent, PineridgeComponent, RedstoneComponent, RundleComponent, SaddleRidgeComponent, SaddleridgeIndustrialComponent, SkyviewRanchComponent, SouthAirwaysComponent, StonegateLandingComponent, Stoney3Component, SunridgeComponent, TaradaleComponent, TempleComponent, VistaHeightsComponent, WestwindsComponent, WhitehornComponent, ArbourLakeComponent, BownessComponent, BrentwoodComponent, CharleswoodComponent, CitadelComponent, CollingwoodComponent, DalhousieComponent, EdgemontComponent, GreenwoodGreenbriarComponent, HamptonsComponent, HawkwoodComponent, MontgomeryComponent, RanchlandsComponent, RockyRidgeComponent, RoyalOakComponent, RoyalVistaComponent, ScenicAcresComponent, SilverSpringsComponent, TuscanyComponent, UniversityDistrictComponent, UniversityHeightsComponent, VarsityComponent, AuburnBayComponent, CopperfieldComponent, CranstonComponent, DouglasdaleGlenComponent, EastShepardIndustrialComponent, MahoganyComponent, McKenzieLakeComponent, McKenzieTowneComponent, NewBrightonComponent, OgdenComponent, RiverbendComponent, SetonComponent, ShepardIndustrialComponent, SouthFoothillsComponent, BeddingtonHeightsComponent, CarringtonComponent, CountryHillsComponent, CountryHillsVillageComponent, CoventryHillsComponent, EvanstonComponent, HarvestHillsComponent, HiddenValleyComponent, HuntingtonHillsComponent, KincoraComponent, LivingstonComponent, MacEwanGlenComponent, NolanHillComponent, NorthHavenComponent, NorthHavenUpperComponent, PanoramaHillsComponent, SageHillComponent, SandstoneValleyComponent, SherwoodComponent, SkylineWestComponent, ThorncliffeComponent, AlbertParkRadissonHeightsComponent, ApplewoodParkComponent, BelvedereComponent, DoverComponent, EastfieldComponent, ErinWoodsComponent, FoothillsComponent, ForestHeightsComponent, ForestLawnComponent, ForestLawnIndustrialComponent, GoldenTriangleComponent, GreatPlainsComponent, PenbrookeMeadowsComponent, RedCarpetComponent, SouthviewComponent, StarfieldComponent, ValleyfieldComponent, AcadiaComponent, BayviewComponent, BonavistaDownsComponent, BraesideComponent, BridlewoodComponent, CanyonMeadowsComponent, CedarbraeComponent, ChaparralComponent, ChinookParkComponent, DeerRidgeComponent, DeerRunComponent, EagleRidgeComponent, EastFairviewIndustrialComponent, EvergreenComponent, FairviewComponent, FairviewIndustrialComponent, HaysboroComponent, KelvinGroveComponent, KingslandComponent, LakeBonavistaComponent, LegacyComponent, MapleRidgeComponent, MidnaporeComponent, MillriseComponent, OakridgeComponent, OutofAreaCalgaryComponent, PalliserComponent, ParklandComponent, PineCreekComponent, PumpHillComponent, QueenslandComponent, ShawneeSlopesComponent, ShawnessyComponent, SilveradoComponent, SomersetComponent, SouthwoodComponent, SundanceComponent, WaldenComponent, WillowParkComponent, WoodbineComponent, WoodlandsComponent, AspenWoodsComponent, ChristieParkComponent, CoachHillComponent, CougarRidgeComponent, CrestmontComponent, CurrieBarracksComponent, DiscoveryRidgeComponent, GarrisonGreenComponent, GlamorganComponent, GlenbrookComponent, GlendaleComponent, LakeviewComponent, LincolnParkComponent, NorthGlenmoreParkComponent, PattersonComponent, RosscarrockComponent, RutlandParkComponent, SignalHillComponent, SpringbankHillComponent, SpruceCliffComponent, StrathconaParkComponent, ValleyRidgeComponent, WestSpringsComponent, WestgateComponent, WildwoodComponent, CalgaryCenterComponent, AltadoreComponent, AlythBonnybrookComponent, BanffTrailComponent, BankviewComponent, BelAireComponent, BeltlineComponent, BridgelandRiversideComponent, BritanniaComponent, BurnsIndustrialComponent, CambrianHeightsComponent, CapitolHillComponent, ChinatownComponent, CliffBungalowComponent, CrescentHeightsComponent, DowntownCommercialCoreComponent, DowntownEastVillageComponent, DowntownWestEndComponent, EauClaireComponent, ElbowParkComponent, ElboyaComponent, ErltonComponent, GarrisonWoodsComponent, GreenviewComponent, HighfieldComponent, HighlandParkComponent, HighwoodComponent, HillhurstComponent, HounsfieldHeightsBriarHillComponent, InglewoodComponent, KillarneyGlengarryComponent, LowerMountRoyalComponent, ManchesterComponent, ManchesterIndustrialComponent, MayfairComponent, MeadowlarkParkComponent, MissionComponent, MountPleasantComponent, ParkdaleComponent, ParkhillComponent, PointMcKayComponent, RamsayComponent, RenfrewComponent, RichmondComponent, RideauParkComponent, RosedaleComponent, RosemontComponent, RoxboroComponent, ScarboroComponent, ScarboroSunaltaWestComponent, ShaganappiComponent, SouthCalgaryComponent, StAndrewsHeightsComponent, SunaltaComponent, SunnysideComponent, TuxedoParkComponent, UpperMountRoyalComponent, WestHillhurstComponent, WindsorParkComponent, WinstonHeightsMountviewComponent, BelmontComponent, Stoney1Component, Stoney2Component, WolfWillowComponent, YorkvilleComponent, ZZZFakeCommunityComponent, 
    AirdrieComponent, 
    AirdrieMeadowsComponent, BaysideComponent, BayspringsComponent, BigSpringsComponent, BuffaloRubComponent, CanalsComponent, ChinookGateComponent, CoopersCrossingComponent, DowntownComponent, EastLakeIndustrialComponent, EdgewaterComponent, FairwaysComponent, GatewayComponent, HillcrestComponent, JensenComponent, KingsHeightsComponent, KingsviewIndustrialParkComponent, LanarkComponent, LuxstoneComponent, MeadowbrookComponent, MidtownComponent, MorningsideComponent, PrairieSpringsComponent, RavenswoodComponent, ReunionComponent, SagewoodComponent, SierraSpringsComponent, SilverCreekComponent, SouthPointComponent, SouthWindsongComponent, StonegateComponent, SummerhillComponent, TheVillageComponent, ThorburnComponent, WilliamstownComponent, WillowbrookComponent, WindsongComponent, WoodsideComponent, YankeeValleyCrossingComponent, 
    ChestermereComponent, 
    EastChestermereComponent, KinniburghComponent, LakesideGreensComponent, LakeviewLandingComponent, RainbowFallsComponent, TheBeachesComponent, TheCoveComponent, WestCreekComponent, WestmereComponent,
    OtherCityTownsComponent, 
    MetaComponent, 
    TopContentComponent, 
    ListViewComponent, 
    TownsComponent, 
    CommunityListViewComponent, 
    BottomContentComponent
  ],
  imports: [
    CommonModule,
    AreaRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    FlexLayoutModule,
    HttpClientModule,
    ComponentsModule
  ]
})
export class AreaModule { }
