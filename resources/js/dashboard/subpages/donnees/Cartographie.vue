<template lang="">
   <div class="container-fluid">
      <section class="content-header">
         <div class="container-fluid">
            <div class="row mb-2">
               <div class="col-sm-12 text-center">
                  <h4>
                     Cartographie 
                  </h4>
               </div>
            </div>
         </div>
         <!-- /.container-fluid -->
      </section>
      <div>
         <div class="row justify-content-center">
            <div class="col-lg-10">
               <div class="card">
                  <div class="card-body">
                     <div style="height: 700px; width: 100%">
                      <div>
      <span v-if="loading">Loading...</span>
      
    </div>
    <l-map
      :zoom="zoom"
      :center="center"
      style="height: 700px; width: 100%"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
        <l-geo-json
        v-if="showProvinces"
        :geojson="provincegeojson"
        :options-style="ProvincestyleFunction"
      />
     
     
      <l-geo-json
        v-if="showCommunes"
        :geojson="communesgeojson"
        :options-style="CommunestyleFunction"
      />
      <l-geo-json
        v-if="showRegions"
        :geojson="regionsgeojson"
        :options-style="RegionstyleFunction"
      />
    
    </l-map>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="row justify-content-center">
            <div class="col-lg-10">
               <div class="card">
                  <div class="card-body">
                     <div class="row d-flex justify-content-around">
                        <div class="col-sm-5  bordercol">
                           <ul class="list-group">
                              <li class="list-group-item border-0 align-items-center">
                                 <div class="form-group clearfix">
                                    <div class="icheck-primary  d-inline">
                                       <input type="checkbox" id="" disabled="">
                                        <label for="checkboxPrimary1">
                                        Limites Geographique
                                        </label>
                                    </div>
                                 </div>
                                 <ul class="list-group">
                                    <li class="list-group-item border-0">
                                       <div class="col-sm-6">
                                          <!-- checkbox -->
                                          <div class="form-group clearfix">
                                             <div class="icheck-primary d-inline">
                                                <input type="checkbox" v-model="showRegions" id="checkboxPrimary1" checked="">
                                                <label for="checkboxPrimary1">
                                                Limite Regionales
                                                </label>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                    <li class="list-group-item border-0">
                                       <div class="col-sm-6">
                                          <!-- checkbox -->
                                          <div class="form-group clearfix">
                                             <div class="icheck-primary d-inline">
                                                <input type="checkbox" v-model="showProvinces" id="checkboxPrimary2">
                                                <label for="checkboxPrimary2">
                                                Limite Provinciales
                                                </label>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                    <li class="list-group-item border-0">
                                       <div class="col-sm-6">
                                          <!-- checkbox -->
                                          <div class="form-group clearfix">
                                             <div class="icheck-primary d-inline">
                                                <input type="checkbox" v-model="showCommunes" id="checkboxPrimary3">
                                                <label for="checkboxPrimary3">
                                                Limite Communales
                                                </label>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                 </ul>
                                 <!-- checkbox -->
                                 <div class="form-group clearfix">
                                    <div class="icheck-primary d-inline">
                                       <input type="checkbox" id="hydrocheck">
                                       <label for="hydrocheck">
                                       Hydrographie
                                       </label>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </div>
                        <div class="col-sm-5 bordercol">
                           <div class="form-group clearfix mt-3">
                              <div class="icheck-primary d-inline">
                                 <input type="checkbox" id="vitessecheck" >
                                 <label for="vitessecheck">
                                 Vitesse du vent
                                 </label>
                              </div>
                           </div>
                           <div class="form-group clearfix mt-4">
                              <div class="icheck-primary d-inline">
                                 <input type="checkbox" id="routecheck" >
                                 <label for="routecheck">
                                 Routes
                                 </label>
                              </div>
                           </div>
                           <div class="form-group clearfix mt-4">
                              <div class="icheck-primary d-inline">
                                 <input type="checkbox" id="altitcheck">
                                 <label for="altitcheck">
                                 Altitude Moyenne
                                 </label>
                              </div>
                           </div>
                           <div class="form-group clearfix mt-4">
                              <div class="icheck-primary d-inline">
                                 <input type="checkbox" id="tempcheck" >
                                 <label for="tempcheck">
                                 Temperature
                                 </label>
                              </div>
                           </div>
                           <div class="form-group clearfix mt-4">
                              <div class="icheck-primary d-inline">
                                 <input type="checkbox" id="densitecheck" >
                                 <label for="densitecheck">
                                 Densite d'animaux d'elevages
                                 </label>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip, LGeoJson  } from "vue2-leaflet";
export default {
      components: {
    LMap,
    LTileLayer,
    LGeoJson,
    LMarker
  },
  data() {
    return {
      loading: false,
      showRegions: true,
      showProvinces: false,
      showCommunes: false,
      zoom: 5.5,
      center: [29.7917, -13.219482],
      regionsgeojson: null,
      provincegeojson: null,
      communesgeojson: null,
      RegionfillColor: "#e4ce7f",
      ProvincefillColor: "#17d440",
      CommunefillColor: "#ff0000",
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: latLng(47.41322, -1.219482)
    };
  },
  computed: {
 
    RegionstyleFunction() {
      const RegionfillColor = this.RegionfillColor; // important! need touch fillColor in computed for re-calculate when change fillColor
      return () => {
        return {
          weight: 2,
          color: "orange",
          opacity: 1,
          fillColor: RegionfillColor,
          fillOpacity: 0.2
        };
      };
    },
   ProvincestyleFunction() {
         const ProvincefillColor = this.ProvincefillColor; // important! need touch fillColor in computed for re-calculate when change fillColor
         return () => {
         return {
            weight: 2,
            color: "black",
            opacity: 1,
            fillColor: ProvincefillColor,
            fillOpacity: 0.2
         };
         };
      },
    CommunestyleFunction() {
      const CommunefillColor = this.CommunefillColor; // important! need touch fillColor in computed for re-calculate when change fillColor
      return () => {
        return {
          weight: 2,
          color: "white",
          opacity: 1,
          fillColor: CommunefillColor,
          fillOpacity: 0.2
        };
      };
    },
 
    
  },
  async created() {
    this.loading = true;
    const regionresponse = await fetch("http://127.0.0.1:8000/region.geojson");
    const regiondata = await regionresponse.json();
    this.regionsgeojson = regiondata;

    const communesresponse = await fetch("http://127.0.0.1:8000/communes.json");
    const communesdata = await communesresponse.json();
    this.communesgeojson = communesdata;

    const provinceresponse = await fetch("http://127.0.0.1:8000/province.geojson");
    const provincedata = await provinceresponse.json();
    this.provincegeojson = provincedata;

    this.loading = false;
  }
 
    
}
</script>
<style lang="css" scoped>

.bordercol{
    border-top: 1px solid rgb(230, 230, 230);
    border-bottom: 1px solid rgb(230, 230, 230);
}
    
</style>