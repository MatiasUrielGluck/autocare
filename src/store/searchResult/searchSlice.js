import { createSlice } from "@reduxjs/toolkit";
import { sampleLoader } from "../../helpers/openai";
import store from "../store";

export const searchSlice = createSlice({
    name: "searchResult",
    initialState: {
        query: "",
        result: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            eos, placeat fugit est minus, quibusdam non provident earum debitis
            magnam dolore dignissimos hic consequatur dolor omnis aspernatur
            laboriosam numquam veritatis eligendi. Id unde qui vel amet ea at
            incidunt? Ea, sapiente ad! Eius reiciendis maxime magni. Quaerat
            necessitatibus numquam veritatis repudiandae ex! Est doloribus magni
            quaerat facilis vero, neque accusamus consequatur quas ad quod
            repellendus aut, odio, blanditiis dolores officia at unde? Iure
            saepe dolor itaque magnam excepturi nemo asperiores. Voluptas beatae
            ipsam nostrum maiores repellendus voluptates magni provident
            ducimus? Quisquam ullam adipisci praesentium fugiat voluptatum
            soluta, cumque, harum velit facere commodi dolor iusto animi sed
            nobis, minima saepe quaerat? Commodi reprehenderit animi explicabo
            repellendus iste! Illo repellat voluptatum est eum perspiciatis
            tenetur deserunt incidunt consequatur! Explicabo minus veritatis
            repellat quia odit quam distinctio quis officiis voluptatem! Est
            perspiciatis sunt, saepe dignissimos in voluptatem necessitatibus
            velit impedit doloribus vel nemo expedita cum sapiente beatae,
            delectus repellendus sit cumque architecto! Repellat nesciunt
            tempora natus, accusamus, impedit maxime ipsam eligendi doloremque,
            esse cumque reprehenderit laudantium vitae. Quod ut voluptatem
            impedit reprehenderit! Incidunt, minima ut molestias illo mollitia
            suscipit aperiam cum quae quia, natus sapiente sed praesentium
            facilis asperiores labore, inventore dolorem deleniti. Asperiores
            cupiditate, alias quam deserunt in sapiente quasi dolores? Illo,
            suscipit itaque! Ad autem laboriosam nulla vel at impedit nam quam
            illum ipsa quasi rem aliquid nobis cum rerum quae sunt architecto,
            illo quas maxime. Eum voluptas nam ad. Eos, sed dolorum. Dolore
            molestias architecto sint! Atque, asperiores quibusdam molestiae
            recusandae est quaerat. Maxime voluptatibus perferendis dicta
            suscipit nihil. Cupiditate provident praesentium veniam dicta
            corrupti nesciunt, recusandae eaque hic iste maxime molestias
            cumque, quaerat in, quidem voluptatum? Cum minima culpa sint
            voluptatem eos maxime voluptas at quia minus non nisi, eaque itaque
            reiciendis quod ducimus fugiat? Molestias fugit, ducimus maxime
            nostrum quam sunt in, autem ullam pariatur suscipit qui eaque nihil
            provident voluptatibus nam vel? Deserunt, dicta nihil. Praesentium
            esse tempora sed officia dignissimos. Distinctio, possimus! Eaque
            minima maiores delectus dolorem quae expedita adipisci quod unde
            pariatur molestias explicabo, culpa asperiores minus rerum, a
            deleniti vero tempore, voluptas cum veniam eligendi harum! Facilis
            itaque odio at eos possimus ratione culpa aliquam. Reiciendis et
            quasi quidem fuga eum, delectus debitis cumque illo quos repellendus
            in? Error esse pariatur sunt obcaecati culpa unde nobis fugiat
            dolorum est delectus, molestiae nisi modi. Inventore, amet. Fuga
            ullam eius quis perspiciatis a illo consequuntur earum itaque odio
            dolore. Voluptate debitis fuga dolorem explicabo nihil doloribus
            possimus nulla molestias natus illo quo, officia nemo quam minus,
            numquam praesentium ullam corrupti temporibus. Labore,
            necessitatibus dolores iure libero ducimus eum reprehenderit
            inventore totam est, velit vero assumenda alias delectus corrupti,
            expedita perferendis sint consequatur pariatur consectetur
            exercitationem explicabo distinctio autem aliquam! Deleniti eveniet
            consequatur ducimus! Sunt vel et quas nam quidem ipsa nulla,
            cupiditate consequuntur incidunt optio unde earum veniam libero
            voluptatibus eveniet deleniti doloribus dicta atque sit minima!
            Maiores ad in molestias exercitationem vero culpa nulla illum sunt
            repudiandae velit natus voluptatum ut voluptates, quibusdam facere
            eius?`,
        loading: false
    },
    reducers: {
        setQuery: (state, action) => {
            // console.log(action.payload)
            state.query = action.payload
        },
        doQuery: (state) => {
            state.loading = true
            sampleLoader(state.query).then(e => {
                store.dispatch(setResult(e))
            })
        },
        setResult: (state, action) => {
            state.loading = false
            state.result = action.payload
        }
    }
})

export const { setQuery, doQuery, setResult } = searchSlice.actions

export default searchSlice.reducer