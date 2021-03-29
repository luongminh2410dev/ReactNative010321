import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View , Image, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import Box from '../components/Box'
import { SliderBox } from "react-native-image-slider-box"
import RNPickerSelect from 'react-native-picker-select'
export default class TestScreen extends Component {
    constructor(props)
    {
        super(props)
        this.state ={
            items: [
                {id: 1, title: 'Món Quảng xuyên Việt', 
                    address: '39/10 Hoàng Đạo Thúy, Q. Hoàng Mai, Hà Nội', label: 'Bistro', 
                    picture: {uri: 'https://images.foody.vn/res/g100/991138/prof/s640x400/foody-upload-api-foody-mobile-hmzz-191218121126.jpg'} },
                {id: 2, title: 'Bún Bò Đất Thánh - Shop Online', 
                    address: '221/16 Đất Thánh, P. 6, Tân Bình, TP. HCM', label: 'Shop Online', 
                    picture: {uri: 'https://images.foody.vn/res/g103/1020115/prof/s640x400/foody-upload-api-foody-mobile-hmzz-200421103141.jpg'} },
                {id: 3, title: 'Quán Bún Dì Vân', 
                    address: '66/32 Trần Văn Quang, P. 10, Tân Bình, TP. HCM', label: 'Bistro', 
                    picture: {uri: 'https://images.foody.vn/res/g102/1018583/prof/s640x400/foody-upload-api-foody-mobile-hmb-200410113701.jpg'} },
                {id: 4, title: 'Rules Of Tea - Trà Sữa Đế Vương', 
                    address: '213D Nguyễn Văn Cừ, P. 3, Quận 5, TP. HCM', label: 'Coffee/Dessert', 
                    picture: {uri: 'https://images.foody.vn/res/g69/682061/s120x120/2018913135214-tra-sua-khoai-mon-tran-chau.jpg'}},
                {id: 5, title: 'Bếp Bà Muối - Ăn Vặt Online', 
                    address: '606/52 Đường 3 Tháng 2, P. 14, Quận 10, TP. HCM', label: 'Shop Online', 
                    picture: {uri: 'https://images.foody.vn/res/g103/1024417/prof/s640x400/foody-upload-api-foody-mobile-hmzz-200520100244.jpg'}},
                {id: 6, title: 'TocoToco Bubble Tea - Bờ Bao Tân Thắng', 
                    address: 'Chung Cư Ruby Block E1-23, Bờ Bao Tân Thắng, P. Sơn Kỳ, Tân Phú, TP. HCM', label: 'Coffee/Dessert', 
                    picture: {uri: 'https://images.foody.vn/res/g77/769606/prof/s640x400/foody-upload-api-foody-mobile-undefined-toco-toco--180814171848.jpg'}},
                {id: 7, title: 'Sunny House - Sinh Tố & Nước Ép', 
                    address: '499/24 Quang Trung, P. 10, Gò Vấp, TP. HCM', label: 'Street food', 
                    picture: {uri: 'https://images.foody.vn/res/g103/1022397/prof/s640x400/foody-upload-api-foody-mobile-9a-200525142151.jpg'}},
                {id: 8, title: 'Ăn Vặt 1989 - Chân Gà Xóc Xoài - Tân Mỹ', 
                    address: '30 Tân Mỹ, P. Tân Thuận Tây, Quận 7, TP. HCM', label: 'Street food', 
                    picture: {uri: 'https://images.foody.vn/res/g104/1037747/prof/s640x400/file_restaurant_photo_7lap_16021-c4017928-201008171834.jpeg'}}
            ],
            imageAds: [
                'https://media.foody.vn/images/beauty-upload-api-675x355-210322113825.jpg',
                'https://images.foody.vn/biz_banner/foody-upload-api-food-biz-210318113825.jpg',
                'https://media.foody.vn/images/beauty-upload-api-675x355-210322114015.jpg',
                'https://images.foody.vn/biz_banner/foody-upload-api-food-biz-210322154516.jpg',
            ],
            filterMode: 'Show_A',
        }
        
    }
    
