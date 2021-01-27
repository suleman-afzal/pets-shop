<?php

use Illuminate\Database\Seeder;

class TagsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
          
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, 'https://spreadsheets.google.com/feeds/cells/1c-sfN95hQMLebSmTmet0Hk3jxZ-lqP0jSZkpJnUds3g/od6/public/basic?alt=json');
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $result = curl_exec($curl);
        $result = json_decode($result, true);

        //$result = json_decode($result, true);

        $total_number =  count($result["feed"]["entry"]);
        
        for($x=0; $x<$total_number; $x++){

            $dog_name = $result['feed']['entry'][$x]['content']['$t'];

            DB::table('tags')->insert([
                'name' => $dog_name,
                'details' => 'Details ',
                'parent' => 'Dog'
            ]);
        }
        curl_close($curl);

    }
}
