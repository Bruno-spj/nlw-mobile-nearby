import { useRef } from "react";
import { Text, useWindowDimensions } from "react-native";
import { Place, PlaceProps } from "../place"; 
import BottomSheet, {BottomSheetFlatList} from "@gorhom/bottom-sheet";
import { s } from "./styles";


type Props = {
  data: PlaceProps[]
}

export function Places({data}: Props){
  const dimensions = useWindowDimensions()
  const BottomSheetRef = useRef<BottomSheet>(null)

  const snapPoints = {
    min: 278,
    max: dimensions.height -128
  }
  return(
    <BottomSheet 
      ref={BottomSheetRef}
      snapPoints={[snapPoints.min, snapPoints.max]}
      handleIndicatorStyle={s.indicator}
      backgroundStyle={s.container}
      enableOverDrag={false}
    >
      <BottomSheetFlatList 
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Place data={item} />}
        contentContainerStyle={s.container}
        ListHeaderComponent={() => (
          <Text style={s.title}>Explore locais perto de você</Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </BottomSheet>
  )
}