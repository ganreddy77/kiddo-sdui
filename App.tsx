import React, {
  useState,
  useEffect,
} from "react";

import {
  SafeAreaView,
  View,
  Button,
  ScrollView,
} from "react-native";

import Renderer from "./src/engine/Renderer";

import CartCounter from "./src/components/CartCounter";
import CartItems from "./src/components/CartItems";
import ClearCartButton from "./src/components/ClearCartButton";

import {
  ThemeProvider,
} from "./src/context/ThemeContext";

import {
  trackEvent,
} from "./src/utils/analytics";

import {
  getCampaign,
} from "./src/api/campaignApi";

export default function App() {
  const [campaign, setCampaign] =
    useState<any>(null);

  const loadCampaign = async (
    name: string
  ) => {
    try {
      console.log(
        "Loading campaign:",
        name
      );

      const data =
        await getCampaign(name);

      console.log(
        "Campaign received:",
        data
      );

      setCampaign(data);

      trackEvent(
        "campaign_switch",
        {
          campaign: name,
        }
      );
    } catch (error) {
      console.log(
        "Campaign load failed:",
        error
      );
    }
  };

  useEffect(() => {
    loadCampaign(
      "backToSchool"
    );
  }, []);

  if (!campaign) {
    return null;
  }

  console.log(
    "CURRENT CAMPAIGN:",
    campaign
  );

  return (
    <ThemeProvider
      theme={campaign.theme}
    >
      <SafeAreaView
        style={{ flex: 1 }}
      >
        <ScrollView>
          <View
            style={{
              margin: 10,
            }}
          >
            <Button
              title="BACK TO SCHOOL"
              onPress={() =>
                loadCampaign(
                  "backToSchool"
                )
              }
            />

            <View
              style={{
                height: 10,
              }}
            />

            <Button
              title="SUMMER SALE"
              onPress={() =>
                loadCampaign(
                  "summerSale"
                )
              }
            />
          </View>

          <CartCounter />

          <CartItems />

          <ClearCartButton />

          <View>
            {campaign.components?.map(
              (item: any) => (
                <Renderer
                  key={item.id}
                  node={item}
                />
              )
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
}