    onValueChange = () => {

    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <SliderBox 
                    images = {this.state.imageAds}
                    autoplay = {true}
                    circleLoop = {true}
                />
                
                
                <View style={styles.menubar}>
                    <View style={styles.menubar_logo}>
                        <Icon name="android1" size={30} color='#cf2127'/>
                        <Text style={styles.menubar_logotext}>Giao tận nơi</Text>
                    </View>
                    <TouchableOpacity style={styles.menubar_touchable}>
                        <Text style={styles.menubar_touchabletext}>Deal hôm nay</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menubar_touchable}>
                        <Text style={styles.menubar_touchabletext}>Food</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menubar_touchable}>
                        <Text style={styles.menubar_touchabletext}>Drink</Text>
                    </TouchableOpacity>
                </View>

                
                <View style={styles.listItem}>
                    <FlatList
                        numColumns = '2'
                        data = {this.state.items}
                        keyExtractor={(item, index) => item.id.toString()}
                        renderItem={({item, index}) => (
                            <View style={styles.item}>
                                <Image 
                                    style={styles.item_Image}
                                    source={item.picture}
                                    resizeMode = 'stretch' 
                                />
                                <View style={styles.item_content}>
                                    <Text 
                                        style={styles.item_contentTitle}
                                        numberOfLines = {1}
                                        >
                                        {item.title}
                                    </Text>
                                    <Text style={{color: '#888'}}>{item.address}</Text>
                                    <View style={styles.item_contentTago}>
                                        <Icon
                                            name="tag" size={15} color='#cf2127'
                                        />
                                        <Text>{item.label}</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                </View>
                
                
                <Image
                        style={{height: 60, marginTop: 8, marginBottom: 8}}
                        source = {{uri: 'https://media.foody.vn/images/beauty-upload-api-thiet-ke-khong-ten-%2829%29-210225115257.jpg'}}
                    />
                <View style={styles.menubar2}>
                    <View style={styles.menubar_logo}>
                        <Icon name="rest" size={30} color='#f37934'/>
                        <Text style={styles.menubar_logotext}>Đặt bàn ưu đãi</Text>
                    </View>
                    <View style={styles.menubar2_picker} >
                        {/* <RNPickerSelect
                            value = 'Tìm các danh mục'
                            onValueChange = {this.onValueChange}
                            items={[
                                {label: 'Buffet', value: 'Show_Forgot'},
                                {label: 'Shushi', value: 'Show_Memorized'},
                                {label: 'Hải sản', value: 'Show_Memorized'},
                                {label: 'Món Việt', value: 'Show_Memorized'},
                            ]}
                        /> */}
                        <RNPickerSelect
                            value = {this.state.filterMode}
                            onValueChange = {this.onValueChange}
                            items={[
                                {label: 'Nổi bật', value: 'Show_A'},
                                {label: 'Đặt nhiều', value: 'Show_B'},
                                {label: 'Gần tôi', value: 'Show_C'},
                            ]}
                        />
                    </View>
                </View>
                
                
                <View style={styles.listItem2}>
                    <FlatList
                        numColumns = '1'
                        data = {this.state.items}
                        keyExtractor={(item, index) => item.id.toString()}
                        renderItem={({item, index}) => (
                            <View style={styles.item}>
                                <Image 
                                    style={styles.item_Image}
                                    source={item.picture}
                                    resizeMode = 'stretch' 
                                />
                                <View style={styles.item_content}>
                                    <Text 
                                        style={styles.item_contentTitle}
                                        numberOfLines = {1}
                                        >
                                        {item.title}
                                    </Text>
                                    <Text style={{color: '#888'}}>{item.address}</Text>
                                    <View style={styles.item_contentTago}>
                                        <Icon
                                            name="tag" size={15} color='#cf2127'
                                        />
                                        <Text>{item.label}</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 2,
        backgroundColor: '#eeeeee',
    },
    menubar: {
        height: 50,
        flexDirection: 'row',
        borderWidth: 0.2,
        borderColor: 'gray',
        justifyContent: 'space-evenly',
        backgroundColor: 'white'
    },
    menubar_logo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    menubar_logotext: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    menubar_touchable: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        borderBottomWidth: 1,
        borderBottomColor: '#cf2127',
        
    },
    menubar_touchabletext: {
        fontSize : 16,
    },
    listItem: {
        flex: 1, 
        flexDirection: 'column',
        backgroundColor: '#eeeeee',
    },
    item: {
        flex: 1,
        flexDirection: 'column',
        margin: 4,
        backgroundColor: '#ffffff'

    },
    item_Image: {
        flex: 1,
        height: 150
    },
    item_content: {
        flex: 1,
        flexDirection: 'column',
        padding: 4
    },
    item_contentTitle: {
        fontWeight: 'bold',
        overflow: 'hidden',
    },
    item_contentTago: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    menubar2: {
        height: 50,
        flexDirection: 'row',
        borderWidth: 0.2,
        borderColor: 'gray',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    menubar2_picker: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.2,
        borderColor: 'gray',
        height: 20,
        width: 140
    },

    listItem2: {
        flex: 1, 
        flexDirection: 'column',
        backgroundColor: '#eeeeee',
        paddingLeft: 50,
        paddingRight: 50,
    },
})